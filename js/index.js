function searchUser(page) {
    //fetch(api) o axios(librria) o rxjs(angualr)
    const endPoint = `https://reqres.in/api/users${page ? `?page=${page}` : ''}` ;
    
    //peticiones async
    fetch(endPoint)
        .then(response => response.json())
        .then(data => {
            persistData(data);
            render('users', Users(data))
        });
}

function onInit() {
    //disparar a la funcion Users()

    //invocar
    render('users', Users());

    //invocar al componente Navbar()
    render('navbar', Navbar());
}

function render(id,html) {
    document.getElementById(id).innerHTML = html
}

//disparo la funcion onInit()
onInit();