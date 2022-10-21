// Create the Dog class here
class Dog {
    constructor(data){
        Object.assign(this, data);
    }
    
    getSwipedHtml(){
        const {hasBeenLiked, hasBeenSwiped} = this
        this.swipedHtml = ""
        return hasBeenLiked ? `<img class="swiped" src="images/badge-like.png">`
            : !hasBeenLiked && hasBeenSwiped ? `<img class="swiped" src="images/badge-nope.png">`
            : ""
    }
    
    getDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this;
        const swipedHtml = this.getSwipedHtml()
        return`<div id="dog-avatar" class= "container">
                    <div id="swiped">
                    ${swipedHtml}
                    </div>
                    <div class="dog-info-container">
                        <h1 class="dog-name">${name}, ${age}</h1>
                        <p class="dog-bio">${bio}</p>
                    </div>
                </div>
            `
    }
}

export { Dog }