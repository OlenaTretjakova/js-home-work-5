const fieldValue = document.querySelector('form'); 
const onBtnSubmitClick = document.getElementById('buttonSubmit'); 
const onBtnClick =document.getElementById('button'); 
const arrayDates =[]; 
let params; 
 
const ulElements = document.createElement('ul'); 
 
ulElements.innerHtml = ''; 
 
fieldValue.addEventListener('submit',addToArrayDates); 
 
onBtnClick.addEventListener('click',ShowFormInConsole); 
 
 
function addToArrayDates(event) { 
    event.preventDefault(); 
    const value = fieldValue.elements[0].value; 
 
    if (!isNaN(value)&& value!="") { 
        arrayDates.push(fieldValue.elements[0].value); 
        console.log("Send form"); 
        params = 1; 
        clearInputWindow(event); 
    } else { 
        console.log("Enter numbers value"); 
        params = 3; 
    } 
 
    createEventsList(params); 
} 
 
 
function ShowFormInConsole(event) { 
 
    console.log(arrayDates); 
    params = 4; 
 
       createEventsList(params); 
     
} 
 
function clearInputWindow() { 
    fieldValue.reset(); 
    params = 2; 
 
    createEventsList(params); 
     
} 
 
function createEventsList(params) { 
 
    const liElement = document.createElement('li'); 
    const btnElement = document.createElement('button'); 
    btnElement.textContent = 'clear up'; 
    btnElement.className = 'clear-up'; 
     
    switch (params) { 
        case 1: 
            liElement.textContent = "Element add to array"; 
            break; 
        case 2: 
            liElement.textContent = "Enter window was cleared"; 
            break; 
        case 3: 
            liElement.textContent = "The attempt to enter incorrectincorrect value"; 
            break; 
        case 4: 
            liElement.textContent = "Show array in console"; 
            break; 
     
        default: 
            break; 
    } 
    ulElements.appendChild(liElement); 
    ulElements.appendChild(btnElement); 
 
    document.body.appendChild(ulElements); 
 
    btnElement.addEventListener('click', () => { 
        ulElements.removeChild(liElement); 
        ulElements.removeChild(btnElement); 
    }); 
 
}