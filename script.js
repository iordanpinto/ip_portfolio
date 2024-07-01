function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleReadMore() {
  const readMoreLink = document.querySelector('.read-more');
  const moreText = document.querySelector('.more-text');

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    readMoreLink.innerHTML = " read less";
  } else {
    moreText.style.display = "none";
    readMoreLink.innerHTML = "...read more";
  }
}
