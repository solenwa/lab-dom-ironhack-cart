// ITERATION 1

function updateSubtotal(product) {
  //... your code goes here
  
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  let subtotal = price.innerText * quantity.value;
  
  product.querySelector(".subtotal span").innerHTML = subtotal;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
    // ITERATION 3
  //... your code goes here
  let total = 0;

  const allProducts = document.querySelectorAll('.product').forEach((productToUpdate) => {

    updateSubtotal(productToUpdate);

    total = total + Number(productToUpdate.querySelector(".subtotal span").innerHTML);

  });

  document.querySelector("#total-value span").innerHTML = total;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here

    document.querySelector(".subtotal span").innerHTML = 0;
  
  }


window.addEventListener('load', () => {
  const removeButton = document.querySelectorAll(".btn-remove");
  removeButton.forEach((buttonToRemove) => {
    buttonToRemove.addEventListener('click', removeProduct);
  });
  
});

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
