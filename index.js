function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

let input = $('input');

function retrieveEmployeeInformation() {
  return input.value;
}

function addNewElementAsLi() {
  let employee
  $('.employee-list').append()
}
