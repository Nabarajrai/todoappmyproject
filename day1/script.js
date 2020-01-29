//const body=document.querySelector('body');
// const h1=document.querySelector('h1');
// h1.textContent='nabaraj';
// body.appendChild('h1');
//  const h2=document.querySelector('h2');
// // h2.remove();
// h2.style.color='red';
// h2.style.backgroundColor='blue';
// h2.style.textAlign='center';
// h2.style.height='40px';
// h2.style.paddingTop='3rem 2rem';
// const div=document.querySelector('div');
// div.addEventListener('click',removeDiv)


// function removeDiv(){
//     div.remove();
// }
const input=document.querySelector('input');
input.addEventListener('keyup',handleInput);

function handleInput(text){
    console.log(input.value);
}