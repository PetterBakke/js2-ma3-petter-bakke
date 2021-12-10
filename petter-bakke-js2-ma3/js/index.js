import { baseUrl } from "../components/api.js";
import displayMessage from "../components/displayMessage.js";

const productsUrl = baseUrl + "products";

(async function () {
  const container = document.querySelector(".product-container");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();
    console.log(json.data);
    container.innerHTML = "";

    json.data.forEach(function (data) {
        container.innerHTML += `<a class="product" href="index.html?id=${data.attributes.id}">
                                  <h4>${data.attributes.name}</h4>
                                  <p>Price: ${data.attributes.price}</p>
                                  <p>${data.attributes.description}</p>
                                  </a>`;
      });
  } catch(error) {
    console.log(error);
    displayMessage("error", error, ".product-container");
  }
})();