window.onload = function () {
  const collapseElementList = document.querySelectorAll(".collapse")
  const collapseList = [...collapseElementList].map(
    (collapseEl) => new bootstrap.Collapse(collapseEl)
  )

  const myModal = document.getElementById("modal")
  const myInput = document.getElementById("btnContatti")

  myModal.addEventListener("shown.bs.modal", () => {
    myInput.focus()
  })

  const removeCards = () => {
    const cards = document.querySelectorAll(".card")

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i]
      card.remove()
    }
  }

  // removeCards()
}
