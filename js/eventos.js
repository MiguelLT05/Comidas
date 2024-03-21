const subtitle = document.getElementById("subTitleJS");
const subtitle2 = document.getElementById("subTitleJS2");
/*
    ESPERA DE LA
    RESPUESTA DEL API
*/
setTimeout(function(){
    subtitle.textContent = "Mi opinion xd";
    setTimeout(function(){
        subtitle2.textContent = "No me funen :'v";
    }, 1000);
}, 1000);

//arrays de platos del peru

const platos = [
    {
        "nombre": "Arroz con Pollo",
        "Ingrediente_Principal": "Pollo :v",
        "calificacion": 8,
        "isTasty": true
    },
    {
        "nombre": "Lomo Saltado",
        "Ingrediente_Principal": "Papa",
        "calificacion": 7,
        "isTasty": true
    },
    {
        "nombre": "Aji de Gallina",
        "Ingrediente_Principal": "Pollo xd",
        "calificacion": 9,
        "isTasty": true
    },
    {
        "nombre": "Ceviche",
        "Ingrediente_Principal": "Pescado",
        "calificacion": 10,
        "isTasty": true
    },
    {
        "nombre": "Locro",
        "Ingrediente_Principal": "Locro",
        "calificacion": 1,
        "isTasty": false
    },
    {
        "nombre": "Carapullcra con Sopa Seca",
        "Ingrediente_Principal": "La fe",
        "calificacion": 11,
        "isTasty": true
    },
    {
        "nombre": "Pure de Papas",
        "Ingrediente_Principal": "Papas",
        "calificacion": 7,
        "isTasty": true
    },
    {
        "nombre": "Tallarin verde",
        "Ingrediente_Principal": "Spagethi",
        "calificacion": 4.5,
        "isTasty": false
    },
    {
        "nombre": "Seco de Cordero",
        "Ingrediente_Principal": "Cordero",
        "calificacion": 8,
        "isTasty": true
    },
    {
        "nombre": "Causa Limeña",
        "Ingrediente_Principal": "Papa",
        "calificacion": 6.5,
        "isTasty": true
    }
];


const platoElement = document.getElementById("dishes");
let contenido = "";
platos.forEach(function(plato) {    
    let claseicon = "rico";
    if (plato.isTasty) {
        claseicon = "rico";
    } else {
        claseicon = "no-rico";
    }
    let calificacion = plato.calificacion + "/10";
    const template = `
        <div class="plato">
            <div class="icon icon-${claseicon}"></div>
            <div class="data">
                <h4>${plato.nombre}</h4>
                <p>Ingrediente Principal: ${plato.Ingrediente_Principal}</p>
            </div>
            <div class="gobierno">
                ${calificacion}
            </div>
        </div>
    `;
    contenido = contenido + template;
});

platoElement.innerHTML = contenido;