let formInput = document.querySelector("form input[type=range]");
let yearlyDiscount = 25;


function getPriceData(range = 10){
  let price = 0;
  let views = 0;

  switch (true) {
    case range > 0 && range < 25:
      price = 8;
      views = 10;
      break;
    case range >= 25 && range < 50:
      price = 12;
      views = 50;
      break;
    case range >= 50 && range < 75:
      price = 16;
      views = 100;
      break;
    case range >= 75 && range < 90:
      price = 24;
      views = 500;
      break;
    case range >= 90:
      price = 36;
      views = 1000;
      break;
    default:
      price = 0;
      break;
  }

  return {
    price,
    views
  }
}

function updatePrice({ price, views}){
  let priceElement = document.querySelector(".price span");
  let viewsElement = document.querySelector(".card--title span");

  priceElement.textContent = `${price}.00`;
  viewsElement.textContent = `${views === 1000 ? "1M" : `${views}K`}`;
}

formInput.addEventListener("input", (event) => {
  let data = getPriceData(event.target.value);
  updatePrice(data);
});