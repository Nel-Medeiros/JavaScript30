function playsound(e) {// when the event of pressing a key on the keyboard this function will be executed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)// the const 'audio' will recieve the match of wich key was pressed in the document, trying to find a tag 'audio' with de atribute of [data-key="${e.keyCode}"].
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)// the const 'key' will recieve basicaly the same as de const 'audi' but insted of try to find a tag, it will try to find a class named '.key'
    if(!audio) return;//if there is no match then this will stop the function
    audio.currentTime = 0;//this allows we to not wait the whole audio to be played to hit the key again
    audio.play();//if there is a match then the const audio can be played
    key.classList.add('playing');//if there is a match then the class 'playing' will be added to the element so we can see the styling of this class happen
};

function removeTransition(e) {// this function will remove the class 'playing' as son as the event end
if(e.propertyName !== 'transform') return;//if the propertyName of the event is diferent os 'transform' then this function will be stoped
this.classList.remove('playing');//oterwise it will remove the class 'playing' from the element
}

const keys = document.querySelectorAll('.key'); // the const 'keys' will recieve every class who has the name '.key' from the document
keys.forEach(key => key.addEventListener('transitionend', removeTransition));//it will run a arrow function for each element listening the event 'transitionend' and then calling the function 'removeTransition'
window.addEventListener('keydown', playsound);