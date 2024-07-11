import { durationBoxDaySpan, durationBoxHourSpan, durationBoxMinutesSpan, durationBoxSecondsSpan } from '../selectors/jquerySelectors.module.js';

class Duration {

    #duration;
    #days; 
    #hours;
    #minutes;
    #seconds;
    #now;

    constructor(targetDate, daySpan, hourSpan, minutesSpan, secondsSpan){
         this.targetDate = new Date(targetDate).getTime();
         this.daySpan = daySpan;
         this.hourSpan = hourSpan;
         this.minutesSpan = minutesSpan;
         this.secondsSpan = secondsSpan;
    }

    #setNow(){
        this.#now = new Date().getTime();
    }
    #setDuration(){
        this.#duration = this.targetDate - this.#now;
    }

    #setDay(){
        this.#days = Math.floor(this.#duration / (1000 * 60 * 60 * 24));
    }

    #setHours() {
        this.#hours = Math.floor((this.#duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    }

    #setMinutes() {
        this.#minutes = Math.floor((this.#duration % (1000 * 60 * 60)) / (1000 * 60));
    }

    #setSeconds(){
        this.#seconds = Math.floor((this.#duration % (1000 * 60)) / 1000);
    }

    #insertHTML(){
        this.daySpan.html(this.#days + ' D');
        this.hourSpan.html(this.#hours + ' h')
        this.minutesSpan.html(this.#minutes + ' m');
        this.secondsSpan.html(this.#seconds +' s');
    }
    
    #inserZerosHTML(){
        this.daySpan.html('0');
        this.hourSpan.html('0')
        this.minutesSpan.html('0');
        this.secondsSpan.html('0');

    }


    #init(){
        this.#setNow();
        this.#setDuration();
        this.#setDay();
        this.#setHours();
        this.#setMinutes();
        this.#setSeconds();
        this.#insertHTML();
    }
    initDuration(){
        let countDown = setInterval(()=> {
            this.#init();
            if(this.#duration < 0 ){
                clearInterval(countDown);
                this.#inserZerosHTML();
            }
        }, 1000);
    }

}

const duration = new Duration('2024-10-25', durationBoxDaySpan, durationBoxHourSpan, durationBoxMinutesSpan, durationBoxSecondsSpan);

export default duration;