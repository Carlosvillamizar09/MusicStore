# Problema
Music_store es un negocio especializado en la ventas de discos, y quiere migrar su inventario a una base de datos MongoDB para aprovechar la flexiblidad de los documentos y permitir actualizaciones rapidas.


## Organizacion
-> creacion.js
-> documentos.js
-> actualizacion.js
-> eliminaciones.js

## Requisitos
Algunos requisitos que solicitaba la base de datos era hacer consultas, actualizar documentos y eliminar datos, como por ejemplo:
- Album con sku: M034: actualizar stock a 15
- Album con sku:M018: cambiar el country de label a "Colombia".
- Album con sku:M025: agregar los tags "descuento" y "outlet".
- Mostrar sku, title y tags de los albumes con calificacion mayor a 4.5
- Mostrar los albumes del genero "Jazz"
- Eliminar los tags "nuevo" y "popular" del album con sku: M012

Estos fueron algunos de los documentos solicitados en la base de datos


## Autor

Carlos Mario Villamizar Medina

