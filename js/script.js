window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    });

    // Timer

    let deadLine = '2020-04-03';

    function getTimeRemainng(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }



    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function addZero(num) {
            if (num < 10) {
                return '0' + num;
            } else {
                return num;
            }
        }

        function updateClock() {
            let t = getTimeRemainng(endtime);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadLine);

    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // class Options {
    //     constructor(height, width, bg, fontSize, textAlign) {
    //         this.height = height;
    //         this.width = width;
    //         this.bg = bg;
    //         this.fontSize = fontSize;
    //         this.textAlign = textAlign;
    //     }
    //     addDiv(writeText) {
    //         let newDiv = document.createElement('div');
    //         newDiv.innerHTML = `<h1>${writeText}</h1>`;
    //         newDiv.style.cssText = `height:${this.height}; width:${this.width}; background:${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
    //         document.body.appendChild(newDiv);
    //     }
    // }

    // const newBlock = new Options('400px', '600px', 'green', '30px', 'center');

    // newBlock.addDiv('all Correct');

    //Form
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо. Мы с вами скоро свяжемся',
        failture: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        formContact = document.querySelector('#form'),
        input = document.getElementsByTagName('input'),
        stasusMessage = document.createElement('div');

    stasusMessage.classList.add('status');

    function requestForm(data) {

        data.addEventListener('submit', (event) => {
            event.preventDefault();
            data.appendChild(stasusMessage);

            let formData = new FormData(data);

            function postData() {
                return new Promise(function (resolve, reject) {

                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                            } else {
                                reject();
                            }
                        }

                    };

                    let obj = {};
                    formData.forEach(function (value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    request.send(json);
                   
                });

            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(requestForm)
                .then(() => stasusMessage.innerHTML = message.loading)
                .then(() => stasusMessage.innerHTML = message.success)
                .catch(() => stasusMessage.innerHTML = message.failture)
                .then(clearInput);

        });
    }

    requestForm(form);
    requestForm(formContact);

});