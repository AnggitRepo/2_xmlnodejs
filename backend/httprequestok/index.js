var express = require('express');
var app = express();
var bodyParser  = require('body-parser');
var morgan = require('morgan');

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
}); 

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var produk =[
{
	id: 1,
	nama: 'Laptop'
},
{
	id: 2,
	nama: 'Mouse'
},
{
	id: 3,
	nama: 'Guitar'
}
];


app.get('/produk', function (req, res) {
  res.json(produk);
});

app.post('/produk', function(req, res){
	var nama = req.body.nama;
	produk.push({
		id: produk.length + 1,
		nama
	});
	 res.json('succes');
});

app.put('/produk/:id', function(req, res){
	var id = req.params.id,
		nama = req.body.nama;

	produk.forEach((produk, i) => {
		if(produk.id == id){
			produk.nama = nama;
		}
	})
	res.json('succes to update');
});

// app.delete('/produk/:id', function(req, res){
// 	var id = req.params.id;
// 	produk.forEach((produk, i) => {
// 		if(produk.id == id){
// 			produk.splice(i,1);
// 		}
// 	});
// 	res.json('succes delete')
// })


 
app.listen(8080);
console.log('port 8080');