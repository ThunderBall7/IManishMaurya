

document.addEventListener('DOMContentLoaded', function(){

  for (let i of products.data){
      let card = document.createElement("div");
      card.classList.add("card", i.category, i.id, "hide");

      let imgcontainer = document.createElement("div");
      imgcontainer.classList.add("image-container");

      let image = document.createElement("img");
      image.classList.add("product_image");
      image.setAttribute("src", i.Image);
      image.setAttribute("onclick", "singleProductFunction()")
      imgcontainer.appendChild(image);
      card.appendChild(imgcontainer);

      let container = document.createElement("div");
      container.classList.add("container");

      let name = document.createElement("h5");
      name.classList.add("product-name");
      name.innerText = i.productName.toUpperCase();
      container.appendChild(name);

      let price = document.createElement("h6");
      price.innerText = "$" + i.price + " " +  i.quality;
      container.appendChild(price);

      card.appendChild(container);
      document.getElementById("products").appendChild(card);

      image.addEventListener('click', function() {
          window.open(`${i.id}.html`)
          console.log(`${i.id} is clicked`);

      });
  }});

function filterProduct(value){

  let buttons = document.querySelectorAll(".link_button");
  buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()){
          button.classList.add("active");
      }else{
          button.classList.remove("active");
      };
  });

  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
      if (value == "all") {
          element.classList.remove("hide");
      }else {
          if (element.classList.contains(value)){
              element.classList.remove("hide");
          }else{
              element.classList.add("hide");
          }
      }
  })
};

  document.getElementById("search_button").addEventListener("click", () => {
      let searchInput = document.getElementById("search_header").value;
      console.log(searchInput);
      let elements = document.querySelectorAll(".product-name");
      let cards = document.querySelectorAll(".card");

      elements.forEach((element, index) => {
          if(element.innerText.includes(searchInput.toUpperCase())){
              cards[index].classList.remove("hide");
          }else{
              cards[index].classList.add("hide");
          }
      });
  });

window.onload = () => {
  filterProduct("all");
};
