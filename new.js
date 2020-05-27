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




function requestForm (data) {
        data.addEventListener('submit', (event) => {
            event.preventDefault();
            data.appendChild(stasusMessage);
    
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    
            let formData = new FormData(data);
    
            let obj = {};
            formData.forEach(function(value, key) {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
    
            request.send(json);
    
            request.addEventListener('readystatechange', function () {
                if (request.readyState < 4) {
                    stasusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    stasusMessage.innerHTML = message.success;
                } else {
                    stasusMessage.innerHTML = message.failture;
                }
            });
    
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }  
        });
       
      
    }
   
    requestForm (form);
    requestForm (formContact);




