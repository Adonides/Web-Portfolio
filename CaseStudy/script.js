const timeLine = gsap.timeline({defaults: {ease: "power1.out"}})

timeLine.to('.text', {y: "0%", duration: 1, stagger: 0.25}) 
/*stagger= textos aparecem um após o outro*/
timeLine.to(".slider", {y:"-100%", duration: 1.5, delay: 1})
timeLine.to(".intro", {y:"-100%", duration: 1}, "-=1") /*1sec faster*/
timeLine.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1.5});
timeLine.fromTo("h1", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");