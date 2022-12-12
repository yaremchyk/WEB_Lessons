const list = document.getElementsByClassName("table table-hover")[0].querySelector("tbody");

const addBtn = document.getElementById("styled-button");
const clearBtn = document.getElementById("clear-button");

const nameBox = document.getElementById("name");
const priceBox = document.getElementById("price");
const rowBox = document.getElementById("row");
const placeBox = document.getElementById("place");

const searchBox = document.getElementById("search");

let removed = [];

function addItem(text, type, toLast, innrhtml = "") {
    let item = document.createElement(type);
    item.innerText = text;
    if (innrhtml != "")
    {
        item.innerHTML = innrhtml;
        item.firstChild.addEventListener('click', function handleClick(event) {
            removed.splice(removed.indexOf(item.parentElement));
            list.removeChild(item.parentElement);
          });
        item.firstChild.value = "X";
    }
    if (toLast) {
        list.lastChild.appendChild(item);
    } else {
        list.appendChild(item);
    }
}

let onin = searchBox.oninput = () => {
    if (searchBox.value != "") {
        for (let i = 0; i < list.children.length; i++) {
            if (!(list.children[i].firstChild.innerText.toLowerCase().startsWith(searchBox.value.toLowerCase()))) {
                removed.push(list.children[i]);
                list.removeChild(list.children[i]);
            }
        }
        for (let i = 0; i < removed.length; i++) {
            if (removed[i].firstChild.innerText.toLowerCase().startsWith(searchBox.value.toLowerCase())) {
                list.appendChild(removed[i]);
            }
        }
    }
    else {
        for (let i = 0; i < removed.length; i++) {
            list.appendChild(removed[i]);
            removed.splice(i);
        }
    }
}

addBtn.onclick = () => {
    if (nameBox.value != "" &&
        priceBox.value != "" &&
        rowBox.value != "" &&
        placeBox.value != "") {
        addItem("", "tr", false);
        addItem(nameBox.value, "td", true);
        addItem(priceBox.value, "td", true);
        addItem(rowBox.value, "td", true);
        addItem(placeBox.value, "td", true);
        addItem("", "td", true, "<input type=\"button\" class=\"btn btn-danger\"></input>");

        buffer = list;
        onin();
    }
}

clearBtn.onclick = () => {
    list.innerHTML = "";
}