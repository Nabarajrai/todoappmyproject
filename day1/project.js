const input=document.querySelector('input');


const addButton=document.querySelector('#addButton');

const ul=document.querySelector('ul');

 
addButton.addEventListener('click' ,todoApp);

function todoApp(){
    const newTodoItem=input.value;
    const li=document.createElement('li');
    const removeButton=document.createElement('button');
    removeButton.style.border=' 0px solid white';
    removeButton.style.backgroundColor='white';
    removeButton.style.marginRight='20px'
    removeButton.style.marginLeft='15px';
    removeButton.addEventListener('click',removeNewItem);
    li.textContent=newTodoItem;
    removeButton.textContent='X';
    ul.appendChild(li);
    li.appendChild(removeButton);
    document.getElementById('input').value='';
}

function removeNewItem(){
    this.parentNode.remove();
}
const li=document.querySelector('li');
const removeButton=document.querySelector('#removeButton');

removeButton.addEventListener('click',handleRemoveButton);

function handleRemoveButton(){
    li.remove();
}