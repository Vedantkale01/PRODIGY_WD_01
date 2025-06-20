//  navbar on scroll
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    nav.style.boxShadow = window.scrollY > 50
      ? "0 4px 10px rgba(0, 0, 0, 0.1)"
      : "none";
  });
  
