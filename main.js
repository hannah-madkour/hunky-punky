/* لما نضغط على أي عنصر، يبقى Active */
const links = document.querySelectorAll("#menu a");
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    link.scrollIntoView({ behavior: "smooth", inline: "center" });
  });
});
