class CardCarousel {
    constructor(parent, title, cards, className = "card-carousel") {   
        this.pos = 0;
        // Title
        const titleContainer = document.createElement("div");
        titleContainer.className = "card-carousel-title center-horizontal";
        const titleH1 = document.createElement("h1");
        titleH1.innerHTML = title;
        titleContainer.appendChild(titleH1);
        // Container
        const carouselContainer = document.createElement("div");
        carouselContainer.className = className + " center-horizontal";
        // Store 'this' for event handlers.
        this.arrowPrev = document.createElement("span");
        this.arrowPrev.className = "arrow-prev";
        this.arrowPrev.innerHTML = "&#10094";
        // Right arrow
        this.arrowNext = document.createElement("span");
        this.arrowNext.className = "arrow-next";
        this.arrowNext.innerHTML = "&#10095";
        // Card container. This div clips the track to the right size.
        const cardContainer = document.createElement("div");
        cardContainer.className = "card-container";
        // Track. Contains the cards.
        this.track = document.createElement("div");
        this.track.className = "track";
        // Add the cards to track in a random order.
        while (cards.length > 0) {
            let index = Math.floor(Math.random() * cards.length);
            this.track.appendChild(cards[index]);
            cards.splice(index, 1);
        }

        // Put it all together.
        parent.insertBefore(titleContainer, document.getElementById("contactFormContainer"));
        parent.insertBefore(carouselContainer, document.getElementById("contactFormContainer"));
        carouselContainer.appendChild(this.arrowPrev);
        carouselContainer.appendChild(this.arrowNext);
        carouselContainer.appendChild(cardContainer);
        cardContainer.appendChild(this.track);
        this._element = carouselContainer;

        this.arrowPrev.addEventListener("click", () => this.moveTrack(-1));
        this.arrowNext.addEventListener("click", () => this.moveTrack(1));

        window.addEventListener('resize', () => {
            this.pos = 0; // Scrolling on resize wasn't working if the cards changed size from the scroll, so I've set it to scroll to the beginning every time.
            this.moveTrack(0);
        });
    }

    moveTrack(amount) {
        const cards = this.track.children;
        const numCards = cards.length;
        const displayedCards = getComputedStyle(document.querySelector(".card")).getPropertyValue('--display-count');
        let pos = this.pos;
        const track = this.track;
    
        // Make sure move is valid.
        if (pos + amount > numCards - displayedCards) {
            pos = numCards - displayedCards;
        } else if (pos + amount < 0) {
            pos = 0;
        } else {
            pos += amount;
        }
    
        // Get element width, move track by a whole number of element widths.
        const elementStyle = window.getComputedStyle(track.children[0])
        const elementWidth = parseFloat(elementStyle.marginLeft.slice(0, -2) * 2) + parseFloat(elementStyle.width.slice(0,-2));
        track.style.left = "-" + elementWidth * pos + "px";
    
        if (pos == track.children.length - displayedCards) {
            this.arrowNext.style.visibility = "hidden";
        } else if (numCards > displayedCards) {
            this.arrowNext.style.visibility = "visible";
        }
        if (pos > 0 && numCards > displayedCards) {
            this.arrowPrev.style.visibility = "visible";
        } else {
            this.arrowPrev.style.visibility = "hidden";
        }
        this.pos = pos;
    }
    
    getElement() {
        return this._element;
    }
}

class Card {
    constructor({title, imgFilePath, imgCitation, description, className = "card"}) {
        // Card Container Div
        const container = document.createElement("div");
        container.className = className;
        // Image
        if (imgFilePath) {
            const img = document.createElement("img");
            img.src = imgFilePath;
            container.appendChild(img);
        }
        if (imgCitation) {
            const imgCitationElement = document.createElement("cite");
            imgCitationElement.innerHTML = imgCitation;
            container.appendChild(imgCitationElement);
        }
        // Title Div and H3
        if (title) {
            const titleDiv = document.createElement("div");
            titleDiv.className = "title";
            const titleH3 = document.createElement("h3");
            titleH3.innerHTML = title;
            titleDiv.appendChild(titleH3);
            container.appendChild(titleDiv);
        }
        // Description
        if (description) {
            const descNode = document.createElement("p");
            descNode.innerHTML = description;
            descNode.className = "description";
            container.appendChild(descNode);
        }

        this._element = container;
    }

    getElement() { return this._element; };

    static makeCard(cardData) { return new Card(cardData).getElement(); };
}