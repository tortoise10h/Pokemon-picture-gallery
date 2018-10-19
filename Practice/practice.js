//get search form
var searchForm = document.getElementById('search');
searchForm.addEventListener('keyup',searching);
//searching pokemon card;
function searching(e){
	//get text from input form
	var text = e.target.value.toLowerCase();
	var cards = document.getElementsByClassName('name-card');
	//handle matching cards
	Array.from(cards).forEach(function(card){
		var cardName = card.textContent.toLowerCase();
		console.log(cardName);
		if(cardName.indexOf(text) != -1){
			card.parentElement.style.display = "block";
		}else{
			card.parentElement.style.display = "none";
		}
	});
}
