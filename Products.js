// products
// electrons
// set discount(10%)

let products = [
  {
    name: "macbook",
    price: 3000000,
    category: "electronic",
    brand: "Apple",
    stock: "400",
  },
  {
    name: "Sneaker",
    price: 250000,
    category: "clothes",
    brand: "Nike",
    stock: "25",
  },
  {
    name: "s23",
    price: 2000000,
    category: "electronic",
    brand: "Samsung",
    stock: 10,
  },
  {
    name: "smart tv",
    price: 1900000,
    category: "electronic",
    brand: "TCL",
    stock: 20,
  },
  {
    name: "Shoe",
    price: 150000,
    category: "clothes",
    brand: "Martens",
    stock: 35,
  },
  {
    name: "rice cooker",
    price: 1800000,
    category: "electronic",
    brand: "Akira",
    stock: 18,
  },
  {
    name: "washing machine",
    price: 1200000,
    category: "electronic",
    brand: "Haier",
    stock: 25,
  },
  {
    name: "vacuum cleaner",
    price: 800000,
    category: "electronic",
    brand: "Sharp",
    stock: 20,
  },
  {
    name: "playStation",
    price: 1250000,
    category: "electronic",
    brand: "Sony",
    stock: 35,
  },
  {
    name: "clothes iron",
    price: 465000,
    category: "electronic",
    brand: "Philips",
    stock: 40,
  },
];

// discount - 10%

// function setSale(saleAmout) {
//   for (let i = 0; i < 10; i = i + 1) {
//     products[i].price = products[i].price * (1 - saleAmout / 100);
//   }
// }
// setSale(10);
// console.log(products);

// // for (let i = 0; i < 10; i = i + 1) {
//   console.log(i, "=>", products[i]);
// }

// function findByCategory(cate) {
//   for (let i = 0; i < 10; i = i + 1) {
//     if (products[i].category == cate) {
//       console.log(products[i]);
//     }
//   }
// }
// findByCategory("clothes");

// Expensive

// function findMostExpensive() {
//   let mostExpensive = products[3].price;
//   for (i = 0; i < 10; i = i + 1) {
//     if (mostExpensive < products[i].price) {
//       mostExpensive = products[i].price;
//     }
//   }
//   console.log(mostExpensive);
// }
// findMostExpensive();

// Less stock

// function lessStock() {
//   let lessStock = products[4].stock;
//   for (i = 0; i < 10; i = i + 1) {
//     if (lessStock > products[i].stock) {
//       lessStock = products[i].stock;
//     }
//   }
//   console.log(lessStock);
// }
// lessStock();

// Dundjaas deesh uneteig ni ol.

function findAboveAvg(prods) {
  let avgPrice = 0;
  let sumPrice = 0;
  for (let i = 0; i < prods.length; i = i + 1) {
    sumPrice = sumPrice + prods[i].price;
  }
  console.log("sumPrice:", sumPrice);
  avgPrice = sumPrice / prods.length;
  console.log("AvgPrice", avgPrice);
  // }
  // findAboveAvg(products);

  // now filter price above avg
  //Filter: boolean utga butsaana. shine element garahgvi. trueg tuuj butsaana.

  let filterdProd = [];
  let count = 0;
  for (let i = 0; i < prods.length; i++) {
    if (prods[i].price > avgPrice) {
      filterdProd[count] = prods[i];
      count++;
    }
  }
  return filterdProd;
}
let aboveAVG = findAboveAvg(products);
console.log("aboveAVG:", aboveAVG);
