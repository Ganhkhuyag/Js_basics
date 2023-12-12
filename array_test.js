let display = [
  { brand: "LG", inch: "23", price: 200000, year: "2022" },
  { brand: "sony", inch: "31", price: 300000, year: "2021" },
  { brand: "sony", inch: "31", price: 300000, year: "2021" },
  { brand: "sony", inch: "31", price: 300000, year: "2021" },
  { brand: "sony", inch: "31", price: 300000, year: "2021" },
  { brand: "sony", inch: "31", price: 300000, year: "2021" },
  { brand: "sony", inch: "31", price: 300000, year: "2021" },
  { brand: "sony", inch: "31", price: 300000, year: "2021" },
];

display[0].price = display[0].price * 0.9;
console.log(display);

let iphone15 = {
  brand: "apple",
  prices: [
    { year: 2020, price: 900 },
    { year: 2021, price: 850 },
    { year: 2022, price: 800 },
  ],
};
iphone15.prices[2].price = iphone15.prices[2].price * 0.9;
console.log(iphone15);
