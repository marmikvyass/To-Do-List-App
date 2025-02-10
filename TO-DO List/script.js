const inputField = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');



document.querySelector('#button').addEventListener('click', ()=>{
    if(inputField.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }

    inputField.value = '';
    saveData();
})


listContainer.addEventListener('click',(event)=>{
    if(event.target.tagName == "LI"){
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName == "SPAN"){
        event.target.parentElement.remove();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();