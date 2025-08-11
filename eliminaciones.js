//Eliminar la propiedad available de todos los documentos
db.discos.updateMany({}, {$unset:{"available":true}})

//Eliminar el tag "descuento" del album con sku:M025

db.discos.updateOne({"sku": "M025"} , {$pull:{"tags":"descuento"}})

//Eliminar los tags "nuevo" y "popular" del album con sku: M012

db.discos.updateOne({"sku": "M025"} , {$pull:{"tags":"nuevo"}})

db.discos.updateOne({"sku": "M025"} , {$pull:{"tags":"popular"}})

//Eliminar el album con sku:M043

db.discos.deleteOne({"sku": "M043"})

//Eliminar todos los albumes con stock igual a 0

db.discos.deleteMany({"stock":{$eq: 0}})