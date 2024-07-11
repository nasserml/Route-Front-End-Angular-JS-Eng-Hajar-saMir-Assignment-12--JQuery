class JQuerySelector {

    constructor(selector) {

        this.selector = selector;
    }

    getSelectorBy$JQuery() {
        return $(this.selector);
    }
         
    
}


const navBarTag = new JQuerySelector('nav').getSelectorBy$JQuery();
const headerCaptionClassDiv = new JQuerySelector('.header-caption').getSelectorBy$JQuery();
const openNavClassDiv = new JQuerySelector('.open-nav').getSelectorBy$JQuery();
const closeNavClassAnchor= new JQuerySelector('.close-nav').getSelectorBy$JQuery();


export {navBarTag, headerCaptionClassDiv, openNavClassDiv, closeNavClassAnchor};

const detailsSlide_H3 = new JQuerySelector('.details-slide h3').getSelectorBy$JQuery();


export {detailsSlide_H3};


const durationBoxDaySpan = new JQuerySelector('.inner-duration .box.day span').getSelectorBy$JQuery();
const durationBoxHourSpan = new JQuerySelector('.inner-duration .box.hour span').getSelectorBy$JQuery();
const durationBoxMinutesSpan = new JQuerySelector('.inner-duration .box.minutes span').getSelectorBy$JQuery();
const durationBoxSecondsSpan = new JQuerySelector('.inner-duration .box.seconds span').getSelectorBy$JQuery();


export {durationBoxDaySpan, durationBoxHourSpan, durationBoxMinutesSpan, durationBoxSecondsSpan};


const contactMessageTextArea = new JQuerySelector('.contact .contact-form textarea').getSelectorBy$JQuery();
const numberOfCharsSpan = new JQuerySelector('#numberOfCharacters').getSelectorBy$JQuery();

export {contactMessageTextArea, numberOfCharsSpan}

