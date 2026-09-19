import getImagesByQuery from './';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const dataList = document.querySelector('#data-list');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', submitHandler);
function submitHandler(event) {
  event.preventDefault();
  const searchCriteria = event.target.elements;
  console.log(searchCriteria);
}
