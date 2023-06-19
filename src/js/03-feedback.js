let formData = {};
const form = document.querySelector('form');
const inputValue = localStorage;
import throttle from 'lodash.throttle';

const deboucedLocalStorageValueSetter = throttle(data => {
  inputValue.setItem('formData', JSON.stringify(data));
}, 500);

form.addEventListener('input', function (event) {
  formData[event.target.name] = event.target.value;
  deboucedLocalStorageValueSetter(formData);
});

if (inputValue.getItem('formData')) {
  formData = JSON.parse(inputValue.getItem('formData'));

  for (let key in formData) {
    form.elements[key].value = formData[key];
  }
  // console.log(formData);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
  localStorage.setItem('formData', null);
  // localStorage.clear();
  formData = {};
});
