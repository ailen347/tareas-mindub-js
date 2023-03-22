let pastEvents = [];
let upcomingEvents = [];
let mayorCapacidaGeneral = [];
let eventoConMayorCapacidad = [];
let eventoConMenorCapacidad = [];



function cargarDatosTabla(datos) {

    let tabla1 =''

    for (let i = 0; i < datos.length; i++) {
        tabla1 += `<tr><td>${datos[i].category}</td><td>$${datos[i].recaudacion}</td><td>${datos[i].name}   Percentage:  ${datos[i].porcentaje}%  Ability to: ${datos[i].capacity} people</td></tr>`
    }
    return tabla1;
}

datosApi = (data) => {

    for (let i = 0; i < data.events.length; i++) {
        mayorCapacidaGeneral[i] = data.events[i];

    }

    mayorCapacidaGeneral.forEach(element => {
        if (element.assistance) {
            element.porcentaje = Math.round((element.assistance * 100) / (element.capacity))
        } else if (element.estimate) {
            element.porcentaje = Math.round((element.estimate * 100) / (element.capacity))
        }
    });


    for (let i = 0; i < mayorCapacidaGeneral.length; i++) {
        eventoConMayorCapacidad.push(mayorCapacidaGeneral[i]);
        eventoConMenorCapacidad.push(mayorCapacidaGeneral[i]);
    }

    eventoConMayorCapacidad.sort((a, b) => b.porcentaje - a.porcentaje)
    eventoConMenorCapacidad.sort((a, b) => a.porcentaje - b.porcentaje)
    mayorCapacidaGeneral.sort((a, b) => b.capacity - a.capacity)

    let tabla2 ='';

    for (let i = 0; i < mayorCapacidaGeneral.length; i++) {
        tabla2 += `<tr><td>${eventoConMayorCapacidad[i].name}.    Percentage: ${eventoConMayorCapacidad[i].porcentaje}% </td><td>${eventoConMenorCapacidad[i].name}.   Percentage: ${eventoConMenorCapacidad[i].porcentaje}% </td><td>${mayorCapacidaGeneral[i].name}.   Ability to: ${mayorCapacidaGeneral[i].capacity} people. </td></tr>`
    }

    document.getElementById("statistics").innerHTML = tabla2;




    //past y upcoming


    for (let i = 0; i < data.events.length; i++) {
        if (data.events[i].date < data.currentDate) {
            pastEvents.push(data.events[i]);
        } else {
            upcomingEvents.push(data.events[i])
        }
    }


    upcomingEvents.forEach(element => {
        element.porcentaje = Math.round((element.estimate * 100) / (element.capacity))
        element.recaudacion = Math.round((element.price) * (element.estimate))
    })


    pastEvents.forEach(element => {
        element.porcentaje = Math.round((element.assistance * 100) / (element.capacity))
        element.recaudacion = Math.round((element.price) * (element.assistance))
    })



    upcomingEvents.sort((a,b) => b.porcentaje - a.porcentaje);
    pastEvents.sort((a,b) => b.porcentaje - a.porcentaje);


    document.getElementById("statistics-upcoming").innerHTML = cargarDatosTabla(upcomingEvents);
    document.getElementById("statistics-past").innerHTML = cargarDatosTabla(pastEvents);


}