//API
const urlBase = 'https://ocampo-dev.wicode.com.mx/api/v1/apoyo';

//Botón

document.addEventListener('DOMContentLoaded', () => {


    

    //Peticiones ejemplos
    //-----------------------------------------------------
    //getApoyosSync();
    //getApoyosAsync();
    //createApoyoAsync();
    // pendiente - updateApoyoAsync();
    //deleteApoyoAsync()

});

//Peticiones ejemplos
/*----------------------------------------------------------
// Peticiones GET/READ
const getApoyosSync = () => {
    fetch(urlBase).then(response => {
        console.log(response)
    })
    console.log("Hola Mundo!")
}

// Peticion GET Asincrono
const getApoyosAsync = async () => {
    const response = await fetch(urlBase); // GET
    const json = await response.json();
    console.log(json);
    console.log("Hola mundo");
}

// Peticiones POST/CREATE
const createApoyoAsync = async () => {
    const response = await fetch(urlBase, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: "Beca para el estudio",
            descripcion: "Apoyar a alumnos con un promedio de 8.5 en adelante",
            fecha: new Date(),
            imagen: "https://firebasestorage.googleapis.com/v0/b/ocampo-app.appspot.com/o/Dependence1-1677256359436?alt=media&token=06362994-5d5f-4423-9bad-97631b91e7e9",
            lugar: "Plaza de la ciudad",
            activo: true,
            periodicidad: "Mensualmente",
            monto: "3000",
            tipo_Dependencia: "Desarrollo económico"
        })
    });
    const json = await response.json();
    console.log(json);
}

// Peticiones PUT/UPDATE penditente
const updateApoyoAsync = async () => {
    const response = await fetch(urlBase + "/yLmJdzjpQRB6lfLUW67V", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: "Apoyo para el estudio",
            descripcion: "Apoyar a alumnos con un promedio de 9.5 en adelante",
            fecha: new Date(),
            imagen: "https://firebasestorage.googleapis.com/v0/b/ocampo-app.appspot.com/o/Dependence1-1677256359436?alt=media&token=06362994-5d5f-4423-9bad-97631b91e7e9",
            lugar: "Transferencia",
            activo: true,
            periodicidad: "Anual",
            monto: "3000"
        })
    });
    const json = await response.json();
    console.log(json);
}

// Peticion DELETE
const deleteApoyoAsync = async () => {
    const response = await fetch(urlBase + "/yCJAi2bU63olYm8XKRcx", {
        method: "DELETE",
    });
    const json = await response.json();
    console.log(json);
}

*/