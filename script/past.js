let parentElement = document.getElementById('cards');
let fragment = document.createDocumentFragment();
let pastEvents = []

datosApi = (data) => {

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
        let newCategoryElement = document.createElement("p");
        newCategoryElement.classList.add("card-category");
        newCategoryElement.textContent = data.events[i].category;
        newDivElement.appendChild(newCategoryElement);
        newDivElement.classList.add("card", "p-2", "border", data.events[i].category);
        newDivElement.dataset.category = data.events[i].category;




        //agrgar todo al padre
        fragment.appendChild(newDivElement);

        parentElement.appendChild(fragment);


    }





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
            //const description = card.querySelector('.card-text:last-of-type').textContent.trim().toLowerCase();
            const category = card.querySelector('.card-category').textContent.trim().toLowerCase();

            if (title.includes(searchTerm) || category.includes(searchTerm)) {
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


    ////filtrar category////
    function getCategoryArray(data) {
        const categorySet = new Set();
        for (let i = 0; i < data.events.length; i++) {
            categorySet.add(data.events[i].category);
        }
        return Array.from(categorySet);
    }


    const categoryArray = getCategoryArray(data);
    console.log(categoryArray);


    ///////genera checkbox//////


    function generateCheckboxes(categories) {
        const checkboxContainer = document.querySelector('#category-container');

        categories.forEach(category => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'category'; 
            checkbox.value = category;
            checkbox.addEventListener('click', filterEventsByCategory);
            checkbox.classList.add('category-checkbox');


            const label = document.createElement('label');
            label.textContent = category;

            checkboxContainer.appendChild(checkbox);
            checkboxContainer.appendChild(label);
        });
    }


    const checkboxContainer = document.querySelector('#category-container');
    checkboxContainer.addEventListener('click', () => {
        if (selectedCategories.length === 0) {
            const checkboxes = document.querySelectorAll('.category-checkbox');
            checkboxes.forEach(c => c.checked = false);
        }
    });



    ////////filtrar checkbox por category/////////


    let selectedCategories = [];

    function filterEventsByCategory(event) {
        const category = event.target.value;

        // Agregar o eliminar categoría seleccionada
        if (event.target.checked) {
            selectedCategories.push(category);
        } else {
            selectedCategories = selectedCategories.filter(c => c !== category);
        }

        // Mostrar tarjetas correspondientes a las categorías seleccionadas
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            if (selectedCategories.length === 0 || selectedCategories.includes(card.dataset.category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }


    generateCheckboxes(categoryArray);
}