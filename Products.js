// products
// electrons
// set discount(10%)

let products = [
  {
    name: "macbook",
    price: 3000000,
    category: "electronics",
    brand: "Apple",
    stock: "400",
  },
  {
    name: "camera",
    price: 2500000,
    category: "electronic",
    brand: "LG",
    stock: "25",
  },
  {
    name: "s23",
    price: 2000000,
    category: "electronics",
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
    name: "water boiler",
    price: 150000,
    category: "electronic",
    brand: "Midea",
    stock: 35,
  },
  {
    name: "rice cooker",
    price: 1800000,
    category: "electronics",
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
    category: "electronics",
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
    category: "electronics",
    brand: "Philips",
    stock: 40,
  },
];
// console.log(products.length);

// //discount

// function setSale(saleAmout) {
//   for (let i = 0; i < 10; i = i + 1) {
//     products[i].price = products[i].price * (1 - saleAmout / 100);
//   }
// }
// setSale(10);
// console.log(products);

// for (let i = 0; i < 10; i = i + 1) {
//   console.log(i, "=>", products[i]);
// }

// function findByCategory(cate) {
//   for (let i = 0; i < 10; i = i + 1) {
//     if (products[i].category == cate) {
//       console.log(products[i]);
//     }
//   }
// }
// findByCategory("electronics");

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

//

function findAboveAvg(prods) {
  let avgPrice = 0;
  let sumPrice = 0;
  for (let i = 0; i < prods.length; i = i + 1) {
    sumPrice = sumPrice + prods[i].price;
  }
  console.log("sumPrice:", sumPrice);
  avgPrice = sumPrice / prods.length;

  // now filter price above avg

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
