function print(text) {
  console.log(text);
}

function isValid(name) {
  if (name.length > 4 && name.indexOf(' ') == -1) {
    alert("Вы все сделали правильно!")
  } else {
    alert("Имя должность содержать боллее 4 букв и записано без пробелов")
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
sayHello();

