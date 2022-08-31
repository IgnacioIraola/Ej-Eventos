class Producto{
    constructor(bebida,precio){
        this.bebida = bebida;
        this.precio = Number(precio);
    }
}


const compra = []



let form = document.getElementById('form')
let inputBebida = document.getElementById('bebida')
let inputPrecio = document.getElementById('precio') 

let mostrarProdSolos = document.getElementById('mostrarProdSolos')
let mostrarTodosProd = document.getElementById('mostrarTodosProd')
let btnMostrarProd = document.getElementById('btnMostrar')
let validacion = false 




let bebida = form.children[1].value;
let precio = form.children[3].value;


form.addEventListener('submit', agregarProd)
btnMostrarProd.addEventListener('click', mostrarTodosLosProd)


inputBebida.focus()


function validarDatos() {
    bebida = form.children[1].value;
    precio = form.children[3].value;
    console.log(bebida)
    console.log(precio)

    if(precio == '' || bebida == ''){
        alert("Error debe completar todos los campos para continuar")
        inputBebida.focus()
        validacion = false;
         
    } else {
        validacion = true;
    }

}



function agregarProd(e){
    e.preventDefault()
    validarDatos();
    if(validacion == true){
    let datos = e.target
    compra.push(new Producto(bebida,precio))

    datos.children[1].value = "";
    datos.children[3].value = "";
    
    bebida = document.getElementById('iprod').bebida; 

    mostrarProdSolos.innerHTML = ""
    mostrarUnProd()
    inputBebida.focus()      

    }
    

}

const mostrarUnProd = () =>{
    mostrarProdSolos.innerHTML =
    `<h3>Bebida ingresada:</h3>
    <p><strong>Producto: </strong>${bebida}</p>
    <p><strong>Precio: </strong>${precio}</p>`
}


function mostrarTodosLosProd (e){
    e.preventDefault();
    mostrarTodosProd.innerHTML = '<h3>Todas las bebidas</h3>';
    for(const datos of compra){
        mostrarTodosProd.innerHTML += 
        `<p><strong>Producto: </strong>${datos.bebida}</p>
        <p><strong>Precio: </strong>${datos.precio}</p> `
    }
}
