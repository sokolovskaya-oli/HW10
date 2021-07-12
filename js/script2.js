let div = document.createElement('div');

div.classList.add('container');

let body =document.body;
body.appendChild(div);

let header = document.createElement('h1');
header.textContent ='Методы по работе с DOM';

div.insertAdjacentElement('beforebegin', header);

let ol = `
    <ol>
        <li>создание новых элементов по имени тэга</li>
        <li>добавление содержимого внутрь</li>
        <li>добавление класса элементу</li>
        <li>добавление элементу события</li>
    </ol>`;

div.innerHTML = ol;


let img = document.createElement('img');
img.src = 'http://picsum.photos/360';
img.width = 360;
img.classList.add('photo');
div.appendChild(img);


body.style.backgroundColor = 'lightblue';
header.style.cssText = 'color: blue; text-transform: uppercase';

let generateFlowers = (nameFlower, color)=>{
    return ` <div class='flowEl'>
                <h2>Beautiful ${nameFlower.toUpperCase()}</h2>
                <p> Flower ${nameFlower.toUpperCase()} is colore ${color} the most beaitiful!</p>
                <button type = 'button' class = 'btn'>Удалить</button>
            </div>
        `;
 
}
let flowDiv = document.createElement('div');
flowDiv.classList.add('flow');

let flowList = [
    {nameFlower: 'Ромашка', color: 'белый'},
    {nameFlower: 'Колокольчик', color: 'фиолетовый'},
    {nameFlower: 'Василек', color: 'синий'},
];

let flowHTML = flowList.map(fl=>{
    return generateFlowers(fl.nameFlower, fl.color)
}).join('');
flowDiv.innerHTML = flowHTML;
div.insertAdjacentElement('beforebegin', flowDiv);

let buttons = document.querySelectorAll('.btn');


function deleteClick(ev){
    let currentButton = ev.currentTarget;
    currentButton.parentElement.remove();
}
buttons.forEach(button =>{
    button.addEventListener('click', deleteClick)
})


