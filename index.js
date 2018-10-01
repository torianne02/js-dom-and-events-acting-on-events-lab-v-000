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
  let employeeName = retrieveEmployeeInformation();
  let newEmployee = document.createElement('li').innerHTML = employeeName;
  return $('ul.employee-list').append(employeeName);
}
