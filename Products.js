let products = JSON.parse(window.localStorage.getItem("products"));
let index = 0;
products.forEach((product) => {
  CreateCard(product);
});

function CreateCard(P) {
  let ProductDiv = document.querySelectorAll(".container"); //
  ProductDiv = ProductDiv[2]; //
  let Row = document.querySelectorAll(".row");
  if (index < 4) {
    Row = Row[Row.length - 1];
    index++;
  } else {
    index = 1;
    Row = document.createElement("div");
    ProductDiv.appendChild(Row);
    Row.classList.add("row", "mb-4"); //
  }
  let Col = document.createElement("div");
  Col.classList.add("col-lg-3", "col-md-4");
  Row.appendChild(Col);

  let Card = document.createElement("div");
  Card.className = "card";
  Card.style.maxWidth = "80%";
  Col.appendChild(Card);

  let image = document.createElement("img");

  image.className = "card-img-top";
  image.setAttribute("src", P.images[0]);
  image.style.maxHeight = "100px";

  Card.appendChild(image);
  let CardBody = document.createElement("div");
  CardBody.className = "card-body";
  Card.appendChild(CardBody);
  let title = document.createElement("h5");
  title.style.fontSize = "90%"; //
  title.innerHTML = P.title;
  CardBody.appendChild(title);
  let desc = document.createElement("p");
  desc.innerHTML = P.description.substring(0, 20) + "...";
  desc.className = "card-text";
  CardBody.appendChild(desc);
  let AddToCart = document.createElement("button"); //
  AddToCart.classList.add("btn", "btn-dark");
  AddToCart.setAttribute("data-bs-toggle", "modal"); //
  AddToCart.setAttribute("data-bs-target", "#idAmit"); //

  AddToCart.setAttribute("id", P.id);
  AddToCart.innerHTML = "Add To Cart";
  CardBody.appendChild(AddToCart);
}

let btns = document.querySelectorAll("button[data-bs-target='#idAmit']"); //
btns.forEach((btn) => {
  btn.addEventListener("click", AddtoCart);
});

//AddtoCart
async function AddtoCart() {
  let cart;
  let SaveButton = document.querySelector("#modalButton");
  let modalBody = document.querySelector(".modal-body");
  let product = products[this.getAttribute("id") - 1];

  modalBody.innerHTML = `Do you want to add ${product.title} to the cart`;
  let prom = new Promise((res, rej) => {
    SaveButton.addEventListener("click", () => {
      // console.log("test");
      res();
    });
  });
  console.log("before await");
  console.log(prom)

  let res = await prom;
  console.log("after await");
  console.log(prom)


  if (localStorage.getItem("cart") == null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  let alert = document.querySelector(".d-none");
  alert.classList.toggle("d-none");
  alert.innerHTML = `${product.title} Added Successfully to the Cart`;
  setTimeout(() => {
    alert.classList.toggle("d-none");
  }, 3000);
}

// AddtoCart
// async function AddtoCart() {
//   let cart;
//   let saveButton = document.querySelector("#modalButton");
//   let x = new Promise((res, rej) => {
//     saveButton.addEventListener("click", () => {
//       res();
//     });
//   });
//   let res = await x;
//   if (localStorage.getItem("cart") == null) {
//     cart = [];
//   } else {
//     cart = JSON.parse(localStorage.getItem("cart"));
//   }
//   let product = products[this.getAttribute("id") - 1];
//   cart.push(product);
//   localStorage.setItem("cart", JSON.stringify(cart));

//   let alert = document.querySelector(".d-none");
//   alert.classList.toggle("d-none");
//   alert.innerHTML=`${product.title} Added Successfully to the Cart`
//   setTimeout(()=>{
//     alert.classList.toggle("d-none");
//   },3000)
// }
