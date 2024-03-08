const boton = document.querySelector("button"); // selecciona el boton
const postData = document.querySelector("#post-data"); // selecciona el id
const crearUl = document.createElement('ul');// crea la lista

  postData.appendChild(crearUl); // se crea y se mete dentro del div
  
  boton.addEventListener("click", async (event) => { // cuando se haga click hace todo los que continua
    const obtenerDatos = async() => { // define una funcion asincrona
    const url = "https://jsonplaceholder.typicode.com/posts"; // donde se capturan los datos
    try {
      const respuesta = await fetch(url); // manda una solicitud
        const datos = await respuesta.json(); // convierte la respuesta json  

        crearUl.innerHTML = ''; // borra el contenido para que no se duplique al hacer más de un click
          
        // se crea lo que va dentro del div
        datos.forEach(post => {
          const lista = document.createElement('li');
          const titulo = document.createElement('h2');
          const parrafo = document.createElement('p');
    
          titulo.textContent = post.title; //post.title y body son los datos sacados del post
          parrafo.textContent = post.body;
    
          lista.appendChild(titulo); 
          lista.appendChild(parrafo); 
          crearUl.appendChild(lista); 
        });
      } catch (error) { // manejo de error
        console.log(error);
      }
    }; 
    obtenerDatos();
  });