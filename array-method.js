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
      name: "smart tv",
      price: 1900000,
      category: "electronic",
      brand: "TCL",
      stock: 20,
    },
    {
      name: "shirt",
      price: 90000,
      category: "clothes",
      brand: "Zara",
      stock: 10,
    },
  
    {
      name: "pendant",
      price: 1800000,
      category: "accessories",
      brand: "Pandora",
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
      name: "Shoe",
      price: 150000,
      category: "clothes",
      brand: "Martens",
      stock: 35,
    },
    {
      name: "chain",
      price: 120000,
      category: "accessories",
      brand: "swarovski",
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
  
  // filterbybrand("")
  let brands = "Apple"
  let filterbybrands = products.filter((a) => {
    return a.brand == brands;
  });
  console.log("filterbybrands:", filterbybrands);
  
  // filterbyPrice(max,min)
  
  let filterbyPrice =
    // stock- sort
  
    // products.sort((a,b)) => {
  
    // }
  