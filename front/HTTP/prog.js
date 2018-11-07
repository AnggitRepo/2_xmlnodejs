var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "http://192.168.100.117:8080/";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();


//***********************************//
// var xhr = new XMLHttpRequest();
// console.log('UNSENT', xhr.readyState); // readyState will be 0

// xhr.open('GET', 'http://192.168.100.117:8080/', true);
// console.log('OPENED', xhr.readyState); // readyState will be 1

// xhr.onprogress = function () {
//     console.log('LOADING', xhr.readyState); // readyState will be 3
// };

// xhr.onload = function () {
//     console.log('DONE', xhr.readyState); // readyState will be 4
// };

// xhr.send(null);
// ***********************************//

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'data.txt', true);

// // If specified, responseType must be empty string or "text"
// xhr.responseType = 'text';

// xhr.onload = function () {
//     if (xhr.readyState === xhr.DONE) {
//         if (xhr.status === 200) {
//             console.log(xhr.response);
//             console.log(xhr.responseText);
//         }
//     }
// };

// xhr.send(null);