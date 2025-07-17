document.addEventListener("DOMContentLoaded", function () {
  const calendarImg = document.querySelector(".calendar-img");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        calendarImg.classList.remove("animate__fadeOutDown");
        calendarImg.classList.add("animate__animated", "animate__fadeInUp", "visible");
      } else {
        calendarImg.classList.remove("animate__fadeInUp");
        calendarImg.classList.add("animate__animated", "animate__fadeOutDown");
        calendarImg.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.5
  });

  if (calendarImg) {
    observer.observe(calendarImg);
  }
});
