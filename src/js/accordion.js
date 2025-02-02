const accordionHeaders = document.querySelectorAll(".accordion__header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordion = header.parentElement;
    accordion.classList.toggle("accordion__expanded");
  });
});
