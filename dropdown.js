document.addEventListener("DOMContentLoaded", () => {
  const expandButtons = document.querySelectorAll(".expand");

  expandButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const sublist = document.getElementById(targetId);
      if (sublist) {
        const isVisible = sublist.style.display === "block";
        sublist.style.display = isVisible ? "none" : "block";
      }
    });
  });
});
