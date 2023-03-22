let urlApi = "https://mindhub-xj03.onrender.com/api/amazing";

fetch(urlApi)
    .then(response => response.json())
    .then(data => datosApi(data))
    .catch(error => console.log(error));

function datosApi(data) {

    let queryString = location.search

    const params = new URLSearchParams(queryString)


    const id = params.get("id")


    const card = data.events.find(event => event._id == id)

    const div = document.querySelector(".conteiner-card")

    div.innerHTML = `
    <div class="card2">
        <img class="card-img" src=${card.image} alt="Card image event">
            <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-body-p">Event Date:  ${card.date}</p>
                <p class="card-body-descrip">${card.description}</p>
                <div class="card-body-details">
                    <p>Place: ${card.place}</p>
                    <p>Capacity: ${card.capacity}</p>
                    <p>Assistance: ${card.assistance}</p>
                    <p class="card-body-price">Price $: ${card.price}</p>
                </div>
            </div>
    </div>
    `
}
