gsap.registerPlugin(ScrollTrigger, TextPlugin);

gsap.utils.toArray(".header").forEach(header => {
    gsap.fromTo(header,
    { scale: 0.8, opacity: 0.3 },
    { 
        scale: 1.5, 
        opacity: 1,
        scrollTrigger: {
            trigger: header,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            scroller: ".content"
        }
    }
    );
});

gsap.utils.toArray(".about-text").forEach(text => {
    gsap.from(text, {
        y: 40,
        opacity: 0,
        duration: 3,
        scrollTrigger: {
            trigger: "#about",       
            scroller: ".content",     
            start: "top 50%",         
            end: "top 0%",           
            scrub: true
    }
  });
});

const texts = ["UI/UX Design", "Web Development", "Digital Art"];
const skillsEl = document.querySelector("#skills");

const tl = gsap.timeline({ repeat: -1 });

texts.forEach(text => {
  tl.to(skillsEl, {
    duration: 1,
    opacity: 0,
    y: -10,
    onComplete: () => skillsEl.textContent = text
  })
  .to(skillsEl, { duration: 1, opacity: 1, y: 0 })
  .to({}, { duration: 1 }); 
});

gsap.utils.toArray(".project-card").forEach(header => {
    gsap.fromTo(header,
    { scale: 0.8, opacity: 0.3 },
    { 
        scale: 1, 
        opacity: 1,
        scrollTrigger: {
            trigger: header,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            scroller: ".content"
        }
    }
    );
});
