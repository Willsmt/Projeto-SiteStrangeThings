// scroll suave -> animações -> animações com rolagem
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 2,
  effects: true,
});

function animarPargina() {
  // animações hero
  gsap.from(".hero", {
    opacity: 0,
    duration: 1,
  });

  gsap.from("picture:nth-child(2)", {
    y: 200,
    duration: 1,
  });

  gsap.from("picture:nth-child(1)", {
    y: -200,
    duration: 1,
  });

  // animações cards

  gsap.from(".card", {
    opacity: 0,
    stagger: 0.3,
    filter: "blur(10px)",
    scrollTrigger: {
      trigger: ".card",
      markers: false,
      start: "0 80%",
      end: "50% 50%",
      scrub: true,
    },
  });

  // animações obrigado
  gsap.from(".obrigado-por-sejuntar ul li", {
    opacity: 0,
    stagger: 0.3,
    filter: "blur(10px)",
    scrollTrigger: {
      trigger: ".obrigado-por-sejuntar ul li",
      markers: false,
      scrub: true,
      start: "0% 100%",
      end: "100% 70%",
    },
  });

  // animações footer

  gsap.from("footer", {
    y: -400,
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      scrub: true,
      markers: false,
      invalidateOnRefresh: true,
      start: "0% 100%",
      end: "100% 100%",
    },
  });

  //letras surgindo -> pre loader

  const grupoSplit = document.querySelectorAll(".textoSplit");

  grupoSplit.forEach((textoUnicoSplit) => {
    const split = SplitText.create(textoUnicoSplit, {
      type: "lines,words,chars",
      mask: "lines",
    });

    gsap.from(split.chars, {
      y: 40,
      stagger: 0.03,
      duration: 0.3,
      opacity: 0,
      scrollTrigger: {
        trigger: textoUnicoSplit,
      },
    });
  });
}

// Animação Pre Loader - criar time line

const tl = gsap.timeline({
  onComplete() {
    animarPargina();
    gsap.to("#preLoader", {
      opacity: 0,
      display: "none",
    });
  },
});
tl.to("#preLoader path", {
  duration: 1,
  strokeDashoffset: 0,
});
tl.to("#preLoader path", {
  fill: "rgb(168, 19 , 19)",
  strokeDashoffset: 0,
});
