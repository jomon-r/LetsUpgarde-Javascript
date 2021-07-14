let cards=[
  {
     image:"https://wallpaperaccess.com/full/1911777.jpg",
     value:1,
     status:"closed"
  },
  {
     image:"https://wallpaperaccess.com/full/1911777.jpg",
     value:1,
     status:"closed"
  },
  {
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIF0PbSZnaKRgTeA4FCAy4oopiNbEaSd0Ixg&usqp=CAU",
     value:2,
     status:"closed"
  },
  {
     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIF0PbSZnaKRgTeA4FCAy4oopiNbEaSd0Ixg&usqp=CAU",
     value:2,
     status:"closed"
  },
  {
     image:"https://wallpaperaccess.com/full/2245011.jpg",
     value:3,
     status:"closed"
  },
  {
     image:"https://wallpaperaccess.com/full/2245011.jpg",
     value:3,
     status:"closed"
  },
  {
     image:"https://wallpaperaccess.com/full/1509372.jpg",
     value:4,
     status:"closed"
  },
  {
     image:"https://wallpaperaccess.com/full/1509372.jpg",
     value:4,
     status:"closed"
  },
  {
     image:"https://wallpaperaccess.com/full/1405501.jpg",
     value:5,
     status:"closed"
  },
  {
     image:"https://wallpaperaccess.com/full/1405501.jpg",
     value:5,
     status:"closed"
  },
 ]
 


let temp;
for(let i=cards.length-1; i>=0;i--){
   
   let j=Math.floor(Math.random()*(i+1));
   
   temp = cards[i];
   cards[i] = cards[j];
   cards[j] = temp;
}
 
let cardsCopy = cards;
 
function displayCards(data){
	let cardsString="";
	
	data.forEach(function(card,index){
		cardsString+=`
		
			<div class="card" style="background-image:url('${card.image}')">
				<div class="overlay ${card.status}" onclick="openCard(${index})">
				</div>
			
			</div>
		`;
	});
	
	document.getElementById('cards').innerHTML=cardsString;
	
}

displayCards(cards);

let cardCount = 1;
let val1=null,val2=null;
let score=0;
function openCard(index){

	cards[index].status="opened";
	if(cardCount===1){
		val1=cards[index].value;
		cardCount++;
	}
	else if(cardCount===2){
		val2=cards[index].value;
		
		if(val1===val2){
			score++;
			document.getElementById('score').innerText=score;
			
			val1=null;
			val2=null;
			cardCount=1;
		}
		else{
			
			alert("GAME OVER!!");
			location.reload();
		}
	}
	
	displayCards(cards);
}
	
