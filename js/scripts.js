//Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);

//     //Validar un formulario
//     evento.preventDefault();

//     console.log('enviando formulario');
// });

//Eventos de los inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombreInput.addEventListener('input', leerTexto);
emailInput.addEventListener('input', leerTexto);
mensajeInput.addEventListener('input', leerTexto);

//El evento de submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar el formulario
    const { nombre, email, mensaje } = datos;
    
    if (nombre === '' || email === '' || mensaje === ''){
        mostrarError('Todos los campos son obligatorios');
        return; //Corta la ejecucion del codigo
    }

    //Enviar el formulario
    mostrarBien('Se mando el mensaje correctamente');
    console.log('El formulario');
});

function leerTexto(e){
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    // console.log(e.target)
    // console.log(datos);
}

//Muestra error en pantalla
function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);

    //Desaparezca despues de 3 segundos
    setTimeout(()=>{
        error.remove();
    }, 3000);
};

function mostrarBien(mensaje){
    const bien = document.createElement('P');
    bien.textContent = mensaje;
    bien.classList.add('correcto');
    formulario.appendChild(bien);

    //Desaparezca despues de 3 segundos
    setTimeout(()=>{
        bien.remove();
    }, 3000);
};
