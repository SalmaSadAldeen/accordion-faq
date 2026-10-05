const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const currentItem = header.parentElement;

    const activeItem = document.querySelector(".accordion-item.active");
    if (activeItem && activeItem !== currentItem) {
      activeItem.classList.remove("active");
    }

    currentItem.classList.toggle("active");
  });
});
