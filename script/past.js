let parentElem = document.getElementById('cards');
let fragmen = document.createDocumentFragment();

for (let i = 0; i < data.events.length; i++) {


    //nuevo div
    let newDivElement = document.createElement("div");
    newDivElement.classList.add("card", "mx-2", "p-2", "mt-5", "border");
    /*  newDivElement.style.width = "15rem"; */

    //agregar img al div
    let newImgElement = document.createElement("img");
    newImgElement.src = evento.image;
    newImgElement.width = "245";
    newImgElement.height = "150";
    newImgElement.classList.add("card-img-top");

    newDivElement.appendChild(newImgElement);

    //titulo del div
    let newTitleElemnt = document.createElement("h4");
    newTitleElemnt.classList.add("card-title", "d-flex", "justify-content-center");
    newTitleElemnt.textContent = evento.name;
    newDivElement.appendChild(newTitleElemnt);


    //descripcion
    let newDescElement = document.createElement("p");
    newDescElement.classList.add("card-text", "d-flex", "justify-content-center");
    newDescElement.textContent = evento.description;
    newDivElement.appendChild(newDescElement);

    //precio y "details"
    let newVypElement = document.createElement("div");
    newVypElement.classList.add("details-y-precio");
    let newPrecioElement = document.createElement("p");
    newPrecioElement.textContent = "Price $" + evento.price;
    newVypElement.appendChild(newPrecioElement);
    let newLinkElement = document.createElement("a");
    newLinkElement.href = "#";
    newLinkElement.classList.add("btn", "btn-primary");
    newLinkElement.textContent = "Details";
    newVypElement.appendChild(newLinkElement);
    newDivElement.appendChild(newVypElement);

    //agrgar todo al padre
    fragmen.appendChild(newDivElement);

    parentElem.appendChild(fragment);


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


//////////search/////////

const form = document.querySelector('form');

form.addEventListener('keyup', (event) => {
    event.preventDefault();

    const searchTerm = document.querySelector('#search-input').value.toLowerCase();
    const events = document.querySelectorAll('.card');

    for (let i = 0; i < events.length; i++) {
        const name = events[i].querySelector('.card-title').textContent.toLowerCase();
        const description = events[i].querySelector('.card-text').textContent.toLowerCase();

        if (name.includes(searchTerm) || description.includes(searchTerm)) {
            events[i].style.display = '';
            events[i].classList.remove('hidden');
        } else {
            events[i].style.display = 'none';
            events[i].classList.add('hidden');
        }
    }
});



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
