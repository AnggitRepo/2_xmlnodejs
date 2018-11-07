// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest(),
//     method = "GET",
//     url = "https://developer.mozilla.org/en-US/";

// xhr.open(method, url, true);

// xhr.onreadystatechange = function () {
//   if(xhr.readyState === 4 && xhr.status === 200) {
//     // console.log(xhr.responseText);
//     // console.log('berhasil cung');
//   }
// };
// xhr.send();


// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();

// console.log('UNSENT', xhr.readyState); // readyState will be 0

// xhr.open('GET', 'https://developer.mozilla.org/en-US/', true);
// console.log('OPENED', xhr.readyState); // readyState will be 1

// xhr.onprogress = function () {
//     console.log('LOADING', xhr.readyState); // readyState will be 3
// };

// xhr.onload = function () {
//     console.log('DONE', xhr.readyState); // readyState will be 4
// };

// xhr.send(null);


var url = 'http://localhost/tsm/http2/'; //A local page

// function load(url, callback) {
//   var body = XMLHttpRequest.response;
//   var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//       callback(xhr.response);
//       console.log('mana');
//     }
//   }

//   xhr.open('GET', url, true);
//   xhr.send('');
// }

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();
// xhr.open('GET', url, true);
// xhr.responseType = 'text';
// xhr.onload = function () {
//     if (xhr.readyState === xhr.DONE) {
//         if (xhr.status === 200) {
//         	//respon error
//             // console.log(xhr.response); 
//             console.log(xhr.responseText);
//         }
//     }
// };

// xhr.send(null);

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// var xhr = new XMLHttpRequest();
// xhr.open('GET',url, true);
// xhr.onload = function () {
// 	console.log('masuk ga');
// 	// respon url masih salah
//   // console.log(xhr.responseURL); // http://example.com/test
// };
// xhr.send(null);

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.open('GET',url, true);
// xhr.responseType = 'document';
xhr.overrideMimeType('text/xml');
xhr.onload = function () {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.response);
      console.log(xhr.responseXML);
    }
  }
};

xhr.send(null);