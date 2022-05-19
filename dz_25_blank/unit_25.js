
// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */
let obj = {
    'xhttp': xhttp = new XMLHttpRequest(),
    'url':  'http://getpost.itgid.info/index2.php',
    'key':  'auth=7859d9d42a8834141d529577207c9596',
    'name': 'Viktor',
    'year': 1997,
    'action': [1, 2, 3, 4, 5, 6, 7, 8, 9],
}
function t1() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction('.out-1', this.responseText);
    }
    obj['xhttp'].open('GET', `${obj['url']}?${obj['key']}&&action=${obj['action'][0]}`, true);
    obj['xhttp'].send();
}
function myFunction(pas, data) {
    document.querySelector(pas).textContent = data;
}

// ваше событие здесь!!!
document.querySelector('.b-1').addEventListener('click', t1);
// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction ('.out-2', this.responseText);
    }
    obj['xhttp'].open('GET', `${obj['url']}?${obj['key']}&&action=${obj['action'][1]}&&name=${obj['name']}`, true);
    obj['xhttp'].send();
}
// ваше событие здесь!!!
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */
function t3() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction ('.out-3', this.responseText);
    }
    obj['xhttp'].open('GET', `${obj['url']}?${obj['key']}&&action=${obj['action'][2]}&&num1=5&&num2=7`, true);
    obj['xhttp'].send();
}
// ваше событие здесь!!!
document.querySelector('.b-3').addEventListener('click', t3);

// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction ('.out-4', this.responseText);
    }
    obj['xhttp'].open('GET', `${obj['url']}?${obj['key']}&&action=${obj['action'][3]}&&num1=1&&num2=10`, true);
    obj['xhttp'].send();
}
// ваше событие здесь!!!
document.querySelector('.b-4').addEventListener('click', t4);
// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction ('.out-5', this.responseText);
    }
    obj['xhttp'].open('GET', `${obj['url']}?${obj['key']}&&action=${obj['action'][4]}`, true);
    obj['xhttp'].send();
}

// ваше событие здесь!!!
document.querySelector('.b-5').addEventListener('click', t5);
// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction ('.out-6', this.responseText);
    }
    obj['xhttp'].open('GET', `${obj['url']}?${obj['key']}&&action=${obj['action'][5]}&&num1=56&&num2=34`, true);
    obj['xhttp'].send();
}

// ваше событие здесь!!!
document.querySelector('.b-6').addEventListener('click', t6);

// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction ('.out-7', this.responseText);
    }
    obj['xhttp'].open('GET', `${obj['url']}?${obj['key']}&&action=${obj['action'][6]}`, true);
    obj['xhttp'].send();
}

// ваше событие здесь!!!
document.querySelector('.b-7').addEventListener('click', t7);
// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction ('.out-8', this.responseText);
    }
    obj['xhttp'].open('GET', `${obj['url']}?${obj['key']}&&action=${obj['action'][7]}&&year=${obj['year']}`, true);
    obj['xhttp'].send();
}

// ваше событие здесь!!!
document.querySelector('.b-8').addEventListener('click', t8);

// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction ('.out-9', this.responseText);
    }
    obj['xhttp'].open('GET', `${obj['url']}?${obj['key']}&&action=${obj['action'][8]}&&m=1&&d=1&&y=1`, true);
    obj['xhttp'].send();
}

// ваше событие здесь!!!
document.querySelector('.b-9').addEventListener('click', t9);

// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

function t10() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction('.out-10', this.responseText);
    }
    obj['xhttp'].open('POST', `${obj['url']}`, true);
    obj['xhttp'].setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    obj['xhttp'].send(`${obj['key']}&&action=${obj['action'][0]}`);
}

// ваше событие здесь!!!
document.querySelector('.b-10').addEventListener('click', t10);

// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction('.out-11', this.responseText);
    }
    obj['xhttp'].open('POST', `${obj['url']}`, true);
    obj['xhttp'].setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    obj['xhttp'].send(`${obj['key']}&&action=${obj['action'][1]}&&name=${obj['name']}`);
}

// ваше событие здесь!!!
document.querySelector('.b-11').addEventListener('click', t11);
// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction('.out-12', this.responseText);
    }
    obj['xhttp'].open('POST', `${obj['url']}`, true);
    obj['xhttp'].setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    obj['xhttp'].send(`${obj['key']}&&action=${obj['action'][2]}&&num1=5&&num2=7`);
}

// ваше событие здесь!!!
document.querySelector('.b-12').addEventListener('click', t12);
// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction('.out-13', this.responseText);
    }
    obj['xhttp'].open('POST', `${obj['url']}`, true);
    obj['xhttp'].setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    obj['xhttp'].send(`${obj['key']}&&action=${obj['action'][3]}&&num1=0&&num2=10`);
}

// ваше событие здесь!!!
document.querySelector('.b-13').addEventListener('click', t13);
// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction('.out-14', this.responseText);
    }
    obj['xhttp'].open('POST', `${obj['url']}`, true);
    obj['xhttp'].setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    obj['xhttp'].send(`${obj['key']}&&action=${obj['action'][4]}`);
}

// ваше событие здесь!!!
document.querySelector('.b-14').addEventListener('click', t14);
// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction('.out-15', this.responseText);
    }
    obj['xhttp'].open('POST', `${obj['url']}`, true);
    obj['xhttp'].setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    obj['xhttp'].send(`${obj['key']}&&action=${obj['action'][5]}&&num1=34&&num2=54`);
}

// ваше событие здесь!!!
document.querySelector('.b-15').addEventListener('click', t15);
// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction('.out-16', this.responseText);
    }
    obj['xhttp'].open('POST', `${obj['url']}`, true);
    obj['xhttp'].setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    obj['xhttp'].send(`${obj['key']}&&action=${obj['action'][6]}`);
}

// ваше событие здесь!!!
document.querySelector('.b-16').addEventListener('click', t16);
// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction('.out-17', this.responseText);
    }
    obj['xhttp'].open('POST', `${obj['url']}`, true);
    obj['xhttp'].setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    obj['xhttp'].send(`${obj['key']}&&action=${obj['action'][7]}&&year=${obj['year']}`);
}

// ваше событие здесь!!!
document.querySelector('.b-17').addEventListener('click', t17);
// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {
    obj['xhttp'].onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) myFunction('.out-18', this.responseText);
    }
    obj['xhttp'].open('POST', `${obj['url']}`, true);
    obj['xhttp'].setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    obj['xhttp'].send(`${obj['key']}&&action=${obj['action'][8]}&&m=1&&d=1&&y=1`);
}

// ваше событие здесь!!!
document.querySelector('.b-18').addEventListener('click', t18);
