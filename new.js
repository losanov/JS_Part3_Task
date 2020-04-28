// let user = { name: "Джон" };

// function sayHi() {
//   alert( this.name );
// }

// user.sayHi(); // Джон  (this == user)

// // вызовы функции, приведённые ниже, имеют разное значение this
// // "this" внутри функции является ссылкой на объект, который указан "перед точкой"





// let user = {
//     name: "Джон",
//     hi() { alert(this.name); }
//   }

//   // разделим получение метода объекта и его вызов в разных строках
//   let hi = user.hi;
//   hi(); // Ошибка, потому что значением this является undefined

// function multiply(number) {
//   'use strict';
//   return this * number;
// }
// let double = multiply.bind(2);
// console.log(double(3)); // => 6  
// console.log(double(10)); // => 20


// let doub2 = 2;
// let  mult = {
//   doub : function (numb) {
//     return doub2 * numb;
//   },
// };
// console.log(mult.doub(3));
// console.log(mult.doub(10));



//<input id="age" value="30">


// let age = document.getElementById('age');
// function showUser(surname, name) {
// 	alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
// showUser.call(age, 'Иванов', 'Иван');





