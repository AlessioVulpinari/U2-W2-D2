const collapseElementList = document.querySelectorAll(".collapse")
const collapseList = [...collapseElementList].map(
  (collapseEl) => new bootstrap.Collapse(collapseEl)
)

const myModal = document.getElementById("modal")
const myInput = document.getElementById("btnContatti")

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus()
})
