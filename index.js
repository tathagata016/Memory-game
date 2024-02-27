const cardsArray = [
    { name: 'CSS', img: 'img/css.png'},
    { name: 'HTML', img: 'img/html.png' },
    { name: 'jQuery', img: 'img/jquery.png' },
    { name: 'JS', img: 'img/js.jpg' },
    { name: 'Node', img: 'img/node.png' },
    { name: 'Python', img: 'img/py.jpg' }
];


const parentDiv=document.querySelector('#card-section')

const gameCards=[...cardsArray, ...cardsArray].sort(()=>Math.random()-0.5)//create a new array
//console.log(gameCards)  ;

let clickCount=0;
let selectedCard=[];

function reset(){
    clickCount=0;
    selectedCard=[]
    document.querySelectorAll('.card_selected').forEach(card=>card.classList.remove('card_selected'))
}

parentDiv.addEventListener('click',event=>{
const curCard= event.target.closest('.card')

curCard.classList.add('card_selected')
selectedCard.push(curCard)

clickCount++;

if(clickCount===2)
{
    const[firstCard,secondCard]=selectedCard
    const isMatch= firstCard.dataset.name === secondCard.dataset.name
    setTimeout(()=>{
   if(isMatch)
   selectedCard.forEach(card=>card.classList.add('class_match'))
else
selectedCard.forEach(card=>card.classList.remove('class_selected'))
if(document.querySelectorAll('card_match').length===gameCards.length)
alert("You Won")
reset();
    },1000)
}
})

gameCards.forEach(cardData=>{
const card=document.createElement('div');
card.classList.add('card');
card.dataset.name=cardData.name;  

console.log(card);

const frontDiv=document.createElement('div');
frontDiv.classList.add('front-card');


const backDiv=document.createElement('div');
backDiv.classList.add('back-card');
backDiv.style.backgroundImage=`url(${cardData.img})`


card.appendChild(frontDiv)
card.appendChild(backDiv)
parentDiv.append(card)
})


