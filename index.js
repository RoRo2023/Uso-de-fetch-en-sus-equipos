//API
const urlBase = 'http://13.56.7.193:3001/api/v1/apoyos';


//Botón
const button_get = document.querySelector('#get');
const agregar = document.querySelector('#btn-add');
const formulario = document.querySelector('#formulario');
const limpiaform = document.querySelector('#limpiar');
const bodytab = document.querySelector('#tabApoyo');

//Inputs
const nom = document.querySelector('#nombre');
const des = document.querySelector('#descripcion');
const fec = document.querySelector('#fecha');
const lug = document.querySelector('#lugar');
const per = document.querySelector('#period');
const mon = document.querySelector('#monto');
const dep = document.querySelector('#dependencia');

//div para ver la información
//const content = document.querySelector('.content');

//formulario.addEventListener('submit', createApoyoAsync)


document.addEventListener('DOMContentLoaded', () => {
    
    button_get.onclick = () => {
        getApoyosAsync();
      
    }
    limpiaform.onclick = () => {
        document.querySelector("tbody").innerHTML = '';
    }
    agregar.onclick = () => {
       createApoyoAsync();
    }


    //Peticiones ejemplos
    //-----------------------------------------------------
    //getApoyosSync();
    //getApoyosAsync();
    //createApoyoAsync();
    // pendiente - updateApoyoAsync();
    //deleteApoyoAsync()

});


const getApoyosAsync = async () => {
    const response = await fetch(urlBase); // GET
    const json = await response.json();
    const njson = json.data.apoyos;
    
   

    for (let i = 0; i < njson.length; i++){
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${njson[i].nombre}</td>
        <td>${njson[i].descripcion}</td>
        <td>${njson[i].fecha}</tpd>
        <td>${njson[i].lugar}</td>        
        <td>${njson[i].estatus}</td>
        <td>${njson[i].monto}</td>
        <td><button type="button" id="eliminar" value="${njson[i].id}">
        Eliminar
        </button></td>        
        `;
        document.querySelector("tbody").appendChild(row);
    }
    console.log(json);
    console.log("Hola mundo");
}

async function createApoyoAsync(event) {    
    event.preventDefault()
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },   
        body: JSON.stringify({
            nombre: nom.value,
            descripcion: des.value,
            fecha: fec.value,
            imagen: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA18Cl0n.img?w=800&h=415&q=60&m=2&f=jpg",
            lugar: lug.value,
            activo: true,
            periodicidad: per.value,
            monto: mon.value,
            tipo_Dependencia: dep.value
        })
    }
  
    const response = await fetch(urlBase, config);
    const json = await response.json();
    EventTarget.preventDefault();
    console.log(json);

}


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
