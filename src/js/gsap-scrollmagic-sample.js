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
    // const tween = TweenMax.to('#webpack-img', 5, {
    //     ease: Power2.easeInOut,
    //     repeat: -1,
    //     rotation: 360,
    //     yoyo: true
    // });

    // init controller
    const controller = new ScrollMagic.Controller();

// SCENA 1 - Start
    // build scene
    const scene = new ScrollMagic.Scene({
          duration: 100,
          offset: 50,
          triggerHook: 'onLeave'
    })
    .setTween(
    	"#mission_moon-diffuse", 
    	4, 
    	{
    		css: {
    			transform: "rotate(-45deg)"
		    }
		})
    // For development only
    .addIndicators({name: "scene 1 (duration: 100)"})
    .addTo(controller);
// SCENA 1 - End


// SCENA 2 - Start
    const scene2 = new ScrollMagic.Scene({
      duration: 100,
      offset: 50,
      triggerHook: 'onLeave'
    })
    .setTween(
    	"#mission_moon-landing", 
    	3, 
    	{
    		css: {    		
		    	transform: "translate(-50%, -100%)"    	
		    }
		})
    // For development only
    .addIndicators({name: "scene 2 (duration: 100)"})
    .addTo(controller);
// SCENA 2 - End

// SCENA moon - Start
    const moon = new ScrollMagic.Scene({
      duration: 100,
      offset: 1000,
      triggerHook: 'onLeave'
    })
    .setTween(
        "#mission_moon-diffuse", 
        3, 
        {
            css: {          
                transform: "rotate(-90deg)"  
            }
        })
    // For development only
    .addIndicators({name: "moon (duration: 100)"})
    .addTo(controller);
// SCENA moon - End

// SCENA 3 - Start
    const scene3 = new ScrollMagic.Scene({
      duration: 200,
      offset: 1000,
      triggerHook: 'onLeave'
    })
    .setTween(
        "#mission_moon-landing", 
        3, 
        {
            css: {          
                transform: "translate(-50%, -100%) rotate(-120deg)"     
            }
        })
    // For development only
    .addIndicators({name: "scene 3 (duration: 100)"})
    .addTo(controller);
// SCENA 3 - End

// SCENA 4 - Start
    const scene4 = new ScrollMagic.Scene({
      duration: 100,
      offset: 1000,
      triggerHook: 'onLeave'
    })
    .setTween(
        "#mission_moon-farm", 
        3, 
        {
            css: {          
                transform: "translate(-50%, -100%)"     
            }
        })
    // For development only
    .addIndicators({name: "scene 4 (duration: 100)"})
    .addTo(controller);
// SCENA 4 - End
})();



