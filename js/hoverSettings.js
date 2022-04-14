    const productItem = document.getElementById("owl-products");
    const productBtn = document.querySelector(".product-btn");
    let currentElem = null;

    if (screen.width < 1000) {
        productBtn.style.display = "block";
    }

productItem.onmouseover = function(event) {
  if (currentElem) return;
  let target = event.target.closest('.product');
  if (!target) return;
  if (!productItem.contains(target)) return;

  currentElem = target;
  console.log(currentElem.dataset);
  currentElem.querySelector(".product-title").style.display = "none";
  currentElem.querySelector(".product-btn").style.display = "block";
};

productItem.onmouseout = function(event) {
  if (!currentElem) return;

  let relatedTarget = event.relatedTarget;

  while (relatedTarget) {
    if (relatedTarget == currentElem) return;
    relatedTarget = relatedTarget.parentNode;
  }
  currentElem.querySelector(".product-title").style.display = "block";
  currentElem.querySelector(".product-btn").style.display = "none";

  currentElem = null;
};
