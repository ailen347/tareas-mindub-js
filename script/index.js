let parentElement = document.getElementById('cards');
let fragment = document.createDocumentFragment();



for (let i = 0; i < data.events.length; i++) {

    //nuevo div
    let newDivElement = document.createElement("div");
    newDivElement.classList.add("card", "p-2", "border");


    //agregar img al div
    let newImgElement = document.createElement("img");
    newImgElement.src = data.events[i].image;
    newImgElement.classList.add("card-img-top");

    newDivElement.appendChild(newImgElement);

    //titulo del div
    let newTitleElemnt = document.createElement("h4");
    newTitleElemnt.classList.add("card-title", "d-flex", "justify-content-center");
    newTitleElemnt.textContent = data.events[i].name;
    newDivElement.appendChild(newTitleElemnt);


    //descripcion
    let newDescElement = document.createElement("p");
    newDescElement.classList.add("card-text", "d-flex", "justify-content-center");
    newDescElement.textContent = data.events[i].description;
    newDivElement.appendChild(newDescElement);

    //precio y "details"
    let newVypElement = document.createElement("div");
    newVypElement.classList.add("details-y-precio");
    let newPrecioElement = document.createElement("p");
    newPrecioElement.textContent = "Price $" + data.events[i].price;
    newVypElement.appendChild(newPrecioElement);
    let newLinkElement = document.createElement("a");
    newLinkElement.href = `./details.html?id=${data.events[i]._id}`;
    newLinkElement.classList.add("btn-details", "btn-outline-dark");
    newLinkElement.textContent = "Details";
    newVypElement.appendChild(newLinkElement);
    newDivElement.appendChild(newVypElement);

    //agrgar todo al padre
    fragment.appendChild(newDivElement);

    parentElement.appendChild(fragment);


}





const currentDate = new Date(data.currentDate)
let pastEvents = []
let upcomingEvents = []

for (let i = 0; i < data.events.length; i++) {
    const event = data.events[i];
    const eventDate = new Date(event.date);

    if (eventDate < currentDate) {
        pastEvents.push(event);
    } else {
        upcomingEvents.push(event)
    }
}

console.log(pastEvents)
console.log(upcomingEvents)





///////////search////////////////

const eventsContainer = document.querySelector('#events-container');
const noResultsText = document.querySelector('#no-results-text');

const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.card');
    let foundResults = false;

    cards.forEach((card) => {
        const title = card.querySelector('.card-title').textContent.trim().toLowerCase();
        const description = card.querySelector('.card-text:last-of-type').textContent.trim().toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
            foundResults = true;
        } else {
            card.style.display = 'none';
        }
    });

    if (!foundResults) {
        noResultsText.style.display = 'block';
    } else {
        noResultsText.style.display = 'none';
    }
});



///////////filtros checkboxes////////////


function createCheckbox(name, value, id, labelText) {
    var label = document.createElement("label");
    label.innerHTML = labelText;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = name;
    checkbox.value = value;
    checkbox.id = id;

    label.appendChild(checkbox);

    return label;
}


var checkboxesDiv = document.getElementById("checkboxes");

checkboxesDiv.appendChild(createCheckbox("checkbox", "category", "checkbox", "Food Fair"));
checkboxesDiv.appendChild(createCheckbox("checkbox", "category", "checkbox", "Museum"));
checkboxesDiv.appendChild(createCheckbox("checkbox", "category", "checkbox", "Race"))
checkboxesDiv.appendChild(createCheckbox("checkbox", "category", "checkbox", "Book Exchange"))
checkboxesDiv.appendChild(createCheckbox("checkbox", "category", "checkbox", "Music Concert"))
checkboxesDiv.appendChild(createCheckbox("checkbox", "category", "checkbox", "Costum Party"))
checkboxesDiv.appendChild(createCheckbox("checkbox", "category", "checkbox", "Cinema"))


/* let crearListCategory(array, contenedor){
    let lista = document.querySelector(contenedor)

    lista.innerHTML = ""

    arr.forEach(item => {
        let li = document.createElement('li')
        li.innerHTML = item
        lista.appendChild(li)
    });
} */




/* var categories = {};
for (var i = 0; i < data.events.length; i++) {
    categories[events[i].category] = true;
} */

/*
var checkboxesDiv = document.getElementById("checkboxes");

for (var category in categories) {
    var label = document.createElement("label");
    label.innerHTML = category;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = category;
    checkbox.value = category;
    checkbox.id = category;
    checkbox.addEventListener("change", function () {
        filterEvents();
    });

    label.appendChild(checkbox);
    checkboxesDiv.appendChild(label);
}

function filterEvents() {
    var checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    var selectedCategories = Array.from(checkedBoxes).map(function (checkbox) {
        return checkbox.value;
    });

    var eventsToShow = [];
    for (var i = 0; i < data.events.length; i++) {
        if (selectedCategories.indexOf(events[i].category) !== -1) {
            eventsToShow.push(events[i]);
        }
    }
}
    */

// Muestra los eventos en la página web
// ...


/*
var categories = []; */

// Crea un array con todas las categorías disponibles
/* events.forEach(function (event) {
    if (!categories.includes(data.event.category)) {
        categories.push(data.event.category);
    }
}); */

// Crea los checkboxes de las categorías y los agrega al HTML
/* var categoriesDiv = document.getElementById('categories');

categories.forEach(function (category) {
    var label = document.createElement('label');
    var checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.value = category;

    checkbox.addEventListener('change', filterEvents);

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(category));

    categoriesDiv.appendChild(label);
});

// Filtra los eventos según las categorías seleccionadas en los checkboxes
function filterEvents() {
    var checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    var selectedCategories = Array.from(checkedBoxes).map(function (checkbox) {
        return checkbox.value;
    });

    var cardsToShow = document.querySelectorAll('.card[data-category="' + selectedCategories.join('"], .card[data-category="') + '"]');
    var allCards = document.querySelectorAll('.card');

    allCards.forEach(function (card) {
        if (cardsToShow.includes(card)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
} */

/* 
var checkboxesDiv = document.getElementById("checkboxes");

events.forEach(function (event) {
    var label = document.createElement("label");
    label.innerHTML = data.event.category;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = data.event.category;
    checkbox.value = data.event.category;
    checkbox.id = "category-" + data.event.category;
    checkbox.addEventListener("change", filterEvents);

    label.appendChild(checkbox);

    checkboxesDiv.appendChild(label);
});
 */