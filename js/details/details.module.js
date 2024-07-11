import { detailsSlide_H3 } from '../selectors/jquerySelectors.module.js';

class Details {

    constructor(detailsSlide, duration){
        this.detailsSlide = detailsSlide;
        this.duration = duration;
    }

    initSlide(){
        this.detailsSlide.on('click', function(e) {

            $(this).next('p').slideToggle(500);

            $(this).parent().siblings('div').children('p').slideUp(500);
            // this.#slideToggle();
            // this.#slideNephewsUp();
        });
    }

    #slideToggle(){
        this.detailsSlide.next('p').slideToggle(this.duration);
    }

    #slideNephewsUp(){
        this.detailsSlide.parent().siblings('div').children('p').slideUp(this.duration);
    }
}


const detailsSlide = new Details(detailsSlide_H3, 500);

export default detailsSlide;