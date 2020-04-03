const para = document.querySelector('p');

//console.log(para.innerText);
//para.innerText = 'ninja';

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// })

const content = document.querySelector('.content');

//console.log(content.innerHTML);
//content.innerHTML = '<h2> this is a new h2 </h2>';


const people = ['jon', 'yoshi', 'anri'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});