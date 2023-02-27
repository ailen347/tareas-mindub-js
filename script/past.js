for (let evento of pastEvents) {


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

    //precio y "ver mas"
    let newVypElement = document.createElement("div");
    newVypElement.classList.add("vyp");
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