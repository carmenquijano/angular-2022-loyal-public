//objeto de js
//new 
/*
function searchUser(page) {
    //fetch(api) o axios(librria) o rxjs(angualr)
    const endPoint = `https://reqres.in/api/users${page ? `?page=${page}` : ''}` ;
    
    //peticiones async
    fetch(endPoint)
        .then(response => response.json())
        .then(data => Users(data));
}
*/
/*
    "componente"
*/
function Users(users) {

    if(!users) {
        return `
            <div class="row col-12">
                <h1>No hay datos</h1>
                <button class="btn btn-success" onclick="searchUser(1)">Obtener todos</button>
            </div>
        `;
    }

    const userHtml = `
    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Avatar</th>
        </tr>
        </thead>
        <tbody>
            ${users.data.map(user => User(user)).join('')}
        </tbody>
    </table>
    ${Paginator(users.page,users.total_pages)}
    `;

    return userHtml;
}

function User(user) {
    const html = `
        <tr>
            <th scope="row">${user.id}</th>
            <td>${user.email}</td>
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>
                <img src="${user.avatar}">                
            </td>
        </tr>
    `;

    return html;
}

function Paginator(currentPage, totalPage) {
    const html = `
    <nav aria-label="...">
        <ul class="pagination justify-content-center">
            <li class="page-item ${currentPage > 1 ? '' : 'disabled' }">
                <a class="page-link" href="javascript:()=>{}" tabindex="-1" aria-disabled="true" ${currentPage > 1 ? `onclick="searchUser(${currentPage-1})"` : '' }>
                    Previous
                </a>
            </li>
            ${Pagina(currentPage,totalPage)}
            <li class="page-item ${currentPage === totalPage ? 'disabled' : '' }"">
                <a class="page-link" href="javascript:()=>{}" ${currentPage !== totalPage ? `onclick="searchUser(${currentPage+1})"` : '' }>
                    Next
                </a>
            </li>
        </ul>
    </nav>
    `

    return html;
}

function Pagina(currentPage,totalPage) {

    let paginas = '';
    for(let i=1;i<=totalPage;i++) {
        paginas+=`
            <li class="page-item ${i === currentPage ? 'active' : ''}" aria-current="page">
                <a class="page-link" href="javascript:()=>{}" ${i !== currentPage ? `onclick="searchUser(${i})"` : ''}>${i}</a>
            </li>
        `
    }

    return paginas;
}