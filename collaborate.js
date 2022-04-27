class CategoryCard {
    expanded = false;
    items;
    expansionArrow;

    constructor( { title, items, className = "card-forum-category" } ) {
        // Container
        const container = document.createElement("div");
        container.className = className;
        // Title
        if (title) {
            const titleH1 = document.createElement("h1");
            titleH1.className = "title";
            titleH1.innerHTML = title;
            container.appendChild(titleH1);
        }
        // Expand triangle.
        this.expansionArrow = document.createElement("span");
        this.expansionArrow.className = "expand-triangle material-symbols-outlined";
        this.expansionArrow.innerHTML = "expand_more";
        container.appendChild(this.expansionArrow);

        // Append items.
        this.items = items; // For the expansion click handler.
        for (let item of items) {
            container.appendChild(item);
        }

        // Expansion click listener
        container.addEventListener("click", () => this.expand());

        this._element = container;
    }

    expand() {
        const displayValue = this.expanded ? "none" : "inline-block";
        this.items.forEach(item => item.style.display = displayValue);
        this.expanded = !this.expanded;
        this.expansionArrow.style.transform = "rotateZ(" + (this.expanded ? "180deg" : "0deg") + ")";
    }

    getElement() { return this._element; }

    static makeCard(categoryData) {
        return new CategoryCard(categoryData).getElement();
    }
}

const categories = departments.filter(department => department.title == "Collaborate")[0].categories;
const contentContainer = document.getElementsByClassName("content")[0];
categories.forEach(category => {
    const categoryCard = CategoryCard.makeCard({
        title: category.title,
        items: category.items.map(item => {
            item["className"] = "card-forum";
            return Card.makeCard(item);
        })
    });
    contentContainer.appendChild(categoryCard);
})