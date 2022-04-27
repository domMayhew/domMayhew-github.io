// Create side nav.
const sideNav = document.getElementsByClassName("side-nav")[0];
const learnDepartment = departments.find(department => department.title == "Learn");
learnDepartment.categories.forEach(category => {
    const navCategory = document.createElement("div");
    navCategory.className = "nav-category learn";
    makeAndAppendPara(category.title, navCategory, () => displayItem(category.items[0]));
    category.items.forEach(item => makeAndAppendPara(item.title, navCategory, () => displayItem(item)));
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

function displayItem(item) {
    const contentDiv = document.getElementsByClassName("content")[0];
    contentDiv.innerHTML = item.content;
}