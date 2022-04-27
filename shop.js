const shopDepartment = departments.filter(department => department.title == "Shop")[0];
displayCategory(shopDepartment.categories[0]);

// Create side nav.
const sideNav = document.getElementById("side-nav");
shopDepartment.categories.forEach(category => {
    const navCategory = document.createElement("div");
    navCategory.className = "nav-category";
    makeAndAppendPara(category.title, navCategory, () => { console.log("Triggered"); displayCategory(category); });
    category.items.forEach(item => makeAndAppendPara(item.title, navCategory));
    sideNav.appendChild(navCategory);
});

function makeAndAppendPara(content, parent, clickListener) {
    const para = document.createElement("p");
    para.innerHTML = content;
    if (clickListener) {
        para.onclick = clickListener;
    }
    parent.appendChild(para);
}

// Display a category's items.
function displayCategory(category) {
    const contentContainer = document.getElementsByClassName("content")[0];
    // Remove existing items.
    contentContainer.innerHTML = "";
    // Add new items.
    category.items.forEach(item => {
        contentContainer.appendChild(Card.makeCard(item));
    });
}