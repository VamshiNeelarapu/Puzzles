document.querySelectorAll(".image-container").forEach((container) => {
  container.addEventListener("click", function () {
    if (!this.classList.contains("clicked")) {
      this.classList.add("clicked");
      const text = document.createElement("div");
      text.className = "text";
      text.innerText = this.getAttribute("data-text");
      this.appendChild(text);
    }
  });
});
