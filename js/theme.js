// Theme Switcher
document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.getElementById("theme-switch")
    const htmlElement = document.documentElement
  
    // Check for saved theme preference or use default
    const savedTheme = localStorage.getItem("theme") || "light"
  
    // Apply the saved theme
    htmlElement.setAttribute("data-theme", savedTheme)
  
    // Update checkbox state based on saved theme
    themeSwitch.checked = savedTheme === "dark"
  
    // Listen for theme switch changes
    themeSwitch.addEventListener("change", function () {
      if (this.checked) {
        htmlElement.setAttribute("data-theme", "dark")
        localStorage.setItem("theme", "dark")
      } else {
        htmlElement.setAttribute("data-theme", "light")
        localStorage.setItem("theme", "light")
      }
  
      // Update header background color based on theme
      const header = document.querySelector(".header")
      if (header) {
        header.style.backgroundColor = this.checked ? "rgba(30, 30, 30, 0.95)" : "rgba(255, 255, 255, 0.95)"
      }
    })
  
    // Apply theme-specific adjustments
    const applyThemeAdjustments = () => {
      const isDark = htmlElement.getAttribute("data-theme") === "dark"
  
      // Adjust logo colors for dark mode
      const logoLeaf1 = document.querySelectorAll(".logo-leaf-1")
      const logoLeaf2 = document.querySelectorAll(".logo-leaf-2")
      const logoStem = document.querySelectorAll(".logo-stem")
  
      logoLeaf1.forEach((leaf) => {
        leaf.style.fill = isDark ? "#98ee99" : "#4caf50"
      })
  
      logoLeaf2.forEach((leaf) => {
        leaf.style.fill = isDark ? "#66bb6a" : "#087f23"
      })
  
      logoStem.forEach((stem) => {
        stem.style.stroke = isDark ? "#66bb6a" : "#087f23"
      })
    }
  
    // Apply theme adjustments on load and theme change
    applyThemeAdjustments()
    themeSwitch.addEventListener("change", applyThemeAdjustments)
  })
  