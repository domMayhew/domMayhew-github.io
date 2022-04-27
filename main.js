let container = document.getElementsByClassName("slideshow-container")[0];
photoCarousel.initializeSlides(container,"res/images/slideshow/", "slide", ".webp", 3);

const words = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eigth", "ninth", "tenth"];
const titles = ["Learn", "Shop", "Collaborate"];

// Initialize card carousels.
const main = document.getElementsByTagName("main")[0];
departments.forEach(department => {
    const cards = [];
    department.categories.forEach(category => {
        category.items.forEach(item => {
            cards.push(Card.makeCard(item));
        })
    })

    new CardCarousel(main, department.title, cards);
})