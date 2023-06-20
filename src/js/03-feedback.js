let formData = {};
const form = document.querySelector('form');
const inputEl = document.querySelector('form input');
const textareaEl = document.querySelector('form textarea');
import throttle from 'lodash.throttle';

const deboucedLocalStorageValueSetter = throttle(data => {
  localStorage.setItem('formData', JSON.stringify(data));
}, 500);

form.addEventListener('input', function (event) {
  formData[event.target.name] = event.target.value;
  deboucedLocalStorageValueSetter(formData);
});

if (localStorage.getItem('formData')) {
  formData = JSON.parse(localStorage.getItem('formData')) || {};

  for (let key in formData) {
    form.elements[key].value = formData[key];
  }
  // console.log(formData);
}

function onFormSubmit(event) {
  event.preventDefault();
  if (textareaEl.value === '' || inputEl.value === '') {
    alert('Заповніть всі поля');
  } else {
    console.log(formData);
    form.reset();
    localStorage.setItem('formData', null);
    // localStorage.clear();
    formData = {};
  }
}

form.addEventListener('submit', onFormSubmit);
