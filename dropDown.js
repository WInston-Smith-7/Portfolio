function toggleDisplay(elem) {
    if (getComputedStyle(elem).display === "none") {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  }

  function toggleAnswer(e) {
    const contentSection = e.currentTarget;
    const content = contentSection.nextElementSibling;
    toggleDisplay(content);
    const chevron = contentSection  .querySelector('.chevron');
    chevron.classList.toggle('fa-chevron-down');
    chevron.classList.toggle('fa-chevron-up');
  }

  window.addEventListener('load', function(e) {
    const dropdown = document.querySelectorAll('.dropdown');
    for (contentSection of dropdown) {
      contentSection.addEventListener('click', toggleAnswer);
    }
  });