let CartItems = JSON.parse(localStorage.getItem("cart"));
CartItems.forEach((item) => {
  CreateRow(item);
});
function CreateRow(i) {
  if (i != null) {
    let index = CartItems.indexOf(i);
    let tbody = document.querySelector("tbody");
    let row = document.createElement("tr");
    row.setAttribute('id',index)
    tbody.appendChild(row);
    let id = document.createElement("th");
    id.innerHTML = i.id;
    row.appendChild(id);
    let image_row = document.createElement("td");
    row.appendChild(image_row);
    let image = document.createElement("img");

    image.setAttribute("src", i.images[0]);
    image.className = "img-thumbnail";
    image_row.appendChild(image);
    let title = document.createElement("td");
    title.innerHTML = i.title;
    row.appendChild(title);
    let price = document.createElement("td");
    price.innerHTML = `${i.price}$`;
    row.appendChild(price);
    let btn_row = document.createElement("td");
    row.appendChild(btn_row);
    let btn = document.createElement("button"); //
    btn.classList.add("btn", "btn-danger");
    btn.setAttribute("id", index); //

    btn.setAttribute("data-bs-toggle", "modal"); //
    btn.setAttribute("data-bs-target", "#exampleModal"); //
    btn.innerHTML = "Remove Product";
    btn_row.appendChild(btn);
  }
}

let btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", remove);
});
//
async function remove() {
  let RemovButton = document.querySelector("#RemoveButton");

  let prom = new Promise((res, rej) => {
    RemovButton.addEventListener("click", () => {
      res();
    });
  });
  let Item = CartItems[this.getAttribute("id")];
  console.log(this);
  document.getElementById(
    "modal-body"
  ).innerHTML = `do you want to remove ${Item.title} from cart??`;

  let res = await prom;
  let arr = CartItems.filter(
    (item) => item != CartItems[this.getAttribute("id")]
  );
  localStorage.setItem("cart", JSON.stringify(arr));
  let row = document.getElementById(this.getAttribute("id"));
 row.remove();
  let alert = document.querySelector(".d-none");
  alert.classList.toggle("d-none");
  alert.innerHTML = `${Item.title} removed Successfully from the Cart`;
 
  setTimeout(() => {
    alert.classList.toggle("d-none");
    location.reload();
  }, 3000);
}
