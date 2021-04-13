let compras = ["Frutos secos", "Aceite de coco", "Yogurt natural", "Aceite argán", "Yogurt griego"];
console.log(compras);
compras.sort();


function Articulo(producto, precio, proveedor) {
    this.producto  = producto;
    this.precio    = precio;
    this.proveedor = proveedor;
}

let articulo1 = new Articulo("Frutos secos", 49, "Bio");
let articulo2 = new Articulo("Aceite de coco", 1000, "Bio");
let articulo3 = new Articulo("Yogurt natural", 210, "Veganis");
let articulo4 = new Articulo("Aceite argán", 120, "Bio");
let articulo5 = new Articulo("Yogurt griego", 180, "Dimax");
console.log(articulo1);

let articulos= [];

articulos.push(articulo1, articulo2, articulo3, articulo4, articulo5);
 
console.log(articulos);
articulos.sort ((a, b) => a.precio - b.precio);

