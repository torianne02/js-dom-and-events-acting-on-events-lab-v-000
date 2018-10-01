function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = document.querySelector('input');

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  let newEmployee = retrieveEmployeeInformation();
  document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${newEmployee}</li>`);
}

function addNewLiOnClick() {
  let submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', function(event) {
    addNewElementAsLi();
    resetInput();
  });
}

function resetInput() {
  document.querySelector('input').value = '';
}

function clearEmployeeListOnLinkClick() {
  let link = document.querySelector('a');
  let ul = document.querySelector('ul');

  link.addEventListener('click', function(event) {
    ul.innerHTML = '';
  });
}
