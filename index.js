const experienceCount = 15;
const integrationsCount = 1000;
const projectsCount = 5000;

// Function to animate the counting
function animateCount(element, target, duration) {
  let start = 0;
  const step = target / duration;
  const interval = setInterval(() => {
    start += step;
    element.innerText = Math.floor(start) + "+";
    if (start >= target) {
      clearInterval(interval);
    }
  }, 1);
}

// Animate the counts on page load
document.addEventListener("DOMContentLoaded", () => {
  animateCount(
    document.getElementById("experienceCount"),
    experienceCount,
    2000
  );
  animateCount(
    document.getElementById("integrationsCount"),
    integrationsCount,
    2000
  );
  animateCount(document.getElementById("projectsCount"), projectsCount, 2000);
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    animateOnScroll("hero-section");
  });

  // Initial animation check
  animateOnScroll("hero-section");
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    animateOnScroll("why-onebee-section");
  });

  // Initial animation check
  animateOnScroll("why-onebee-section");
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    animateOnScroll("vmv-section");
  });

  // Initial animation check
  animateOnScroll("vmv-section");
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    animateOnScroll("about-section");
  });

  // Initial animation check
  animateOnScroll("about-section");
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    animateOnScroll("our-clients-section");
  });

  // Initial animation check
  animateOnScroll("our-clients-section");
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    animateOnScroll("products-section");
  });

  // Initial animation check
  animateOnScroll("products-section");
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    animateOnScroll("manual-download-section");
  });

  // Initial animation check
  animateOnScroll("manual-download-section");
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    animateOnScroll("our-team-section");
  });

  // Initial animation check
  animateOnScroll("our-team-section");
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    animateOnScroll("blog-section");
  });

  // Initial animation check
  animateOnScroll("blog-section");
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    animateOnScroll("portfolio-gallery");
  });

  // Initial animation check
  animateOnScroll("portfolio-gallery");
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    animateOnScroll("footer-section");
  });

  // Initial animation check
  animateOnScroll("footer-section");
});
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    animateOnScroll("blog-section");
  });

  // Initial animation check
  animateOnScroll("blog-section");
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    animateOnScroll("blog-section");
  });

  // Initial animation check
  animateOnScroll("blog-section");
});

function animateOnScroll(className) {
  const elements = document.querySelectorAll("." + className);

  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
