var contenedor_buscador = document.getElementById("contenedor_buscador")
var cover_busqueda = document.getElementById("cover_busqueda")
var input_buscador = document.getElementById("input_buscador")
var lista_busqueda = document.getElementById("lista_busqueda")


document.getElementById("input_buscador").addEventListener("keyup", buscador_interno);

function buscador_interno(){
    console.log("Entró a la funcion");

    filtro = input_buscador.value.toUpperCase();
    li = lista_busqueda.getElementsByTagName("li");

    for(i=0; i<li.length; i++){
        a = li[i].getElementsByTagName("a")[0];
        valor_texto = a.textContent || a.innerText;
        if(valor_texto.toUpperCase().indexOf(filtro)>-1){
            li[i].style.display ="";
            lista_busqueda.style.display="block";
            if (input_buscador.value==""){
                lista_busqueda.style.display = "none";
            }
        }else{
            li[i].style.display = "none";
        }
    }
}



/*
    ctn-bars-search = contenedor_buscador
    inputSearch = input_buscador
    box-search = lista_busqueda
    cover-ctn-search = portada_busqueda
*/