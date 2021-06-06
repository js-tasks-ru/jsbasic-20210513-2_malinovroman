function print(text) {
  console.log(text);
}

function isValid(name) {
  if (name.length >= 4 && name.indexOf(' ') == -1 && !isFinite(name)) {
     return true;
   } else {
     return false;
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

