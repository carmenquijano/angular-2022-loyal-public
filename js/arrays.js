const filtrar = (persona) => {
    return persona.last_name.toUpperCase().includes(clave) 
        || persona.first_name.toUpperCase().includes(clave) 
            || persona.email.toUpperCase().includes(clave);
}

const personas = {
  page: 1,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      age: 35,
    },
    {
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
      age: 26,
    },
    {
      id: 3,
      email: "emma.wong@reqres.in",
      first_name: "Emma",
      last_name: "Wong",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
      age: 36,
    },
    {
      id: 4,
      email: "eve.holt@reqres.in",
      first_name: "Eve",
      last_name: "Holt",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
      age: 45,
    },
    {
      id: 5,
      email: "charles.morris@reqres.in",
      first_name: "Charles",
      last_name: "Morris",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
      age: 25,
    },
    {
      id: 6,
      email: "tracey.ramos@reqres.in",
      first_name: "Tracey",
      last_name: "Ramos",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
      age: 60,
    },
    {
        id: 400,
        email: "emma.wong@reqres.in",
        first_name: "Emma",
        last_name: "Wong",
        avatar: "https://reqres.in/img/faces/3-image.jpg",
        age: 36,
      },
  ],
  support: {
    url: "https://reqres.in/#support-heading",
    text: "To keep ReqRes free, contributions towards server costs are appreciated!",
  },
};

console.log(personas);

//filter
const clave = 'ON';
const personasFiltradas = [];
for(let i=0;i<personas.data.length;i++) {
    const persona = personas.data[i];
    if(persona.last_name.toUpperCase().includes(clave) 
        || persona.first_name.toUpperCase().includes(clave) 
            || persona.email.toUpperCase().includes(clave))  {
        personasFiltradas.push(persona);
    }
}

console.log('for comun:',personasFiltradas);

const personasFitlradasConFilter = personas.data.filter(persona => filtrar(persona)); //que quiero!

console.log('filter:',personasFitlradasConFilter);

const convertoToAlgo = (persona) => {
    return `${persona.id}, ${persona.email}`;
}

const personasEmails = [];
for(let i=0;i<personas.data.length;i++) {
    const persona = personas.data[i];
    personasEmails.push(convertoToAlgo(persona));
}
console.log(personasEmails)

//.map()
const emails = personas.data.map(persona => convertoToAlgo(persona)); //que quiero!
console.log(emails);

//VERFICAR SI TODOS TIENEN EL @REQRES
let todos = true;
for(let i=0; todos && i <personas.data.length; i++) {    
    todos = personas.data[i].email.includes('reqres');//true|false
}
console.log(todos);
//every
todos = personas.data.every(persona => persona.email.includes('reqres'));//que quiero
console.log(todos);
//---------------------------------------
//todos
function todosConMismoDominio(personas) {
    const todosTienenAlgo = emails.map(o => o.includes('reqres'));
    let arr = emails.map(o => o.includes('reqres'));
    console.log('¿todos tienen reqres? :', !arr.includes(false));
    //logica
    //true|false;
}

/*
filter() // array de cosas filtradas
.map() //convierte algo en otra cosa
.every() //determina si todos cumplen algo
.some() // //determina si ALGUNO cumplen algo
.reduce()
.find() busca el indice de un elemento
*/

/*
*/
// alguno se llama 'George'
function alguno(personas) {
    let alguno = false;
    for (let i=0; !alguno && i<personas.data.length; i++) {
        alguno = personas.data[i].first_name.includes('George');
    } 
    return alguno;
}
console.log('alguno', alguno(personas));
//----------------------------------------
const existeGeorge = personas.data.some(p => p.first_name.includes('George'));
console.log('george', existeGeorge);

//-----------------------------
//suma de la edades
const edades = personas.data.reduce((prev,current) => prev + current.age,0);
console.log(edades);

const nombres = personas.data.reduce((prev,current) => prev + current.first_name + ',','');
console.log(nombres);
//---------------------------

const idxPersona36 = personas.data.findIndex(persona => persona.age === 36);
console.log(idxPersona36);

const aux = personas.data.find(persona => persona.age === 36);
console.log(aux);