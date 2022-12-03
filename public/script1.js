
async function signup(userweight, userheight) {
    // отправляет запрос и получаем ответ
    const response = await fetch("/signup", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({
            weight: userweight,
            height: userheight
        })
    });
    // если запрос прошел нормально
    if (response.ok === true) {
        // получаем данные
        const users = await response.json();

        console.log(users);

        let loginLabel = document.createElement('div');

        loginLabel.innerHTML = users.bmi;
        document.body.append(loginLabel);
    }
    // если запрос прошел неправильно
    else {
        console.log('Error signup');
    }
}

function PostSecondButton() {
    const form = document.forms["userForm"];
    const weight = form.elements["weight"].value;
    const height = form.elements["height"].value;
    console.log(weight);
    console.log(height);
    GetUsers(weight, height);
}
// Получение всех пользователей
async function GetUsers(userweight, userheight) {
    // отправляет запрос и получаем ответ
    const response = await fetch("/users", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json"},
        body: JSON.stringify({
            weight: userweight,
            height: userheight
        })
    });
    // если запрос прошел нормально
    if (response.ok === true) {
        // получаем данные
        const users = await response.json();

        console.log(users);

        let loginLabel = document.createElement('div');

        loginLabel.innerHTML = users.bmi;
        document.body.append(loginLabel);
    }
}

// отправка формы
document.forms["userForm"].addEventListener("submit", e => {
    e.preventDefault();
    const form = document.forms["userForm"];
    const weight = form.elements["weight"].value;
    const height = form.elements["height"].value;
    console.log(weight);
    console.log(height);
    signup(weight, height);
});