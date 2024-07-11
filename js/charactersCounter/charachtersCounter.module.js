import { contactMessageTextArea, numberOfCharsSpan } from '../selectors/jquerySelectors.module.js'; 

class CharactersCounter {

    #difference;

    constructor(textArea, countSpan, maxLength, errorMessage){

        this.textArea = textArea;
        this.countSpan = countSpan;
        this.maxLength = maxLength;
        this.errorMessage = errorMessage;
    }

    #setDifference() {
        this.#difference =this.maxLength -  this.textArea.val().length;
    }

    #insertDifferencCountSpan() {
        this.countSpan.html(this.#difference);
    }

    #insertErrorMessageCountSpan() {
        this.countSpan.html(this.errorMessage);
    }

    #init(){
        this.#setDifference();
        console.log(this.#difference)
         if(this.#difference > 0) {
            this.#insertDifferencCountSpan();
         } else{
            this.#insertErrorMessageCountSpan();
         }
    }
    initCounter() {
        this.textArea.on('keyup', () => {
            this.#init();
        });
    }

}

const charCounter = new CharactersCounter(contactMessageTextArea, numberOfCharsSpan, 100, 'your available character finished ')

export default charCounter;