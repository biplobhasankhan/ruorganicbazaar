// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate On Scroll)
  // Declare AOS if it's not already available globally
  if (typeof AOS === "undefined") {
    console.warn("AOS is not defined. Make sure to include the AOS library.")
  } else {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: false,
      offset: 100,
      delay: 100,
    })
  }

  // Initialize Swiper for testimonials
  // Declare Swiper if it's not already available globally
  if (typeof Swiper === "undefined") {
    console.warn("Swiper is not defined. Make sure to include the Swiper library.")
  } else {
    new Swiper(".testimonial-slider", {
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
  }

  // Initialize Particles.js for hero section
  // Declare particlesJS if it's not already available globally
  if (typeof particlesJS === "undefined") {
    console.warn("particlesJS is not defined. Make sure to include the particles.js library.")
  } else {
    if (document.getElementById("particles-js")) {
      particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
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
            onHover: {
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
  }

  // Preloader
  const preloader = document.querySelector(".preloader")
  const loadingProgress = document.querySelector(".loading-progress")

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
        }, 500)
      }, 500)
    }
  }, 50)

  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger")
  const nav = document.querySelector(".nav")

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

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll(".nav-link")
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

  // Sticky Header
  const header = document.querySelector(".header")
  // Removed unused variable 'heroSection'
  const headerHeight = header.offsetHeight

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled")
      header.style.backgroundColor =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "rgba(30, 30, 30, 0.95)"
          : "rgba(255, 255, 255, 0.95)"
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    } else {
      header.classList.remove("scrolled")
      header.style.backgroundColor =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "rgba(30, 30, 30, 0.95)"
          : "rgba(255, 255, 255, 0.95)"
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
    }
  })

  // Active Navigation Link on Scroll
  const sections = document.querySelectorAll("section")

  window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      // Removed unused variable 'sectionHeight'

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

  // Scroll to Top Button
  const scrollTopBtn = document.querySelector(".scroll-top")

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
  })

  // Fix for hero buttons - ensure smooth scrolling
  const heroButtons = document.querySelectorAll(".hero-buttons .btn")
  heroButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const targetId = button.getAttribute("href")
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault()
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const headerHeight = document.querySelector(".header").offsetHeight
          const offsetTop = targetElement.offsetTop - headerHeight
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        }
      }
    })

    // Add hover effect
    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-3px)"
      button.style.boxShadow = "0 10px 15px rgba(0, 0, 0, 0.1)"
    })

    button.addEventListener("mouseleave", () => {
      button.style.transform = ""
      button.style.boxShadow = ""
    })
  })

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item")

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
    })
  })

  // Product Filter - Show all products by default
  const filterBtns = document.querySelectorAll(".filter-btn")
  const productCards = document.querySelectorAll(".product-card")

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

      // Filter products
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

  // Product Quick View Modal
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
        "Rich in antioxidants like carotenes and flavonoids (plant compounds)",
        "Excellent source of vitamin C and folate (vitamin B9)",
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
        "Contains lycopene (a powerful antioxidant)",
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
        "Rich in bromelain (an enzyme with anti-inflammatory properties)",
        "Excellent source of vitamin C and manganese",
        "Contains antioxidants that fight oxidative stress",
        "Aids digestion and boosts immunity",
      ],
    },
  }

  // Open modal with product data
  quickViewBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = btn.getAttribute("data-product")
      const product = productData[productId]

      // Set modal content
      document.getElementById("modal-product-title").textContent = product.title
      document.getElementById("modal-product-price").textContent = product.price
      document.getElementById("modal-product-unit").textContent = product.unit
      document.getElementById("modal-product-rating").textContent = product.rating
      document.getElementById("modal-product-description").textContent = product.description
      document.getElementById("modal-product-image").src = product.image

      // Set benefits
      const benefitsList = document.getElementById("modal-product-benefits")
      benefitsList.innerHTML = ""
      product.benefits.forEach((benefit) => {
        const li = document.createElement("li")
        li.innerHTML = `<i class="fas fa-check"></i> ${benefit}`
        benefitsList.appendChild(li)
      })

      // Show modal
      modal.style.display = "flex"
      setTimeout(() => {
        modal.classList.add("active")
        document.querySelector(".modal-content").classList.add("active")
      }, 10)
    })
  })

  // Close modal
  modalClose.addEventListener("click", () => {
    modal.classList.remove("active")
    document.querySelector(".modal-content").classList.remove("active")
    setTimeout(() => {
      modal.style.display = "none"
    }, 300)
  })

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active")
      document.querySelector(".modal-content").classList.remove("active")
      setTimeout(() => {
        modal.style.display = "none"
      }, 300)
    }
  })

  // Animate counter numbers in About section
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

  // Form Submission
  const contactForm = document.querySelector(".contact-form")
  const newsletterForm = document.querySelector(".newsletter-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const name = contactForm.querySelector("#name").value
      const email = contactForm.querySelector("#email").value
      // Removed unused variable 'phone'
      // Removed unused variable 'subject'
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

  // Search Functionality
  const searchBtn = document.querySelector(".search-btn")
  const searchInput = document.querySelector(".search-input")

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", (e) => {
      e.preventDefault()
      searchInput.classList.toggle("active")
      if (searchInput.classList.contains("active")) {
        searchInput.focus()
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

  // Quantity Selector
  const quantityInput = document.querySelector(".quantity-input")
  const minusBtn = document.querySelector(".minus-btn")
  const plusBtn = document.querySelector(".plus-btn")

  if (quantityInput && minusBtn && plusBtn) {
    minusBtn.addEventListener("click", () => {
      let value = Number.parseInt(quantityInput.value)
      if (value > 1) {
        value--
        quantityInput.value = value
      }
    })

    plusBtn.addEventListener("click", () => {
      let value = Number.parseInt(quantityInput.value)
      if (value < 99) {
        value++
        quantityInput.value = value
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
})

// About and Seasonal Sections JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // Animate counter numbers in About section
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute("data-count"));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 16ms per frame (60fps)
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        clearInterval(timer);
        current = target;
      }
      el.textContent = Math.floor(current);
    }, 16);
  };

  // Intersection Observer for counter animation
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = document.querySelectorAll(".stat-number");
          counters.forEach((counter) => {
            animateCounter(counter);
          });
          counterObserver.disconnect(); // Only animate once
        }
      });
    },
    { threshold: 0.5 }
  );

  const statsSection = document.querySelector(".about-stats");
  if (statsSection) {
    counterObserver.observe(statsSection);
  }

  // About section image hover effect
  const aboutImage = document.querySelector(".image-frame");
  if (aboutImage) {
    aboutImage.addEventListener("mouseenter", () => {
      aboutImage.style.transform = "translateY(-10px)";
      aboutImage.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)";
    });

    aboutImage.addEventListener("mouseleave", () => {
      aboutImage.style.transform = "translateY(0)";
      aboutImage.style.boxShadow = "";
    });
  }

  // Seasonal banner hover effect
  const seasonalBanner = document.querySelector(".seasonal-banner");
  if (seasonalBanner) {
    seasonalBanner.addEventListener("mouseenter", () => {
      const img = seasonalBanner.querySelector(".seasonal-image img");
      if (img) {
        img.style.transform = "scale(1.05)";
      }
    });

    seasonalBanner.addEventListener("mouseleave", () => {
      const img = seasonalBanner.querySelector(".seasonal-image img");
      if (img) {
        img.style.transform = "scale(1)";
      }
    });
  }

  // Fix for placeholder images
  const fixPlaceholderImages = () => {
    const placeholders = document.querySelectorAll('img[src^="/placeholder.svg"]');
    placeholders.forEach(img => {
      const src = img.getAttribute('src');
      // Extract dimensions from the placeholder URL
      const heightMatch = src.match(/height=(\d+)/);
      const widthMatch = src.match(/width=(\d+)/);
      
      const height = heightMatch ? heightMatch[1] : 300;
      const width = widthMatch ? widthMatch[1] : 300;
      
      // Replace with placeholder.co URL
      const alt = img.getAttribute('alt') || 'Image';
      const color = alt.toLowerCase().includes('mango') ? 'ff9800' : '4caf50';
      img.src = `https://placehold.co/${width}x${height}/${color}/FFFFFF/png?text=${alt.replace(/\s+/g, '+')}`;
    });
  };

  // Fix placeholder images
  fixPlaceholderImages();

  // Ensure dark mode is properly applied to these sections
  const applyThemeToSections = () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const aboutSection = document.querySelector(".about");
    const seasonalSection = document.querySelector(".seasonal");
    
    if (aboutSection) {
      aboutSection.style.backgroundColor = isDark ? "var(--background-alt)" : "var(--background-alt)";
      
      const aboutIntro = aboutSection.querySelector(".about-intro");
      if (aboutIntro) {
        aboutIntro.style.color = isDark ? "var(--primary-light)" : "var(--primary)";
      }
      
      const statNumbers = aboutSection.querySelectorAll(".stat-number");
      statNumbers.forEach(stat => {
        stat.style.color = isDark ? "var(--primary-light)" : "var(--primary)";
      });
    }
    
    if (seasonalSection) {
      seasonalSection.style.backgroundColor = isDark ? "var(--background)" : "var(--background)";
    }
  };

  // Apply theme adjustments on load
  applyThemeToSections();
  
  // Listen for theme changes
  const themeSwitch = document.getElementById("theme-switch");
  if (themeSwitch) {
    themeSwitch.addEventListener("change", applyThemeToSections);
  }

  // Add AOS animations if AOS is available
  if (typeof AOS !== "undefined") {
    // Reinitialize AOS for these sections
    AOS.refresh();
  }
});