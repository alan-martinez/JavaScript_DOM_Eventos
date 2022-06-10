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
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return; //Corta la ejecucion del codigo
    }

    //Enviar el formulario
    mostrarAlerta('Se mando el mensaje correctamente');
    console.log('El formulario');
});

function leerTexto(e){
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    // console.log(e.target)
    // console.log(datos);
}

function mostrarAlerta(mensaje, error=null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);
    //Desaparezca despues de 3 segundos
    setTimeout(()=>{
        alerta.remove();
    }, 3000);
}
