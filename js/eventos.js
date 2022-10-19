const btnSearch = document.getElementById('btnSearch');

//asigno el evento?
btnSearch.addEventListener('click',()=>{
    
});

onClickSearch2 = function() {
    console.log('onClickSearch2');
}

function onClickSearch() {
    //capturar el div por su id
    const div = document.getElementById('info');

    //alt +96
    div.innerHTML  = `<p>Soy un parrafo</p>`;

    console.log(p);
}

btnSearch.addEventListener('click', onClickSearch);
