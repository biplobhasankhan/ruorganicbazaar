// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Check if GSAP is loaded
  if (typeof gsap !== "undefined") {
    // Register ScrollTrigger plugin if available
    if (typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    // Preloader Logo Animation
    gsap.to(".custom-logo .logo-leaf-1", {
      rotation: 5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })

    gsap.to(".custom-logo .logo-leaf-2", {
      rotation: -5,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      delay: 0.3,
    })

    // Hero Section Text Animations
    gsap.from(".hero-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    })

    // Text reveal animation for hero title
    const heroTitle = document.querySelector(".hero-title")
    if (heroTitle) {
      const text = heroTitle.innerHTML
      heroTitle.innerHTML = ""

      for (let i = 0; i < text.length; i++) {
        if (text[i] === "<") {
          // Find the closing tag
          const endIndex = text.indexOf(">", i)
          if (endIndex !== -1) {
            heroTitle.innerHTML += text.substring(i, endIndex + 1)
            i = endIndex
          }
        } else {
          setTimeout(() => {
            heroTitle.innerHTML += text[i]
          }, 50 * i)
        }
      }
    }

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

    gsap.from(".hero-image .main-image", {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.5,
    })

    gsap.from(".fruit-float", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      delay: 1,
    })

    // Scroll Animations with ScrollTrigger
    if (typeof ScrollTrigger !== "undefined") {
      // Features Section Animation
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

      // About Section Animation
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

      // Seasonal Banner Animation
      gsap.from(".seasonal-banner", {
        scrollTrigger: {
          trigger: ".seasonal",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      // Products Section Animation
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

      // Testimonials Section Animation
      gsap.from(".testimonial-item", {
        scrollTrigger: {
          trigger: ".testimonials",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })

      // Newsletter Section Animation
      gsap.from(".newsletter-content", {
        scrollTrigger: {
          trigger: ".newsletter",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      // Contact Section Animation
      gsap.from(".contact-card", {
        scrollTrigger: {
          trigger: ".contact",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: ".contact",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      // FAQ Section Animation
      gsap.from(".faq-image", {
        scrollTrigger: {
          trigger: ".faq",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: ".faq",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })
    }

    // Micro-animations for interactive elements

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
        gsap.to(img, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        })
      })

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out",
        })

        const img = card.querySelector(".product-image img")
        gsap.to(img, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        })
      })
    })

    // WhatsApp float button animation
    const whatsappFloat = document.querySelector(".whatsapp-float")
    if (whatsappFloat) {
      gsap.to(whatsappFloat, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    }

    // Scroll to top button animation
    const scrollTopBtn = document.querySelector(".scroll-top")
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener("mouseenter", () => {
        gsap.to(scrollTopBtn.querySelector("i"), {
          y: -3,
          duration: 0.3,
          repeat: 1,
          yoyo: true,
          ease: "power2.out",
        })
      })
    }

    // Feature icon animation
    const featureIcons = document.querySelectorAll(".feature-icon")
    featureIcons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          rotation: 360,
          duration: 0.8,
          ease: "power2.out",
        })
      })
    })

    // Add text typing animation to section titles
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
  }
})
