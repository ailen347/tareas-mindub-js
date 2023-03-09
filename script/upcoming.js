function showUpcomingEvents(events) {
    let parentElement = document.getElementById('upcoming-cards');
    let fragment = document.createDocumentFragment();

    for (let i = 0; i < events.length; i++) {
        //nuevo div
        let newDivElement = document.createElement("div");
        newDivElement.classList.add("card", "p-2", "border");

        //agregar img al div
        let newImgElement = document.createElement("img");
        newImgElement.src = events[i].image;
        newImgElement.classList.add("card-img-top");
        newDivElement.appendChild(newImgElement);

        //titulo del div
        let newTitleElemnt = document.createElement("h4");
        newTitleElemnt.classList.add("card-title", "d-flex", "justify-content-center");
        newTitleElemnt.textContent = events[i].name;
        newDivElement.appendChild(newTitleElemnt);

        //descripcion
        let newDescElement = document.createElement("p");
        newDescElement.classList.add("card-text", "d-flex", "justify-content-center");
        newDescElement.textContent = events[i].description;
        newDivElement.appendChild(newDescElement);

        //precio y "details"
        let newVypElement = document.createElement("div");
        newVypElement.classList.add("details-y-precio");
        let newPrecioElement = document.createElement("p");
        newPrecioElement.textContent = "Price $" + events[i].price;
        newVypElement.appendChild(newPrecioElement);
        let newLinkElement = document.createElement("a");
        newLinkElement.href = `./details.html?id=${events[i]._id}`;
        newLinkElement.classList.add("btn-details", "btn-outline-dark");
        newLinkElement.textContent = "Details";
        newVypElement.appendChild(newLinkElement);
        newDivElement.appendChild(newVypElement);

        //agrgar todo al padre
        fragment.appendChild(newDivElement);
        parentElement.appendChild(fragment);
    }
}

showUpcomingEvents(upcomingEvents);


/////////search///////////

const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.trim().toLowerCase();
    const cards = document.querySelectorAll('.card');
    let noResults = true;

    cards.forEach((card) => {
        const title = card.querySelector('.card-title').textContent.trim().toLowerCase();
        const description = card.querySelector('.card-text:last-of-type').textContent.trim().toLowerCase();

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
            noResults = false;
        } else {
            card.style.display = 'none';
        }
    });

    if (noResults) {
        noResultsMessage.classList.add('show');
    }
});



//////////checkbox////////


