function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openProject(evt, projectName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("active");
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }

  let currentTab = document.getElementById(projectName);
  currentTab.classList.add("active");

  evt.currentTarget.classList.add("active");
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.tablinks').click();
});
