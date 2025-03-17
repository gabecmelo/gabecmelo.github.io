// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Print Resume functionality
  const printResumeBtn = document.querySelector(".header-content .btn-primary")
  if (printResumeBtn) {
    printResumeBtn.addEventListener("click", () => {
      window.print()
    })
  }

  // Download CV functionality
  const downloadCVBtn = document.querySelector(".about-card .btn-outline-danger")
  if (downloadCVBtn) {
    downloadCVBtn.addEventListener("click", () => {
      // Create a link to download the resume
      const link = document.createElement("a")
      link.href = "assets/files/gabriel-melo-resume-2025.pdf"
      link.download = "Gabriel_Melo_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
  }

  // Hire Me functionality
  const hireMeBtn = document.querySelector(".section.bg-dark .btn.bg-primary")
  if (hireMeBtn) {
    hireMeBtn.addEventListener("click", () => {
      window.location.href =
        "mailto:contatogabemelo@gmail.com?subject=Job Opportunity&body=Hello Gabriel, I would like to discuss a job opportunity with you."
    })
  }
})

