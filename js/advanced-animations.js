/**
 * RU Organic Bazaar - Advanced Animations
 * Provides enhanced animations and visual effects
 * Author: Professional Developer
 * Version: 1.0
 */

// Declare GSAP, ScrollTrigger, and particlesJS
let gsap, ScrollTrigger, particlesJS

document.addEventListener("DOMContentLoaded", () => {
  // Check if GSAP is available
  if (typeof gsap !== "undefined") {
    // Initialize GSAP animations
    initGSAPAnimations()
  } else {
    console.warn("GSAP is not defined. Advanced animations will not be available.")
    // Initialize fallback animations
    initFallbackAnimations()
  }

  // Initialize particle effects
  initParticleEffects()

  // Initialize scroll-triggered animations
  initScrollAnimations()

  // Initialize hover effects
  initHoverEffects()

  // Initialize text animations
  initTextAnimations()

  // Initialize 3D effects
  init3DEffects()

  // Initialize logo animations
  initLogoAnimations()
})

// GSAP Animations
function initGSAPAnimations() {
  // Register ScrollTrigger if available
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)

    // Hero section animations
    gsap.from(".hero-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    })

    gsap.from(".hero-subtitle", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.7,
    })

    gsap.from(".hero-description", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.9,
    })

    gsap.from(".hero-buttons", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1.1,
    })

    // Scroll-triggered animations
    gsap.from(".feature-card", {
      scrollTrigger: {
        trigger: ".features",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    })

    gsap.from(".about-image", {
      scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: ".about",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(".product-card", {
      scrollTrigger: {
        trigger: ".products",
        start: "top 70%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    })

    // Floating animation for fruit images
    gsap.to(".fruit-float", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.3,
    })

    // Button hover animation
    const buttons = document.querySelectorAll(".btn")
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          y: -5,
          duration: 0.3,
          ease: "power2.out",
        })
      })

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        })
      })
    })

    // Product card hover animation
    const productCards = document.querySelectorAll(".product-card")
    productCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
          duration: 0.3,
          ease: "power2.out",
        })

        const img = card.querySelector(".product-image img")
        if (img) {
          gsap.to(img, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          })
        }
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out",
        })

        const img = card.querySelector(".product-image img")
        if (img) {
          gsap.to(img, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          })
        }
      })
    })

    // Animate section titles
    const sectionTitles = document.querySelectorAll(".section-title")
    sectionTitles.forEach((title) => {
      ScrollTrigger.create({
        trigger: title,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(title, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        },
        once: true,
      })
    })

    // Animate section dividers
    const sectionDividers = document.querySelectorAll(".section-divider")
    sectionDividers.forEach((divider) => {
      ScrollTrigger.create({
        trigger: divider,
        start: "top 80%",
        onEnter: () => {
          const spans = divider.querySelectorAll("span")
          gsap.fromTo(spans[0], { width: 0 }, { width: "100%", duration: 1, ease: "power2.inOut" })
          gsap.fromTo(spans[1], { width: 0 }, { width: "100%", duration: 1, ease: "power2.inOut" })
        },
        once: true,
      })
    })
  }
}

// Fallback animations for when GSAP is not available
function initFallbackAnimations() {
  // Add basic CSS animations
  const heroElements = document.querySelectorAll(".hero-title, .hero-subtitle, .hero-description, .hero-buttons")
  heroElements.forEach((el, index) => {
    el.classList.add("animated", "fadeInUp")
    el.style.animationDelay = `${0.2 * (index + 1)}s`
  })

  // Add animation to floating elements
  const floatingElements = document.querySelectorAll(".fruit-float, .main-image, .seasonal-image img")
  floatingElements.forEach((el) => {
    el.classList.add("float")
  })

  // Add scroll animations
  const scrollElements = document.querySelectorAll(".feature-card, .product-card, .testimonial-content")
  scrollElements.forEach((el) => {
    el.classList.add("fade-in-scroll")
  })
}

// Particle effects for various sections
function initParticleEffects() {
  // Create canvas for particle effects if not using particles.js
  if (typeof particlesJS === "undefined") {
    const sections = [".hero", ".newsletter-content"]

    sections.forEach((sectionSelector) => {
      const section = document.querySelector(sectionSelector)
      if (section) {
        const canvas = document.createElement("canvas")
        canvas.classList.add("particles-canvas")
        canvas.style.position = "absolute"
        canvas.style.top = "0"
        canvas.style.left = "0"
        canvas.style.width = "100%"
        canvas.style.height = "100%"
        canvas.style.zIndex = "1"
        canvas.style.pointerEvents = "none"

        section.style.position = "relative"
        section.insertBefore(canvas, section.firstChild)

        // Initialize canvas particles
        initCanvasParticles(canvas)
      }
    })
  }
}

// Canvas particles implementation
function initCanvasParticles(canvas) {
  const ctx = canvas.getContext("2d")
  const particles = []

  // Resize canvas to match parent
  function resizeCanvas() {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }

  // Create particles
  function createParticles() {
    const particleCount = Math.floor(canvas.width / 20)

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        color: "rgba(76, 175, 80, 0.3)",
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      })
    }
  }

  // Draw particles
  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((particle) => {
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.fill()

      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY

      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX *= -1
      }

      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY *= -1
      }
    })

    requestAnimationFrame(drawParticles)
  }

  // Initialize
  resizeCanvas()
  createParticles()
  drawParticles()

  // Handle resize
  window.addEventListener("resize", () => {
    resizeCanvas()
    particles.length = 0
    createParticles()
  })
}

// Scroll-triggered animations
function initScrollAnimations() {
  if ("IntersectionObserver" in window) {
    const elements = document.querySelectorAll(
      ".feature-card, .product-card, .testimonial-content, .about-image, .about-text, .seasonal-banner, .contact-card, .contact-form",
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    elements.forEach((el) => {
      el.classList.add("fade-in-scroll")
      observer.observe(el)
    })
  }
}

// Hover effects
function initHoverEffects() {
  // Add hover effects to various elements
  const hoverElements = document.querySelectorAll(".feature-card, .social-link, .footer-links a, .footer-products a")

  hoverElements.forEach((el) => {
    el.classList.add("hover-effect")
  })

  // Add special hover effects to feature icons
  const featureIcons = document.querySelectorAll(".feature-icon")
  featureIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.classList.add("pulse")
    })

    icon.addEventListener("mouseleave", () => {
      setTimeout(() => {
        icon.classList.remove("pulse")
      }, 1000)
    })
  })
}

// Text animations
function initTextAnimations() {
  // Animate hero title with letter-by-letter reveal
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle && !heroTitle.classList.contains("animated")) {
    const text = heroTitle.textContent
    heroTitle.innerHTML = ""
    heroTitle.classList.add("animated")

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span")
      span.textContent = text[i]
      span.style.opacity = "0"
      span.style.transform = "translateY(20px)"
      span.style.display = "inline-block"
      span.style.transition = "opacity 0.3s ease, transform 0.3s ease"
      span.style.transitionDelay = `${0.03 * i}s`

      heroTitle.appendChild(span)

      setTimeout(() => {
        span.style.opacity = "1"
        span.style.transform = "translateY(0)"
      }, 100)
    }
  }

  // Animate section subtitles with typing effect
  const sectionSubtitles = document.querySelectorAll(".section-subtitle")
  sectionSubtitles.forEach((subtitle) => {
    subtitle.classList.add("typing-effect")
  })
}

// 3D effects
function init3DEffects() {
  // Add 3D tilt effect to product cards
  const cards = document.querySelectorAll(".product-card")

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      if (window.innerWidth < 768) return // Disable on mobile

      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 20
      const rotateY = (centerX - x) / 20

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)"
    })
  })
}

// Logo animations
function initLogoAnimations() {
  // Animate logo leaves
  const logoLeaves = document.querySelectorAll(".logo-leaf-1, .logo-leaf-2")

  logoLeaves.forEach((leaf, index) => {
    const direction = index === 0 ? 1 : -1
    const delay = index === 0 ? 0 : 0.3

    if (typeof gsap !== "undefined") {
      gsap.to(leaf, {
        rotation: 5 * direction,
        duration: 2 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: delay,
        transformOrigin: "center center",
      })
    } else {
      leaf.style.animation = `float ${2 + index * 0.5}s ease-in-out ${delay}s infinite alternate`
    }
  })
}
