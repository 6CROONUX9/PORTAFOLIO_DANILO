const dataUsers = [
	 	{
	 		name: "brayan",
	 		age: 23,
	 		ocupation: "dev",
	 		motivation: "lorem lorem lorem dolares",
	 		hobbies: [
	 			"running",
	 			"coding",
	 			"eat",
	 			"soccer",
	 			"video games",
	 			"rodar",
	 		],
	 	},
	 	{
	 		name: "Edwar León",
	 		age: 33,
	 		ocupation: "dev in progress",
	 		motivation: "ella",
	 		hobbies: ["ella", "ella", "ella", "ella"],
	 	},
	 	{
	 		name: "Leonardo",
	 		age: 28,
	 		ocupation: "estudiar programacion",
	 		motivation: "el dinero",
	 		hobbies: ["impresion3d", "programar", "masprogramacion", "backend"],
	 	},
	 	{
	 		name: "Juan",
	 		age: 26,
	 		ocupation: "Dj",
	 		motivation: "Mi mama xd",
	 		hobbies: ["Mezclar", "Ir a raves", "futbol", "read"],
	 	},
	 	{
	 		name: "Danilo_Florez",
	 		age: 25,
	 		ocupation: "Estudiante y Depotista de alto rendimiento",
	 		motivation: "El dinero y el exito",
	 		hobbies: ["programar", "jugar futbol", "dormir", "ir a caminar"],
	 	},
	 	{
	 		name: "Daniel",
	 		age: 20,
	 		ocupation: "model",
	 		motivation: "la fiesta",
	 		hobbies: ["futbol", "musica", "pasión de gavilanes", "las mujeres"],
	 	},
	 	{
	 		name: "Juan Carcamo",
	 		age: 23,
	 		ocupation: "Estudiante",
	 		motivation: "Los dolares",
	 		hobbies: ["futbol", "gym", "paliculas", "programar"],
	 	},
	 	{
	 		name: "Yonkleiverson",
	 		age: 20,
	 		ocupation: "comerciante",
	 		motivation: "el tusi",
	 		hobbies: [
	 			"jugar free fire",
	 			"ir a misa",
	 			"estudiar arduamente",
	 			"comer perros de 0.5$",
	 		],
	 	},
	 	{
	 		name: "Cistian Fabra Lar",
	 		age: 25,
	 		ocupation: "Diseño grafico",
	 		motivation: "Dolares",
	 		hobbies: ["fut", "box", "bike", "tenis"],
	 	},
	 	{
	 		name: "Sergio",
	 		age: 24,
	 		ocupation: "Studing",
	 		motivation: "$$$",
	 		hobbies: ["Calistenics", "Guitar", "comer", "pelear"],
	 	},
	 	{
	 		name: "Gustavo Alberto Molano Ruiz",
	 		age: 54,
	 		ocupation: "Licenciado en Informática",
	 		motivation: "motorbikes",
	 		hobbies: ["programming", "bikes", "databases", "cooking"],
	 	},
	 	{
	 		name: "Polo",
	 		age: 19,
	 		ocupation: "aprender a programar",
	 		motivation: "Euros",
	 		hobbies: ["ejercicio", "cocinar", "peliculas", "anime"],
	 	},
	 	{
	 		name: "Ariel",
	 		ocupation: "joseador",
	 		age: 25,
	 		motivation: "la plata",
	 		hobbies: ["fútbol", "River", "Lol", "tarde de plaza con los vagos"],
	 	},
	 	{
	 		name: "Angel Nieto",
	 		age: 29,
	 		ocupation: "Maestro de matematicas",
	 		motivation: "Estudiar",
	 		hobbies: ["Comer", "Bañarme", "dormir", "jugar parkes"],
	 	},
	 	{
	 		name: "Cristian Agudelo",
	 		age: 26,
	 		ocupation: "Papa de un hermoso hijo",
	 		motivation: "Mi Hijo",
	 		hobbies: [
	 			"Atlético Nacional",
	 			"Baloncesto",
	 			"Correr",
	 			"Billar Pool",
	 		],
	 	},
];

const cartaHTML = document.querySelector(".container__cartas");
const btnHTML = document.querySelector(".container__btn");

/* --------------- logica btn ------------------*/
btnHTML.addEventListener("click",function(e){
    if (e.target.classList.contains("buton")){
        if(e.target.classList.contains("btn1")){
            let auxUsuarioAZ = structuredClone(dataUsers).sort(function(a , b){return a.name.localeCompare(b.name) })
            pintarUsuarios(auxUsuarioAZ);
        }
        if(e.target.classList.contains("btn2")){
            let auxUsuarioZA = structuredClone(dataUsers).sort(function(a , b){return b.name.localeCompare(a.name) })
            pintarUsuarios(auxUsuarioZA);
        }
        if(e.target.classList.contains("btn3")){
            let auxUsuarioMinmax = structuredClone(dataUsers).sort(function(a , b){return a.age - b.age })
            pintarUsuarios(auxUsuarioMinmax);
        }
        if(e.target.classList.contains("btn4")){
            let auxUsuarioMaxmin = structuredClone(dataUsers).sort(function(a , b){return b.age - a.age })
            pintarUsuarios(auxUsuarioMaxmin);
        }
        if(e.target.classList.contains("btn5")){
            
            pintarUsuarios(dataUsers);
        }
    }
})
console.log(btnHTML);
/* ----------------------------- cuerpo -------------------*/ 
function pintarhobbies(hobbi){
    let newhobbi = "";
    for(let i=0; i< hobbi.length ; i++ ){
        newhobbi += `<li>${hobbi[i]}</li>`
    }
    return newhobbi;
}

function pintarUsuarios(usuarios){
    let newArray = "";
    for(let i=0; i<usuarios.length; i++){
        
        newArray += `<div class="user">
        <h2>${usuarios[i].name}</h2>
        <p>${usuarios[i].age}</p>
        <p>${usuarios[i].ocupation}</p>
        <p>${usuarios[i].motivation}</p>
        <ul>${pintarhobbies(usuarios[i].hobbies)}</ul>
        </div>`
    }
    cartaHTML.innerHTML = newArray;
    
}




pintarUsuarios(dataUsers);