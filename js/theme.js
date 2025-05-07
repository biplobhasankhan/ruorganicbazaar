/**
 * RU Organic Bazaar - Theme Switcher
 * Handles dark/light theme switching functionality
 * Author: Professional Developer
 * Version: 3.0
 */

// Theme Switcher
document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById("theme-switch")
  const htmlElement = document.documentElement

  // Check for saved theme preference or use default
  const savedTheme = localStorage.getItem("theme") || "light"

  // Apply the saved theme
  htmlElement.setAttribute("data-theme", savedTheme)

  // Update checkbox state based on saved theme
  if (themeSwitch) {
    themeSwitch.checked = savedTheme === "dark"

    // Listen for theme switch changes
    themeSwitch.addEventListener("change", function () {
      if (this.checked) {
        htmlElement.setAttribute("data-theme", "dark")
        localStorage.setItem("theme", "dark")

        // Add animation when switching to dark mode
        document.body.classList.add("theme-transition")
        setTimeout(() => {
          document.body.classList.remove("theme-transition")
        }, 1000)
      } else {
        htmlElement.setAttribute("data-theme", "light")
        localStorage.setItem("theme", "light")

        // Add animation when switching to light mode
        document.body.classList.add("theme-transition")
        setTimeout(() => {
          document.body.classList.remove("theme-transition")
        }, 1000)
      }

      // Update header background color based on theme
      const header = document.querySelector(".header")
      if (header) {
        header.style.backgroundColor = this.checked ? "rgba(30, 30, 30, 0.95)" : "rgba(255, 255, 255, 0.95)"
      }

      // Apply theme-specific adjustments
      applyThemeAdjustments()
    })
  }

  // Apply theme-specific adjustments
  const applyThemeAdjustments = () => {
    const isDark = htmlElement.getAttribute("data-theme") === "dark"

    // Adjust logo colors for dark mode
    const logoLeaf1 = document.querySelectorAll(".logo-leaf-1")
    const logoLeaf2 = document.querySelectorAll(".logo-leaf-2")
    const logoStem = document.querySelectorAll(".logo-stem")

    logoLeaf1.forEach((leaf) => {
      if (leaf) leaf.style.fill = isDark ? "#98ee99" : "#4caf50"
    })

    logoLeaf2.forEach((leaf) => {
      if (leaf) leaf.style.fill = isDark ? "#66bb6a" : "#087f23"
    })

    logoStem.forEach((stem) => {
      if (stem) stem.style.stroke = isDark ? "#66bb6a" : "#087f23"
    })

    // Adjust meta theme color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", isDark ? "#121212" : "#4caf50")
    }

    // Add animation to elements when theme changes
    const animatedElements = document.querySelectorAll(".feature-card, .product-card, .testimonial-content")
    animatedElements.forEach((el, index) => {
      el.style.transitionDelay = `${index * 0.05}s`
      el.classList.add("theme-changed")

      setTimeout(
        () => {
          el.classList.remove("theme-changed")
          el.style.transitionDelay = "0s"
        },
        500 + index * 50,
      )
    })
  }

  // Apply theme adjustments on load
  applyThemeAdjustments()

  // Check for user's preferred color scheme
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")

  // Set theme based on user's system preference if no saved preference
  if (!localStorage.getItem("theme")) {
    if (prefersDarkScheme.matches) {
      htmlElement.setAttribute("data-theme", "dark")
      if (themeSwitch) themeSwitch.checked = true
    } else {
      htmlElement.setAttribute("data-theme", "light")
      if (themeSwitch) themeSwitch.checked = false
    }
    applyThemeAdjustments()
  }

  // Listen for changes in system color scheme
  prefersDarkScheme.addEventListener("change", (e) => {
    // Only change if user hasn't manually set a preference
    if (!localStorage.getItem("theme")) {
      if (e.matches) {
        htmlElement.setAttribute("data-theme", "dark")
        if (themeSwitch) themeSwitch.checked = true
      } else {
        htmlElement.setAttribute("data-theme", "light")
        if (themeSwitch) themeSwitch.checked = false
      }
      applyThemeAdjustments()
    }
  })

  // Add theme toggle animation
  if (themeSwitch) {
    const switchLabel = document.querySelector(".switch-label")
    if (switchLabel) {
      switchLabel.addEventListener("mouseenter", () => {
        switchLabel.classList.add("pulse")
      })

      switchLabel.addEventListener("mouseleave", () => {
        switchLabel.classList.remove("pulse")
      })
    }
  }
})
