// Өгөгдсөн n тоо хүртэлх квадратуудын нийлбэрийг ол. Давталт ашиглахгүй болно.

function y(num1) {
  let product = (num1 * (num1 + 1) * (2 * num1 + 1)) / 6;
  return product;
}
console.log(y(5));
