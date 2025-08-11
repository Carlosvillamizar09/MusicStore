//Album con sku: M034: actualizar stock a 15
db.discos.updateOne({"sku": "M034"} , {$set: {"stock":15}})

//Album con sku:M018: cambiar el country de label a "Colombia".

db.discos.updateOne({"sku": "M018"}, {$set: {"label.country": "Colombia"}})

//Album con sku:M059: agregar un nuevo tag "oferta".

db.discos.updateOne({"sku": "M059"}, {$push: {"tags": "oferta"}})

// Album con sku:M025: agregar los tags "descuento" y "outlet".

db.discos.updateOne({"sku": "M025"}, {$push: {"tags": "descuento"}})

db.discos.updateOne({"sku": "M025"}, {$push: {"tags": "outlet"}})

// Album titulado "Thriller": cambiar el price a 80000

db.discos.updateOne({"title": "Thriller"} , {$set: {"price": 80000}})

// Renombrar la propiedad origin a import_type

db.discos.updateMany({}, {$rename: {"origin": "import_type"}})

// Cambiar el import_type a "Nacional" para los albumes cuyo sello discografico sea "Colombia"

db.discos.updateMany({"label.country": "Colombia"}, {$set:{"import_type": "Nacional"}})
