/**
 * RU Organic Bazaar - Main JavaScript
 * Handles all core functionality for the website
 * Author: Professional Developer
 * Version: 3.0
 */

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set viewport height variable for mobile browsers
  const setVhVariable = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }

  // Set on initial load
  setVhVariable()

  // Update on resize
  window.addEventListener("resize", setVhVariable)

  // Initialize AOS (Animate On Scroll)
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: false,
      offset: 100,
      delay: 100,
      disable: window.innerWidth < 768 ? "phone" : false,
    })
  } else {
    console.warn("AOS is not defined. Make sure to include the AOS library.")
  }

  // Initialize Swiper for testimonials
  if (typeof Swiper !== "undefined") {
    const testimonialSwiper = new Swiper(".testimonial-slider", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    })
  } else {
    console.warn("Swiper is not defined. Make sure to include the Swiper library.")
  }

  // Initialize Particles.js for hero section
  if (typeof particlesJS !== "undefined") {
    if (document.getElementById("particles-js")) {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: window.innerWidth < 768 ? 30 : 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#4caf50",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#4caf50",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      })
    }
  } else {
    console.warn("particlesJS is not defined. Make sure to include the particles.js library.")
  }

  // Preloader with advanced animation
  const preloader = document.querySelector(".preloader")
  const loadingProgress = document.querySelector(".loading-progress")

  if (preloader && loadingProgress) {
    let progress = 0
    const interval = setInterval(() => {
      progress += 5
      loadingProgress.style.width = `${progress}%`

      if (progress >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          preloader.style.opacity = "0"
          setTimeout(() => {
            preloader.style.display = "none"
            // Trigger entrance animations after preloader
            document.querySelectorAll(".hero-content > *").forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animated", "fadeInUp")
              }, index * 200)
            })

            // Add animation to floating elements
            document.querySelectorAll(".fruit-float").forEach((el, index) => {
              el.style.animationDelay = `${index * 0.3}s`
            })
          }, 500)
        }, 500)
      }
    }, 50)
  }

  // Mobile Navigation Toggle with improved animation
  const hamburger = document.querySelector(".hamburger")
  const nav = document.querySelector(".nav")
  const body = document.body

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      nav.classList.toggle("active")

      // Prevent body scrolling when menu is open
      if (nav.classList.contains("active")) {
        body.style.overflow = "hidden"
      } else {
        body.style.overflow = ""
      }

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
  const navLinks = document.querySelectorAll(".nav-link")
  if (navLinks.length > 0 && hamburger && nav) {
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        nav.classList.remove("active")
        body.style.overflow = ""

        // Reset hamburger
        const spans = hamburger.querySelectorAll("span")
        spans[0].style.transform = "none"
        spans[1].style.opacity = "1"
        spans[2].style.transform = "none"
      })
    })
  }

  // Sticky Header with enhanced effects
  const header = document.querySelector(".header")
  if (header) {
    const headerHeight = header.offsetHeight

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        header.classList.add("scrolled")
        header.style.backgroundColor =
          document.documentElement.getAttribute("data-theme") === "dark"
            ? "rgba(30, 30, 30, 0.95)"
            : "rgba(255, 255, 255, 0.95)"
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
        header.style.height = "60px"
      } else {
        header.classList.remove("scrolled")
        header.style.backgroundColor =
          document.documentElement.getAttribute("data-theme") === "dark"
            ? "rgba(30, 30, 30, 0.95)"
            : "rgba(255, 255, 255, 0.95)"
        header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
        header.style.height = `${headerHeight}px`
      }
    })
  }

  // Active Navigation Link on Scroll with smooth transition
  const sections = document.querySelectorAll("section")
  if (sections.length > 0 && header) {
    const headerHeight = header.offsetHeight

    window.addEventListener("scroll", () => {
      let current = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight

        if (window.scrollY >= sectionTop - headerHeight - 100) {
          current = section.getAttribute("id")
        }
      })

      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active")
        }
      })
    })
  }

  // Scroll to Top Button with enhanced animation
  const scrollTopBtn = document.querySelector(".scroll-top")
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        scrollTopBtn.classList.add("active")
      } else {
        scrollTopBtn.classList.remove("active")
      }
    })

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })

      // Add bounce animation when clicked
      scrollTopBtn.classList.add("bounce")
      setTimeout(() => {
        scrollTopBtn.classList.remove("bounce")
      }, 2000)
    })
  }

  // Smooth scrolling for all anchor links with offset adjustment
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#") return

      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })

        // Close mobile menu if open
        if (nav && nav.classList.contains("active") && hamburger) {
          hamburger.click()
        }
      }
    })
  })

  // FAQ Accordion with smooth animation
  const faqItems = document.querySelectorAll(".faq-item")
  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")

      question.addEventListener("click", () => {
        // Close all other FAQ items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active")
          }
        })

        // Toggle current FAQ item
        item.classList.toggle("active")

        // Add shake animation when opening
        if (item.classList.contains("active")) {
          const toggle = item.querySelector(".faq-toggle")
          toggle.classList.add("shake")
          setTimeout(() => {
            toggle.classList.remove("shake")
          }, 500)
        }
      })
    })
  }

  // Product Filter with enhanced animations
  const filterBtns = document.querySelectorAll(".filter-btn")
  const productCards = document.querySelectorAll(".product-card")

  if (filterBtns.length > 0 && productCards.length > 0) {
    // Show all products by default
    productCards.forEach((card) => {
      card.style.display = "block"
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    })

    // Make "All Fruits" button active by default
    const allFruitsBtn = document.querySelector('.filter-btn[data-filter="all"]')
    if (allFruitsBtn) {
      allFruitsBtn.classList.add("active")
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((btn) => {
          btn.classList.remove("active")
        })

        // Add active class to clicked button
        btn.classList.add("active")

        // Get filter value
        const filter = btn.getAttribute("data-filter")

        // Filter products with enhanced animation
        productCards.forEach((card) => {
          if (filter === "all") {
            card.style.display = "block"
            setTimeout(() => {
              card.style.opacity = "1"
              card.style.transform = "translateY(0)"
            }, 100)
          } else if (card.getAttribute("data-category") === filter) {
            card.style.display = "block"
            setTimeout(() => {
              card.style.opacity = "1"
              card.style.transform = "translateY(0)"
            }, 100)
          } else {
            card.style.opacity = "0"
            card.style.transform = "translateY(20px)"
            setTimeout(() => {
              card.style.display = "none"
            }, 300)
          }
        })
      })
    })
  }

  // Product Quick View Modal with enhanced animations
  const modal = document.getElementById("product-modal")
  const modalClose = document.querySelector(".modal-close")
  const quickViewBtns = document.querySelectorAll(".product-quick-view")

  // Product data (in a real project, this would come from a database)
  const productData = {
    jackfruit: {
      title: "Organic Jackfruit",
      price: "৳ 350",
      unit: "/kg",
      rating: "(4.5)",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Our jackfruits are hand-picked at the perfect ripeness to ensure maximum flavor and nutritional value. These large, exotic fruits are known for their sweet, tropical taste and versatility in cooking.",
      benefits: [
        "Rich in vitamins A, C, and complex B vitamins",
        "High in dietary fiber and potassium",
        "Contains antioxidants that help fight inflammation",
        "Excellent meat substitute for vegetarian dishes",
      ],
    },
    mango: {
      title: "Premium Organic Mango",
      price: "৳ 200",
      unit: "/kg",
      rating: "(5.0)",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Our mangoes are grown in the fertile soils of Bangladesh, harvested at peak ripeness for the perfect balance of sweetness and tanginess. Each mango is carefully selected to ensure premium quality.",
      benefits: [
        "Excellent source of vitamins A and C",
        "Contains digestive enzymes that aid digestion",
        "Rich in antioxidants for immune support",
        "Natural source of dietary fiber",
      ],
    },
    papaya: {
      title: "Fresh Organic Papaya",
      price: "৳ 120",
      unit: "/kg",
      rating: "(4.0)",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Our papayas are naturally grown without chemicals or pesticides. They're harvested when perfectly ripe, ensuring a sweet taste and soft texture that's perfect for both eating fresh and cooking.",
      benefits: [
        "Contains papain, an enzyme that aids digestion",
        "Rich in antioxidants like carotenes and flavonoids",
        "Excellent source of vitamin C and folate",
        "Helps improve skin health and appearance",
      ],
    },
    banana: {
      title: "Organic Bananas",
      price: "৳ 80",
      unit: "/dozen",
      rating: "(4.5)",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Our organic bananas are naturally ripened without artificial chemicals. They're harvested at the perfect stage to ensure they reach you at optimal ripeness, with the perfect balance of sweetness and firmness.",
      benefits: [
        "Excellent source of potassium for heart health",
        "Contains vitamin B6 for brain function",
        "Rich in fiber for digestive health",
        "Natural energy booster for pre or post-workout",
      ],
    },
    guava: {
      title: "Fresh Organic Guava",
      price: "৳ 150",
      unit: "/kg",
      rating: "(3.5)",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Our guavas are grown using organic farming practices, ensuring they're free from harmful chemicals. They're harvested when perfectly ripe, offering a crisp texture and refreshing taste.",
      benefits: [
        "Extremely high in vitamin C - more than oranges",
        "Rich in dietary fiber for digestive health",
        "Contains lycopene, a powerful antioxidant",
        "Low in calories and high in nutrients",
      ],
    },
    pineapple: {
      title: "Organic Pineapple",
      price: "৳ 180",
      unit: "/piece",
      rating: "(4.0)",
      image: "/placeholder.svg?height=400&width=400",
      description:
        "Our pineapples are grown organically and harvested at peak ripeness for maximum sweetness and juiciness. Each pineapple is carefully selected to ensure the perfect balance of sweet and tangy flavors.",
      benefits: [
        "Rich in bromelain, an enzyme with anti-inflammatory properties",
        "Excellent source of vitamin C and manganese",
        "Contains antioxidants that fight oxidative stress",
        "Aids digestion and boosts immunity",
      ],
    },
  }

  if (modal && modalClose && quickViewBtns.length > 0) {
    // Open modal with product data and enhanced animations
    quickViewBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const productId = btn.getAttribute("data-product")
        const product = productData[productId]

        if (!product) return

        // Set modal content
        document.getElementById("modal-product-title").textContent = product.title
        document.getElementById("modal-product-price").textContent = product.price
        document.getElementById("modal-product-unit").textContent = product.unit
        document.getElementById("modal-product-rating").textContent = product.rating
        document.getElementById("modal-product-description").textContent = product.description
        document.getElementById("modal-product-image").src = product.image

        // Set benefits with staggered animation
        const benefitsList = document.getElementById("modal-product-benefits")
        benefitsList.innerHTML = ""
        product.benefits.forEach((benefit, index) => {
          const li = document.createElement("li")
          li.innerHTML = `<i class="fas fa-check"></i> ${benefit}`
          li.style.animationDelay = `${0.1 * (index + 1)}s`
          benefitsList.appendChild(li)
        })

        // Show modal with animation
        modal.style.display = "flex"
        setTimeout(() => {
          modal.classList.add("active")
          document.querySelector(".modal-content").classList.add("active")

          // Prevent body scrolling when modal is open
          document.body.style.overflow = "hidden"
        }, 10)
      })
    })

    // Close modal with animation
    modalClose.addEventListener("click", () => {
      closeModal()
    })

    // Close modal when clicking outside
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal()
      }
    })

    // Close modal with escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.style.display === "flex") {
        closeModal()
      }
    })

    function closeModal() {
      modal.classList.remove("active")
      document.querySelector(".modal-content").classList.remove("active")
      setTimeout(() => {
        modal.style.display = "none"

        // Re-enable body scrolling
        document.body.style.overflow = ""
      }, 300)
    }
  }

  // Animate counter numbers in About section with improved animation
  const animateCounter = (el) => {
    const target = Number.parseInt(el.getAttribute("data-count"))
    const duration = 2000 // 2 seconds
    const step = target / (duration / 16) // 16ms per frame (60fps)
    let current = 0

    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        clearInterval(timer)
        current = target
      }
      el.textContent = Math.floor(current)
    }, 16)
  }

  // Intersection Observer for counter animation
  if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = document.querySelectorAll(".stat-number")
            counters.forEach((counter) => {
              animateCounter(counter)
            })
            counterObserver.disconnect()
          }
        })
      },
      { threshold: 0.5 },
    )

    const statsSection = document.querySelector(".about-stats")
    if (statsSection) {
      counterObserver.observe(statsSection)
    }
  }

  // Form Submission with validation and animation
  const contactForm = document.querySelector(".contact-form")
  const newsletterForm = document.querySelector(".newsletter-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const name = contactForm.querySelector("#name").value
      const email = contactForm.querySelector("#email").value
      const phone = contactForm.querySelector("#phone").value
      const subject = contactForm.querySelector("#subject").value
      const message = contactForm.querySelector("#message").value

      // Simple validation
      if (!name || !email || !message) {
        alert("Please fill in all required fields.")
        return
      }

      // Here you would normally send the data to a server
      // For this static site, we'll just show a success message
      alert("Thank you for your message! We will get back to you soon.")

      // Reset form
      contactForm.reset()
    })
  }

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get email
      const email = newsletterForm.querySelector("input[type='email']").value

      // Simple validation
      if (!email) {
        alert("Please enter your email address.")
        return
      }

      // Here you would normally send the data to a server
      // For this static site, we'll just show a success message
      alert("Thank you for subscribing to our newsletter!")

      // Reset form
      newsletterForm.reset()
    })
  }

  // Search Functionality with enhanced animation
  const searchBtn = document.querySelector(".search-btn")
  const searchInput = document.querySelector(".search-input")

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault()
      searchInput.classList.toggle("active")
      if (searchInput.classList.contains("active")) {
        searchInput.focus()
        searchBtn.classList.add("pulse")
        setTimeout(() => {
          searchBtn.classList.remove("pulse")
        }, 1000)
      } else {
        searchInput.blur()
      }
    })

    // Close search when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-container") && searchInput.classList.contains("active")) {
        searchInput.classList.remove("active")
      }
    })

    searchInput.addEventListener("keyup", (e) => {
      const searchTerm = e.target.value.toLowerCase()
      const productCards = document.querySelectorAll(".product-card")

      productCards.forEach((card) => {
        const title = card.querySelector("h3").textContent.toLowerCase()
        const description = card.querySelector("p").textContent.toLowerCase()

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          card.style.display = "block"
          setTimeout(() => {
            card.style.opacity = "1"
            card.style.transform = "translateY(0)"
          }, 100)
        } else {
          card.style.opacity = "0"
          card.style.transform = "translateY(20px)"
          setTimeout(() => {
            card.style.display = "none"
          }, 300)
        }
      })
    })
  }

  // Quantity Selector with improved interaction
  const quantityInput = document.querySelector(".quantity-input")
  const minusBtn = document.querySelector(".minus-btn")
  const plusBtn = document.querySelector(".plus-btn")

  if (quantityInput && minusBtn && plusBtn) {
    minusBtn.addEventListener("click", () => {
      let value = Number.parseInt(quantityInput.value)
      if (value > 1) {
        value--
        quantityInput.value = value
        minusBtn.classList.add("pulse")
        setTimeout(() => {
          minusBtn.classList.remove("pulse")
        }, 500)
      }
    })

    plusBtn.addEventListener("click", () => {
      let value = Number.parseInt(quantityInput.value)
      if (value < 99) {
        value++
        quantityInput.value = value
        plusBtn.classList.add("pulse")
        setTimeout(() => {
          plusBtn.classList.remove("pulse")
        }, 500)
      }
    })

    quantityInput.addEventListener("change", () => {
      const value = Number.parseInt(quantityInput.value)
      if (isNaN(value) || value < 1) {
        quantityInput.value = 1
      } else if (value > 99) {
        quantityInput.value = 99
      }
    })
  }

  // Add touch support for mobile devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  if (isMobile) {
    document.body.classList.add("mobile-device")

    // Add touch support for buttons and cards
    const touchElements = document.querySelectorAll(".btn, .product-card, .feature-card, .action-btn")
    touchElements.forEach((el) => {
      el.addEventListener(
        "touchstart",
        function () {
          this.classList.add("touch-active")
        },
        { passive: true },
      )

      el.addEventListener(
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

  // Add parallax effect to hero section
  const heroSection = document.querySelector(".hero")
  if (heroSection && !isMobile) {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY
      const heroImage = document.querySelector(".hero-image")
      if (heroImage) {
        heroImage.style.transform = `translateY(${scrollPosition * 0.1}px)`
      }
    })
  }

  // Add hover effects for feature cards
  const featureCards = document.querySelectorAll(".feature-card")
  if (featureCards.length > 0 && !isMobile) {
    featureCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)"
        card.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.15)"

        const icon = card.querySelector(".feature-icon")
        if (icon) {
          icon.style.transform = "rotateY(180deg)"
        }
      })

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)"
        card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"

        const icon = card.querySelector(".feature-icon")
        if (icon) {
          icon.style.transform = "rotateY(0)"
        }
      })
    })
  }

  // Add 3D tilt effect to product cards
  const productCardsList = document.querySelectorAll(".product-card")
  if (productCardsList.length > 0 && !isMobile) {
    productCardsList.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const tiltX = (y - centerY) / 20
        const tiltY = (centerX - x) / 20

        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-5px)`
      })

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)"
      })
    })
  }
})
