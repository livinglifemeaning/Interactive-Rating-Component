const ratingNumbers = document.querySelectorAll('.rating-number')
const submit = document.querySelector('.submit')
const ratingCard = document.querySelector('.rating') 
const thanksCard = document.querySelector('.thank-you') 
const selectedSpan = document.querySelector('.selected-rating') 

let selectedRating = 5 
ratingNumbers.forEach((rating, idx) =>{
    rating.addEventListener('click', () => {
        removeSelected()
        rating.classList.add('selected-number')
        selectedRating = idx + 1 
        console.log(selectedRating) 
    } ) 

})

function removeSelected(){
    ratingNumbers.forEach((rating) => rating.classList.remove('selected-number'))
}

submit.addEventListener('click', () => {
    let opacity = 0
    ratingCard.classList.add('hide')
    selectedSpan.innerText = `${selectedRating}` 
    thanksCard.style.opacity = opacity 
    thanksCard.classList.remove('hide')
    setInterval(fadeIn, 100)

    function fadeIn(){
     if (opacity < 1){
         opacity += .5
         thanksCard.style.opacity = opacity; 
     }
    }
}) 

