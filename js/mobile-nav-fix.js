/**
 * RU Organic Bazaar - Mobile Navigation Fix
 * Fixes mobile navigation issues and enhances mobile experience
 * Author: Professional Developer
 * Version: 1.0
 */

document.addEventListener("DOMContentLoaded", () => {
    // Fix for mobile navigation
    const hamburger = document.querySelector(".hamburger")
    const nav = document.querySelector(".nav")
    const body = document.body
  
    if (hamburger && nav) {
      // Remove any existing event listeners
      const newHamburger = hamburger.cloneNode(true)
      hamburger.parentNode.replaceChild(newHamburger, hamburger)
  
      // Add new event listener
      newHamburger.addEventListener("click", function () {
        this.classList.toggle("active")
        nav.classList.toggle("active")
  
        // Prevent body scrolling when menu is open
        if (nav.classList.contains("active")) {
          body.style.overflow = "hidden"
        } else {
          body.style.overflow = ""
        }
  
        // Animate hamburger
        const spans = this.querySelectorAll("span")
        if (this.classList.contains("active")) {
          spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
          spans[1].style.opacity = "0"
          spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
        } else {
          spans[0].style.transform = "none"
          spans[1].style.opacity = "1"
          spans[2].style.transform = "none"
        }
      })
    }
  
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll(".nav-link")
    if (navLinks.length > 0 && nav) {
      navLinks.forEach((link) => {
        // Remove any existing event listeners
        const newLink = link.cloneNode(true)
        link.parentNode.replaceChild(newLink, link)
  
        // Add new event listener
        newLink.addEventListener("click", () => {
          if (hamburger) {
            hamburger.classList.remove("active")
          }
          nav.classList.remove("active")
          body.style.overflow = ""
        })
      })
    }
  
    // Fix for iOS touch events
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      const touchElements = document.querySelectorAll(".btn, .product-card, .feature-card, .action-btn")
      touchElements.forEach((el) => {
        el.addEventListener("touchstart", () => {}, { passive: true })
      })
    }
  
    // Fix for viewport height on mobile browsers
    const setVhVariable = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
  
      // Apply to elements that need full height
      const fullHeightElements = document.querySelectorAll(".hero, .nav")
      fullHeightElements.forEach((el) => {
        if (el.classList.contains("hero")) {
          el.style.height = `calc(100 * var(--vh))`
        }
        if (el.classList.contains("nav")) {
          el.style.height = `calc(100 * var(--vh) - var(--header-height))`
        }
      })
    }
  
    setVhVariable()
    window.addEventListener("resize", setVhVariable)
    window.addEventListener("orientationchange", setVhVariable)
  })
  