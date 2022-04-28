class Menu {
    constructor(department) {
        const webSafeName = department.title.toLowerCase().replace(" ", "_");
        // Make nav bar element
        // <a>
        const anchor = document.createElement("a");
        anchor.href = webSafeName + ".html";
        // <h1>
        const departmentH1 = document.createElement("h1");
        departmentH1.className = "menu-title " + webSafeName;
        departmentH1.innerHTML = department.title.toUpperCase();
        // onMouseover
        departmentH1.addEventListener("mouseover", () => showMenu(webSafeName));
        // Wrap up.
        anchor.appendChild(departmentH1);
        this._titleElement = anchor;

        // Make drop down content.
        // Container
        const menuContent = document.createElement("div");
        menuContent.className = "menu-content " + webSafeName + " center-horizontal";
        // Make columns
        department.categories.forEach((category) => {
            // Column container.
            const menuCol = document.createElement("div");
            menuCol.className = "menu-column";
            menuContent.appendChild(menuCol);

            // Make <p> for each title and element.
            makeAndAppendPara(category.title, menuCol);
            category.items.forEach((item) => {
                makeAndAppendPara(item.title, menuCol, webSafeName + ".html");
            })
        });

        // Wrap up.
        this._dropDownElement = menuContent;
    }

    getTitleElement() { return this._titleElement; }
    getDropDownElement() { return this._dropDownElement; }
}

function makeAndAppendPara(content, parent, href) {
    const para = document.createElement("p");
    para.innerHTML = content;
    if (href) {
        const anchor = document.createElement("a");
        anchor.href = href;
        anchor.appendChild(para);
        parent.appendChild(anchor);
    } else {
        parent.appendChild(para);
    }
}

function initializeMenus() {
    // Set up.
    const menus = [];
    const menuTitleContainer = document.getElementById("menu-title-container");
    const header = document.getElementsByTagName("header")[0];
    // Create a menu for each department.
    for (let i = 0; i < departments.length; i++) {
        // Create menu object.
        menus[i] = new Menu(departments[i]);
        // Append nav bar element.
        menuTitleContainer.appendChild(menus[i].getTitleElement());
        // Add divider if not the last department.
        if (i < departments.length - 1) {
            const span = document.createElement("span");
            span.className = "menu-divider";
            menuTitleContainer.appendChild(span);
        }
        // Append drop down content to header.
        header.appendChild(menus[i].getDropDownElement());
        // Mouseleave listener.
        menus[i].getDropDownElement().addEventListener('mouseleave', (mouseEvent) => {
            if (mouseEvent.offsetY > 0) { //offsetY is the distance between the MouseEvent and the 'padding edge' of the element.
                menus.forEach(menu => menu.getDropDownElement().style.display = "none" );
                const titles = Array.from(document.getElementsByClassName("menu-title"));
                // Remove underline from menu titles.
                titles.forEach(title => title.style.textDecoration = "none");
            }
        });
    }

    // Initialize side, hamburger menu.
    const sideMenu = document.createElement("div");
    sideMenu.className = "menu-content-hamburger";
    sideMenu.id = "menu-content-hamburger";
    makeAndAppendH3("Learn", sideMenu, "learn.html");
    makeAndAppendH3("Shop", sideMenu, "shop.html");
    makeAndAppendH3("Collaborate", sideMenu, "collaborate.html");
    document.getElementById("hamburger").onclick = toggleHamburgerMenu;
    header.appendChild(sideMenu);
}

function makeAndAppendH3(content, parent, href) {
    const h3 = document.createElement("h3");
    h3.innerHTML = content;
    if (href) {
        const anchor = document.createElement("a");
        anchor.href = href;
        anchor.appendChild(h3);
        parent.appendChild(anchor);
    } else {
        parent.appendChild(h3);
    }
}

function showMenu(menuName) {
    // Update title underlines.
    const titles = Array.from(document.querySelectorAll(".menu-title"));
    titles.forEach(title => {
        if (menuName != null && title.className.indexOf(menuName) != -1) {
            title.style.textDecoration = "underline";
        } else {
            title.style.textDecoration = "none";
        }
    });

    // Update visible menu.
    const menus = Array.from(document.querySelectorAll(".menu-content"));
    menus.forEach(menu => {
    if (menuName != null && menu.className.indexOf(menuName) != -1) {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    });
}

let hamburgerMenuDisplayed = false;
function toggleHamburgerMenu() {
    hamburgerMenuDisplayed = !hamburgerMenuDisplayed;
    const sideMenu = document.getElementById("menu-content-hamburger");
    sideMenu.style.left = hamburgerMenuDisplayed ? "0" : "-60%";    
}

function setFooterTimeStamp() {
    // Calculate time elapsed since last update.
    const lastUpdatedString = "April 27, 2022 13:42";
    const elapsed = Date.now() - Date.parse(lastUpdatedString);
    const seconds = Math.floor(elapsed / 1000) % 60;
    const minutes = Math.floor(elapsed / (1000 * 60)) % 60;
    const hours = Math.floor(elapsed / (1000 * 60 * 60)) % 24;
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));

    // Set footer string.
    const node = document.getElementById("timestamp");
    node.innerHTML = "Last update at " + lastUpdatedString + "by Dominic Mayhew. Time since last update: " +
        days + " days, " + hours + ":" + minutes + ":" + seconds;
    setTimeout(setFooterTimeStamp, 1000 * 60); // Update once per minute.
}

initializeMenus();
setFooterTimeStamp();