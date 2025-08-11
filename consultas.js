//Mostrar los albumes del genero "Jazz"

db.discos.find({"genre": "Jazz"})

// Mostrar los albumes con precio mayor a 50000

db.discos.find({"price": {$gt:50000}})

//Mostrar los albumes que no sean del genero "Rock"

db.discos.find({"genre": {$ne:"Rock"}})

//Mostrar sku, title y tags de los albumes con calificacion mayor a 4.5

db.discos.find({"rating": {$gt: 4.5}} , {sku:1, title:1, tags:1})

// Mostrar sku, title y price de los albumes con stock menor a 5

db.discos.find({"stock": {$lt:5}} , {sku:1, title:1, price:1})