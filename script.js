// toggles display of items
function toggleDisplay(elem) {
    if (getComputedStyle(elem).display === "none") {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  }

  function toggleResumeContent(e) {
    const resumeSection = e.currentTarget;
    const resumeContent = resumeSection.nextElementSibling;
    toggleDisplay(resumeContent);
    const chevron = resumeSection.querySelector('.chevron');
    chevron.classList.toggle('fa-chevron-down');
    chevron.classList.toggle('fa-chevron-up');
  }

  // this swapts the page to darkmode
  function makeDarkmode(e) {
    lightmode.disabled = true;
    darkmode.disabled = false;
  }
  
  // this swaps the page to lightmode
  function makeLightmode(e) {
    lightmode.disabled = false;
    darkmode.disabled = true;
  }

  //these are supposed to change the font size of text in the document but doesn't and I don't know why.
  function makeTextSmall(e) {
    currentFontSize = ".5rem";
  }

  function makeTextMedium(e) {
    currentFontSize = "80px";
  }

  function makeTextLarge(e) {
    currentFontSizefontSize = "2rem";
  }

  //startup event that creates consts and variable and ads event listeners
  window.addEventListener('load', function(e) {
    const resume = document.querySelectorAll('.resumeSection');
    const lightmode = document.getElementById('lightmode');
    const darkmode = document.getElementById('darkmode');
    const selectDark = document.getElementById('selectDark');
    const selectLight = document.getElementById('selectLight');
    
    const smallOption = document.getElementById('smallOption');
    const mediumOption = document.getElementById('mediumOption');
    const largeOption = document.getElementById('largeOption');
    const documentElement = document.documentElement;
    
    const currentFontSize = parseFloat(this.getComputedStyle(documentElement).fontSize);

    selectDark.addEventListener('click', makeDarkmode);
    selectLight.addEventListener('click', makeLightmode);
    smallOption.addEventListener('click', makeTextSmall);
    mediumOption.addEventListener('click', makeTextMedium);
    largeOption.addEventListener('click', makeTextLarge);
    
    for (resumeSection of resume) {
      resumeSection.addEventListener('click', toggleResumeContent);
    }
  });