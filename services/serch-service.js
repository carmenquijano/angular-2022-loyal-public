function filterSearch(key) {
    const userInStorage = getData();
    if (userInStorage) {
        let a = userInStorage.data.filter(user => user.email.includes(key) || user.first_name.includes(key) || user.last_name.includes(key));
        a.forEach(el => {

            const html = Users(el);
            document.getElementById('users').innerHTML = html;
        });
    }
}

function persistData(data) {
    localStorage.setItem('users', JSON.stringify(data));
}

function getData() {
    const data = localStorage.getItem('users');
    if (data) {
        return JSON.parse(data);
    }
    return undefined;
}