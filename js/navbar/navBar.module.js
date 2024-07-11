import { navBarTag, headerCaptionClassDiv, openNavClassDiv, closeNavClassAnchor } from '../selectors/jquerySelectors.module.js';

class NavBar {

    
    constructor(nav, openNav, closeNav, headerCaption, maxWidth, minWidth, duration) {
        
        this.nav = nav;
        this.openNav= openNav;
        this.closeNav = closeNav;
        this.headerCaption = headerCaption;
        this.maxWidth = maxWidth;
        this.minWidth = minWidth;
        this.duration = duration;
        

    }

    openNavBar(){
        this.openNav.on('click', (e) => { 
            this.#animateMaxNav();
            this.#animateMAxOpen();
            this.#animateMaxHeaderCaption();

        });
    }

    #animateMaxNav(){
        this.nav.animate({width: this.maxWidth}, this.duration);
    }

    #animateMAxOpen() {
        this.openNav.animate({left: this.maxWidth}, this.duration);
    }

    #animateMaxHeaderCaption(){
        this.headerCaption.animate({left: '140px'}, this.duration);
    }

    closeNavBar() {
        this.closeNav.on('click', (e) => {
            this.#animateMinNav();
            this.#animateMinOpen();
            this.#animateMinHeaderCaption();
        })
    }

    #animateMinNav(){
        this.nav.animate({width: this.minWidth}, this.duration);
    }

    #animateMinOpen() {
        this.openNav.animate({left: this.minWidth}, this.duration);
    }

    #animateMinHeaderCaption(){
        this.headerCaption.animate({left: this.minWidth}, this.duration);
    }


}


const navBar = new NavBar(navBarTag, openNavClassDiv, closeNavClassAnchor, headerCaptionClassDiv, '250px', '0', 500);

export default navBar;