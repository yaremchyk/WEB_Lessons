const list = document.getElementById("list");

const addBtn = document.getElementById("styled-button");
const clearBtn = document.getElementById("clear-button");

const nameBox = document.getElementById("name");
const priceBox = document.getElementById("price");
const rowBox = document.getElementById("row");
const placeBox = document.getElementById("place");

const searchBox = document.getElementById("search");

function addItem(text, className) {
    let item = document.createElement("div");
    item.className = className;
    item.innerText = text;

    list.appendChild(item);
}

let onin = searchBox.oninput = () => {
    if (searchBox.value != "")
    {
        counter = 0;
        for (let index = 4; index < list.children.length; index++) {
            if (!(list.children[index].innerText.toLowerCase().startsWith(searchBox.value.toLowerCase())) && counter == 0)
            {
                list.children[index].style.visibility = "hidden";
            } else if (counter != 0){
                counter--;
            } else
            {
                counter = 3;
            }
        }
    }
    else {
        for (let index = 4; index < list.children.length; index++) {
            list.children[index].style.visibility = "visible";
        }
    }
}

addBtn.onclick = () => {
    if (nameBox.value != "" &&
        priceBox.value != "" &&
        rowBox.value != "" &&
        placeBox.value != "") {
        addItem(nameBox.value, "first-column");
        addItem(priceBox.value, "second-column");
        addItem(rowBox.value, "third-column");
        addItem(placeBox.value, "fourth-column");

        onin();
    }
}

clearBtn.onclick = () => {
    list.innerHTML =
        "<div class=\"first-column\">Назва фільму</div>\n" +
        "<div class=\"second-column\">Ціна</div>\n" +
        "<div class=\"third-column\">Ряд</div>\n" +
        "<div class=\"fourth-column\">Місце</div>"
}