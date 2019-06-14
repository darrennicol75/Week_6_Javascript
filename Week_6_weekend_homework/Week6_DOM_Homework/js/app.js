document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  // console.log("test");
  event.preventDefault();

  const stockListItem = createStockListItem(event.target);
  const stockList = document.querySelector('#stock-list');
  stockList.appendChild(stockListItem);

  event.target.reset();
}

const createStockListItem = function (form) {
  const stockListItem = document.createElement('li');
  stockListItem.classList.add('stock-list-item');

  const company = document.createElement('h2');
  company.textContent = form.company.value;
  stockListItem.appendChild(company);

  const stock_ticker = document.createElement('h3');
  stock_ticker.textContent = form.stock_ticker.value;
  stockListItem.appendChild(stock_ticker);

  const industry = document.createElement('p');
  industry.textContent = form.industry.value;
  stockListItem.appendChild(industry);

  const rating = document.createElement('p');
  rating.textContent = form.rating.value;
  stockListItem.appendChild(rating);

  const style = document.createElement('p');
  style.textContent = form.style.value;
  stockListItem.appendChild(style);

  const price = document.createElement('h3');
  price.textContent = form.price.value;
  stockListItem.appendChild(price);

  return stockListItem;
}

const handleDeleteAllClick = function (event) {
  const stockList = document.querySelector('#stock-list');
  stockList.innerHTML = '';
}
