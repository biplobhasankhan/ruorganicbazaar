/**
 * RU Organic Bazaar - Advanced Features
 * Implements cutting-edge interactive features and animations
 * Author: Professional Developer
 * Version: 1.0
 */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize all advanced features
    initProductComparison()
    initNutritionFacts()
    initCountdownTimer()
    initLoyaltyProgram()
    initFloatingLabels()
    initMagneticButtons()
    initProgressBars()
    initRippleEffect()
    initParallaxEffect()
  })
  
  // Product Comparison Slider
  function initProductComparison() {
    const comparisonSliders = document.querySelectorAll(".comparison-slider")
  
    comparisonSliders.forEach((slider) => {
      const sliderHandle = slider.querySelector(".slider-handle")
      const afterElement = slider.querySelector(".after")
  
      // Set initial position
      afterElement.style.width = "50%"
  
      // Handle mouse/touch events
      let isDragging = false
  
      const startDrag = (e) => {
        isDragging = true
        e.preventDefault()
      }
  
      const stopDrag = () => {
        isDragging = false
      }
  
      const drag = (e) => {
        if (!isDragging) return
  
        let clientX
        if (e.type === "mousemove") {
          clientX = e.clientX
        } else if (e.type === "touchmove") {
          clientX = e.touches[0].clientX
        }
  
        const sliderRect = slider.getBoundingClientRect()
        const position = ((clientX - sliderRect.left) / sliderRect.width) * 100
  
        // Constrain position between 0% and 100%
        const constrainedPosition = Math.max(0, Math.min(100, position))
  
        // Update slider position
        afterElement.style.width = `${constrainedPosition}%`
        sliderHandle.style.left = `${constrainedPosition}%`
      }
  
      // Mouse events
      sliderHandle.addEventListener("mousedown", startDrag)
      document.addEventListener("mouseup", stopDrag)
      document.addEventListener("mousemove", drag)
  
      // Touch events
      sliderHandle.addEventListener("touchstart", startDrag, { passive: false })
      document.addEventListener("touchend", stopDrag)
      document.addEventListener("touchmove", drag, { passive: false })
    })
  }
  
  // Nutrition Facts Display
  function initNutritionFacts() {
    const nutritionButtons = document.querySelectorAll(".nutrition-btn")
  
    nutritionButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productId = this.getAttribute("data-product")
        const nutritionModal = document.getElementById("nutrition-modal")
  
        if (nutritionModal) {
          // Get nutrition data based on product ID
          const nutritionData = getNutritionData(productId)
  
          // Update modal content
          const modalTitle = nutritionModal.querySelector(".nutrition-facts-title")
          const caloriesValue = nutritionModal.querySelector(".calories-value")
          const fatValue = nutritionModal.querySelector(".fat-value")
          const carbsValue = nutritionModal.querySelector(".carbs-value")
          const proteinValue = nutritionModal.querySelector(".protein-value")
          const vitaminCValue = nutritionModal.querySelector(".vitamin-c-value")
  
          if (modalTitle) modalTitle.textContent = nutritionData.name
          if (caloriesValue) caloriesValue.textContent = nutritionData.calories
          if (fatValue) fatValue.textContent = nutritionData.fat
          if (carbsValue) carbsValue.textContent = nutritionData.carbs
          if (proteinValue) proteinValue.textContent = nutritionData.protein
          if (vitaminCValue) vitaminCValue.textContent = nutritionData.vitaminC
  
          // Show modal
          nutritionModal.style.display = "flex"
          setTimeout(() => {
            nutritionModal.classList.add("active")
          }, 10)
        }
      })
    })
  
    // Close nutrition modal
    const nutritionModalClose = document.querySelector(".nutrition-modal-close")
    const nutritionModal = document.getElementById("nutrition-modal")
  
    if (nutritionModalClose && nutritionModal) {
      nutritionModalClose.addEventListener("click", () => {
        nutritionModal.classList.remove("active")
        setTimeout(() => {
          nutritionModal.style.display = "none"
        }, 300)
      })
  
      // Close when clicking outside
      window.addEventListener("click", (e) => {
        if (e.target === nutritionModal) {
          nutritionModal.classList.remove("active")
          setTimeout(() => {
            nutritionModal.style.display = "none"
          }, 300)
        }
      })
    }
  }
  
  // Get nutrition data for products
  function getNutritionData(productId) {
    const nutritionDatabase = {
      jackfruit: {
        name: "Jackfruit (100g)",
        calories: "95",
        fat: "0.6g",
        carbs: "23g",
        protein: "1.7g",
        vitaminC: "13.7mg",
      },
      mango: {
        name: "Mango (100g)",
        calories: "60",
        fat: "0.4g",
        carbs: "15g",
        protein: "0.8g",
        vitaminC: "36.4mg",
      },
      papaya: {
        name: "Papaya (100g)",
        calories: "43",
        fat: "0.4g",
        carbs: "11g",
        protein: "0.5g",
        vitaminC: "61.8mg",
      },
      banana: {
        name: "Banana (100g)",
        calories: "89",
        fat: "0.3g",
        carbs: "23g",
        protein: "1.1g",
        vitaminC: "8.7mg",
      },
      guava: {
        name: "Guava (100g)",
        calories: "68",
        fat: "1g",
        carbs: "14g",
        protein: "2.6g",
        vitaminC: "228.3mg",
      },
      pineapple: {
        name: "Pineapple (100g)",
        calories: "50",
        fat: "0.1g",
        carbs: "13g",
        protein: "0.5g",
        vitaminC: "47.8mg",
      },
    }
  
    return (
      nutritionDatabase[productId] || {
        name: "Fruit (100g)",
        calories: "0",
        fat: "0g",
        carbs: "0g",
        protein: "0g",
        vitaminC: "0mg",
      }
    )
  }
  
  // Seasonal Countdown Timer
  function initCountdownTimer() {
    const countdownElement = document.querySelector(".countdown-timer")
  
    if (countdownElement) {
      // Set end date (example: 30 days from now)
      const now = new Date()
      const endDate = new Date()
      endDate.setDate(now.getDate() + 30)
  
      // Update countdown every second
      const countdownInterval = setInterval(() => {
        const now = new Date()
        const distance = endDate - now
  
        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  
        // Update DOM
        const daysElement = countdownElement.querySelector(".days-number")
        const hoursElement = countdownElement.querySelector(".hours-number")
        const minutesElement = countdownElement.querySelector(".minutes-number")
        const secondsElement = countdownElement.querySelector(".seconds-number")
  
        if (daysElement) daysElement.textContent = days.toString().padStart(2, "0")
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, "0")
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, "0")
        if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, "0")
  
        // If countdown is finished
        if (distance < 0) {
          clearInterval(countdownInterval)
          countdownElement.innerHTML = '<p class="countdown-expired">Season has ended!</p>'
        }
      }, 1000)
    }
  }
  
  // Loyalty Program
  function initLoyaltyProgram() {
    const loyaltyBadge = document.querySelector(".loyalty-badge")
  
    if (loyaltyBadge) {
      // Simulate points (in a real app, this would come from a database)
      const points = Math.floor(Math.random() * 500)
      const pointsElement = loyaltyBadge.querySelector(".loyalty-badge-points")
  
      if (pointsElement) {
        // Animate counting up
        let currentPoints = 0
        const duration = 2000 // 2 seconds
        const interval = 20 // Update every 20ms
        const increment = points / (duration / interval)
  
        const counter = setInterval(() => {
          currentPoints += increment
  
          if (currentPoints >= points) {
            currentPoints = points
            clearInterval(counter)
          }
  
          pointsElement.textContent = Math.floor(currentPoints)
        }, interval)
      }
    }
  
    // Add product to loyalty program
    const buyButtons = document.querySelectorAll(".btn-primary")
    buyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // In a real app, this would add points to the user's account
        // For demo purposes, we'll just show a notification
        showNotification("Earned 10 loyalty points!")
      })
    })
  }
  
  // Floating Labels for Forms
  function initFloatingLabels() {
    const floatLabels = document.querySelectorAll(".float-label-group input, .float-label-group textarea")
  
    floatLabels.forEach((input) => {
      // Add placeholder attribute if not present
      if (!input.hasAttribute("placeholder")) {
        input.setAttribute("placeholder", " ")
      }
  
      // Handle focus and blur events
      input.addEventListener("focus", function () {
        this.parentNode.classList.add("focused")
      })
  
      input.addEventListener("blur", function () {
        this.parentNode.classList.remove("focused")
      })
    })
  }
  
  // Magnetic Buttons
  function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll(".magnetic-btn")
  
    magneticButtons.forEach((btn) => {
      btn.addEventListener("mousemove", function (e) {
        const btnRect = this.getBoundingClientRect()
        const btnX = btnRect.left + btnRect.width / 2
        const btnY = btnRect.top + btnRect.height / 2
  
        const mouseX = e.clientX
        const mouseY = e.clientY
  
        const deltaX = mouseX - btnX
        const deltaY = mouseY - btnY
  
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
        const maxDistance = Math.max(btnRect.width, btnRect.height)
  
        if (distance < maxDistance) {
          const moveX = deltaX * 0.2
          const moveY = deltaY * 0.2
  
          this.style.transform = `translate(${moveX}px, ${moveY}px)`
        }
      })
  
      btn.addEventListener("mouseleave", function () {
        this.style.transform = "translate(0, 0)"
      })
    })
  }
  
  // Animated Progress Bars
  function initProgressBars() {
    const progressBars = document.querySelectorAll(".progress-bar")
  
    if (progressBars.length > 0) {
      // Use Intersection Observer to animate when visible
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const progressBar = entry.target
              const progressFill = progressBar.querySelector(".progress-bar-fill")
              const percentage = progressBar.getAttribute("data-percentage") || "0"
  
              if (progressFill) {
                progressFill.style.width = `${percentage}%`
              }
  
              observer.unobserve(progressBar)
            }
          })
        },
        { threshold: 0.2 },
      )
  
      progressBars.forEach((bar) => {
        observer.observe(bar)
      })
    }
  }
  
  // Ripple Effect for Buttons
  function initRippleEffect() {
    const rippleButtons = document.querySelectorAll(".ripple-btn")
  
    rippleButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        const btnRect = this.getBoundingClientRect()
        const circle = document.createElement("span")
  
        const diameter = Math.max(btnRect.width, btnRect.height)
        const radius = diameter / 2
  
        circle.style.width = circle.style.height = `${diameter}px`
        circle.style.left = `${e.clientX - btnRect.left - radius}px`
        circle.style.top = `${e.clientY - btnRect.top - radius}px`
        circle.classList.add("ripple")
  
        // Remove existing ripples
        const ripple = this.querySelector(".ripple")
        if (ripple) {
          ripple.remove()
        }
  
        this.appendChild(circle)
  
        // Remove ripple after animation
        setTimeout(() => {
          circle.remove()
        }, 600)
      })
    })
  }
  
  // Parallax Effect
  function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll(".parallax-section")
  
    if (parallaxElements.length > 0) {
      window.addEventListener("scroll", () => {
        parallaxElements.forEach((element) => {
          const scrollPosition = window.pageYOffset
          const elementTop = element.offsetTop
          const elementHeight = element.offsetHeight
  
          // Only apply parallax if element is in view
          if (scrollPosition > elementTop - window.innerHeight && scrollPosition < elementTop + elementHeight) {
            const speed = element.getAttribute("data-speed") || 0.5
            const yPos = (scrollPosition - elementTop) * speed
  
            element.style.backgroundPosition = `center ${yPos}px`
          }
        })
      })
    }
  }
  
  // Show notification
  function showNotification(message) {
    // Create notification element if it doesn't exist
    let notification = document.querySelector(".custom-notification")
  
    if (!notification) {
      notification = document.createElement("div")
      notification.className = "custom-notification"
      document.body.appendChild(notification)
  
      // Add styles
      notification.style.position = "fixed"
      notification.style.bottom = "20px"
      notification.style.right = "20px"
      notification.style.backgroundColor = "var(--primary)"
      notification.style.color = "white"
      notification.style.padding = "12px 20px"
      notification.style.borderRadius = "var(--border-radius)"
      notification.style.boxShadow = "var(--shadow-lg)"
      notification.style.zIndex = "9999"
      notification.style.transform = "translateY(100px)"
      notification.style.opacity = "0"
      notification.style.transition = "transform 0.3s ease, opacity 0.3s ease"
    }
  
    // Set message and show notification
    notification.textContent = message
    notification.style.transform = "translateY(0)"
    notification.style.opacity = "1"
  
    // Hide notification after 3 seconds
    setTimeout(() => {
      notification.style.transform = "translateY(100px)"
      notification.style.opacity = "0"
    }, 3000)
  }
  