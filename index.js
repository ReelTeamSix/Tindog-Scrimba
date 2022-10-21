// Remember to import the data and Dog class!
import dogs from './data.js'
import { Dog } from './Dog.js'

function getNewDog() {
    const newDogData = dogs.shift()
    return newDogData ? new Dog(newDogData) : {}
 }

let isWaiting = false;

function liked(){
    if(!isWaiting){
        newDog.hasBeenLiked = true;
        newDog.hasBeenSwiped = true;
        newDog.getSwipedHtml();
        render();
        document.getElementById('dog-avatar').style.justifyContent = 'space-between';
        isWaiting = true;
       
        if(dogs.length === 0){
            setTimeout(() => {
                document.getElementById('main').innerHTML = end();
                },3000)
        }
        
        else {
            setTimeout(() => {
            newDog = getNewDog()
            render();
            isWaiting = false
            console.log(isWaiting)
            },3000)
        }
    }
    console.log(isWaiting)     
}

function nope(){
    
    if(!isWaiting){
        newDog.hasBeenLiked = false;
        newDog.hasBeenSwiped = true;
        
        newDog.getSwipedHtml();
        render();
        document.getElementById('dog-avatar').style.justifyContent = 'space-between';
        isWaiting = true;
        
        
        if(dogs.length === 0){
            setTimeout(() => {
                document.getElementById('main').innerHTML = end();
                },3000)
        }
        
        else{
            setTimeout(() => {
                newDog = getNewDog()
                render();
                isWaiting = false;
                },3000)
        }
    }
    console.log(isWaiting)
}

function end(){
    
    const endHtml = 
    `<div class="end-container">
      <p class="ending-text">You have reached the end! Check back later for more dogs.</p>
    </div>`
    
    return endHtml
    
}
document.getElementById('like-btn').addEventListener('click', liked)
document.getElementById('dislike-btn').addEventListener('click', nope)

function render(){
    document.getElementById('main').innerHTML = newDog.getDogHtml();
    document.getElementById('dog-avatar').style.backgroundImage = `url(${newDog.avatar})`
 }
 
 let newDog = new Dog(getNewDog()) 
 render()
 