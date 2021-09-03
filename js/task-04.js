const qs = selector => document.querySelector(selector);

const btnDecrement = qs('button[data-action="decrement"]');
const textCounterValue = qs('#counter #value');
const btnIncrement = qs('button[data-action="increment"]');

const counterValue = 0;

// MODEL
let data = {
  counter: counterValue,
};

// UPDATE
const updateDecrement = e => {
  const newData = { ...data, counter: data.counter - 1 };
  updateView(newData);
};
const updateIncrement = e => {
  const newData = { ...data, counter: data.counter + 1 };
  updateView(newData);
};

btnDecrement.addEventListener('click', updateDecrement);
btnIncrement.addEventListener('click', updateIncrement);

// VIEW
const updateView = newData => {
  textCounterValue.textContent = String(newData.counter);
  data = newData;
};
