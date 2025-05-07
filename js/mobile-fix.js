// Mobile-specific enhancements and fixes
document.addEventListener("DOMContentLoaded", () => {
  // Fix for mobile navigation
  const hamburger = document.querySelector(".hamburger")
  const nav = document.querySelector(".nav")
  const navLinks = document.querySelectorAll(".nav-link")

  // Toggle mobile menu
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      nav.classList.toggle("active")

      // Animate hamburger
      const spans = hamburger.querySelectorAll("span")
      if (hamburger.classList.contains("active")) {
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
  if (navLinks.length > 0 && hamburger && nav) {
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        nav.classList.remove("active")

        // Reset hamburger
        const spans = hamburger.querySelectorAll("span")
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      })
    })
  }

  // Fix for touch events on mobile
  const addTouchSupport = () => {
    // Add touch support for product cards
    const productCards = document.querySelectorAll(".product-card")
    productCards.forEach((card) => {
      card.addEventListener(
        "touchstart",
        function () {
          this.classList.add("touch-active")
        },
        { passive: true },
      )

      card.addEventListener(
        "touchend",
        function () {
          setTimeout(() => {
            this.classList.remove("touch-active")
          }, 300)
        },
        { passive: true },
      )
    })

    // Add touch support for buttons
    const buttons = document.querySelectorAll(".btn")
    buttons.forEach((btn) => {
      btn.addEventListener(
        "touchstart",
        function () {
          this.classList.add("touch-active")
        },
        { passive: true },
      )

      btn.addEventListener(
        "touchend",
        function () {
          setTimeout(() => {
            this.classList.remove("touch-active")
          }, 300)
        },
        { passive: true },
      )
    })
  }

  addTouchSupport()

  // Fix for viewport height on mobile browsers
  const fixViewportHeight = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)

    // Apply to hero section
    const heroSection = document.querySelector(".hero")
    if (heroSection) {
      heroSection.style.height = `calc(100 * var(--vh))`
    }
  }

  fixViewportHeight()
  window.addEventListener("resize", fixViewportHeight)

  // Fix for mobile scrolling
  const fixMobileScroll = () => {
    // Prevent body scrolling when mobile menu is open
    const body = document.body
    const nav = document.querySelector(".nav")
    const hamburger = document.querySelector(".hamburger")

    if (hamburger && nav) {
      hamburger.addEventListener("click", () => {
        if (nav.classList.contains("active")) {
          body.style.overflow = "hidden"
        } else {
          body.style.overflow = ""
        }
      })
    }

    // Ensure smooth scrolling works on all browsers
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        if (targetId === "#") return

        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const headerHeight = document.querySelector(".header").offsetHeight
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })

          // Close mobile menu if open
          if (nav && nav.classList.contains("active")) {
            hamburger.click()
          }
        }
      })
    })
  }

  fixMobileScroll()

  // Fix for mobile double-tap issue
  const fixDoubleTapIssue = () => {
    const actionButtons = document.querySelectorAll(".action-btn, .btn")

    actionButtons.forEach((button) => {
      button.addEventListener(
        "touchend",
        function (e) {
          e.preventDefault()
          this.click()
        },
        { passive: false },
      )
    })
  }

  fixDoubleTapIssue()

  // Improve mobile performance
  const optimizeMobilePerformance = () => {
    // Detect if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile) {
      // Reduce animation complexity on mobile
      document.body.classList.add("mobile-device")

      // Disable parallax effects on mobile
      const parallaxElements = document.querySelectorAll(".parallax")
      parallaxElements.forEach((el) => {
        el.style.transform = "none"
        el.style.backgroundAttachment = "scroll"
      })

      // Optimize image loading on mobile
      const lazyImages = document.querySelectorAll("img[data-src]")
      lazyImages.forEach((img) => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target
              img.src = img.dataset.src
              observer.unobserve(img)
            }
          })
        })

        observer.observe(img)
      })
    }
  }

  optimizeMobilePerformance()

  // Fix for iOS Safari 100vh issue
  const fixIOSHeight = () => {
    // First check if it's iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream

    if (isIOS) {
      // Fix for hero section
      const heroSection = document.querySelector(".hero")
      if (heroSection) {
        heroSection.style.height = "calc(100 * var(--vh))"
      }

      // Fix for mobile menu
      const nav = document.querySelector(".nav")
      if (nav) {
        nav.style.height = "calc(100 * var(--vh) - var(--header-height))"
      }
    }
  }

  fixIOSHeight()

  // Fix for mobile form inputs
  const fixMobileInputs = () => {
    const inputs = document.querySelectorAll("input, textarea")

    inputs.forEach((input) => {
      // Prevent zoom on focus in iOS
      if (input.type !== "checkbox" && input.type !== "radio") {
        input.style.fontSize = "16px"
      }

      // Add better touch area
      input.addEventListener(
        "touchstart",
        function () {
          this.classList.add("input-focus")
        },
        { passive: true },
      )

      input.addEventListener(
        "touchend",
        function () {
          setTimeout(() => {
            this.classList.remove("input-focus")
          }, 300)
        },
        { passive: true },
      )
    })
  }

  fixMobileInputs()
})
