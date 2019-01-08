// Dependencies
import TweenMax from 'gsap/src/minified/TweenMax.min'; // Probably not needed
import TimelineMax from 'gsap/src/minified/TimelineMax.min'; // Probably not needed 
import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
// For development only
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';


// Execution
(() => {
    // GreenSock sample
    const tween = TweenMax.to('#webpack-img', 5, {
        ease: Power2.easeInOut,
        repeat: -1,
        rotation: 360,
        yoyo: true
    });
    // create a restarting animation button	
	const restartButton = document.getElementById('restart');
    restartButton.onclick = function(){
    tween.restart();
	}
	 // create a speedUp animation button	
	const speedUp = document.getElementById('speedUp');
    speedUp.onclick = function(){
    tween.timeScale(5);
	}
	 // create a origin speed animation button	
	const originSpeed = document.getElementById('originSpeed');
    originSpeed.onclick = function(){
    tween.timeScale(1);
	}

    // init controller
    const controller = new ScrollMagic.Controller();

    // build scene
    const scene = new ScrollMagic.Scene({
          duration: 150,
          offset: 50,
          triggerHook: 'onLeave'
    })
    .setTween(
    	"#webpack-img", 
    	2, 
    	{
    		css: {
    			top: 0, 
		    	left: 0, 
		    	x: 0, 
		    	y: 0,
		    	border: "1px solid #ff0000",
		    	maxWidth: "100px",
		    	height: "auto" 
		    }
		})
    // For development only
    .addIndicators({name: "scene 1 (duration: 150)"})
    .addTo(controller);

        const scene2 = new ScrollMagic.Scene({
          duration: 50,
          offset: 100,
          triggerHook: 'onLeave'
    })
    .setTween(
    	"#webpack-img-2", 
    	2, 
    	{
    		css: {    			
		    	y: "50vw",
		    	border: "1px solid #ff0000",	
		    	maxWidth: "50px",
		    	height: "auto"	    	
		    }
		})
    // For development only
    .addIndicators({name: "scene 2 (duration: 50)"})
    .addTo(controller);
})();
