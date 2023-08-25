const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

let timeout;

function circleSkew() {
  // Defining default scale value for x and y
  let xscale = 1;
  let yscale = 1;

  // Previous value of x and y
  let xprev = 0;
  let yprev = 0;

  window.addEventListener("mousemove", (e) => {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, e.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, e.clientY - yprev);

    xprev = e.clientX;
    yprev = e.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#circle"
      ).style.transform = `translate(${e.x}px,${e.y}px) scale(1,1)`;
    }, 100);
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", (e) => {
    document.querySelector(
      "#circle"
    ).style.transform = `translate(${e.x}px,${e.y}px) scale(${xscale},${yscale})`;
  });
}

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1.5,
  });

  tl.to(".bounding-elem", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 1.5,
    stagger: 0.2,
    delay: -1,
  });

  tl.to(".bounding-elem-2", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 1.5,
    stagger: 0.2,
    delay: -1,
  });

  tl.from("#hero-footer", {
    y: -10,
    ease: Expo.easeInOut,
    duration: 1.5,
    opacity: 0,
    delay: -1,
  });
}

function ImageSection() {
  document.querySelectorAll(".elem").forEach((elem) => {
    let rotate = 0;
    let diffRotate = 0;

    elem.addEventListener("mouseleave", (e) => {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });

      gsap.to(elem.querySelector("span"), {
        color: "#a3a3a3",
        ease: Power3,
        x: 0,
      });

      gsap.to(elem.querySelector("p"), {
        color: "#a3a3a3",
        ease: Power3,
      });
    });

    elem.addEventListener("mousemove", (e) => {
      let diff = e.clientY - elem.getBoundingClientRect().top;
      diffRotate = e.clientX - rotate;
      rotate = e.clientX;

      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: e.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffRotate * 0.5),
      });

      gsap.to(elem.querySelector("span"), {
        color: "#292929",
        ease: Power3,
        x: 40,
      });

      gsap.to(elem.querySelector("p"), {
        color: "#292929",
        ease: Power3,
      });
    });
  });
}

setInterval(() => {
  const time = new Date();
  const date = time.toLocaleString("en-us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  document.querySelector("#date").innerHTML = date + " EST";
}, 1000);

const scrollDown = document.querySelectorAll(".scrollDown");

scrollDown.forEach((button) => {
  button.addEventListener("click", () => {
    
  })
})

circleSkew();
firstPageAnim();
ImageSection();

