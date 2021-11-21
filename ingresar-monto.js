function monto(event) {
    const call = document.querySelector(".call");

    if (event.target.defaultValue=="option1"){
        call.style.display='none';
    }else{
        call.style.display='block';
    }
}