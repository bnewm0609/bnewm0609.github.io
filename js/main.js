// Collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].idx = coll.length - i - 1;
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
      if (this.classList.contains("active")) {
          this.textContent = " – " // " - " // "—"
      } else {
          this.textContent = "tldr"
      }
    var content = document.getElementById(`project-description-${this.idx}`);
    console.log(`project-description-${this.idx}`);
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
