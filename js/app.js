document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const formNew = document.querySelector('#new-item-form');
  formNew.addEventListener('submit', handleNewFormInput);
})

const handleNewFormInput = function (event) {
  event.preventDefault();
  const formNewInput = createNewInput(event.target);
  const formInput = document.querySelector('#reading-list');
  formInput.appendChild(formNewInput);
  event.target.reset()
}

const createNewInput = function (form) {

  const formNewInput = document.createElement('li');
  formNewInput.classList.add('cell');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  formNewInput.appendChild(title);

  const author = document.createElement('h3');
  author.textContent = form.author.value;
  formNewInput.appendChild(author);

  const category = document.createElement('p');
  category.textContent = form.category.value;
  formNewInput.appendChild(category);

  return formNewInput;
}
