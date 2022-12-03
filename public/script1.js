function signinPre() {
    
    const form = document.forms["userForm"];
    const name = form.elements["name"].value;
    const password = form.elements["password"].value;
    console.log(name);
    console.log(password);
    signin(name, password);
}


async function signup(userName, userPassword) {
    // отправляет запрос и получаем ответ
    const response = await fetch("/signup", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({
            name: userName,
            password: userPassword
        })
    });
    // если запрос прошел нормально
    if (response.ok === true) {
        // получаем данные
        const users = await response.json();

        console.log(users);
    }
    // если запрос прошел неправильно
    else {

        console.log('Error signup');
    }
}


// Получение всех пользователей
async function GetUsers() {
    // отправляет запрос и получаем ответ
    const response = await fetch("/users", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    // если запрос прошел нормально
    if (response.ok === true) {
        // получаем данные
        const users = await response.json();

        console.log(users);
    }
}

// отправка формы
document.forms["userForm"].addEventListener("submit", e => {
    e.preventDefault();
    const form = document.forms["userForm"];
    const name = form.elements["name"].value;
    const password = form.elements["password"].value;
    console.log(name);
    console.log(password);
    signup(name, password);
    //reset();
});

function reset(){
    const form = document.forms["userForm"];
    form.elements["name"].value = '';
    form.elements["password"].value = '';
}