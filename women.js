document.addEventListener('DOMContentLoaded', () => {
    // Function to initialize slider functionality
    const initializeSlider = (sliderTrack, prevArrow, nextArrow) => {
      const slides = sliderTrack.querySelectorAll('.slide');
      const slideWidth = slides[0].offsetWidth + 20; // Include gap
      let isScrolling = false;
  
      // Duplicate slides for infinite scroll
      sliderTrack.innerHTML += sliderTrack.innerHTML;
  
      // Automatic scrolling
      let autoScrollInterval = setInterval(() => {
        if (!isScrolling) {
          sliderTrack.scrollBy({
            left: slideWidth * 2, // Scroll 2 slides at a time (increase for faster scrolling)
            behavior: 'smooth'
          });
        }
      }, 1500); // Reduce interval time for faster scrolling (e.g., 1500ms = 1.5 seconds)
  
      // Pause auto-scroll on hover
      sliderTrack.addEventListener('mouseenter', () => {
        isScrolling = true;
        clearInterval(autoScrollInterval);
      });
  
      // Resume auto-scroll on mouse leave
      sliderTrack.addEventListener('mouseleave', () => {
        isScrolling = false;
        autoScrollInterval = setInterval(() => {
          sliderTrack.scrollBy({
            left: slideWidth * 2, // Scroll 2 slides at a time
            behavior: 'smooth'
          });
        }, 1500); // Reduce interval time for faster scrolling
      });
  
      // Reset scroll position when reaching the end
      sliderTrack.addEventListener('scroll', () => {
        if (sliderTrack.scrollLeft >= sliderTrack.scrollWidth / 2) {
          sliderTrack.scrollTo({
            left: 0,
            behavior: 'instant' // No animation for reset
          });
        }
      });
  
      // Previous arrow click
      prevArrow.addEventListener('click', () => {
        sliderTrack.scrollBy({
          left: -slideWidth * 2, // Scroll 2 slides at a time
          behavior: 'smooth'
        });
      });
  
      // Next arrow click
      nextArrow.addEventListener('click', () => {
        sliderTrack.scrollBy({
          left: slideWidth * 2, // Scroll 2 slides at a time
          behavior: 'smooth'
        });
      });
    };
  
    // Initialize Popular Products slider
    const popularSliderTrack = document.querySelector('.popular-products .slider-track');
    const popularPrevArrow = document.querySelector('.popular-products .prev-arrow');
    const popularNextArrow = document.querySelector('.popular-products .next-arrow');
    if (popularSliderTrack && popularPrevArrow && popularNextArrow) {
      initializeSlider(popularSliderTrack, popularPrevArrow, popularNextArrow);
    }
  
    // Initialize Trending Products slider
    const trendingSliderTrack = document.querySelector('.trending-products .slider-track');
    const trendingPrevArrow = document.querySelector('.trending-products .prev-arrow');
    const trendingNextArrow = document.querySelector('.trending-products .next-arrow');
    if (trendingSliderTrack && trendingPrevArrow && trendingNextArrow) {
      initializeSlider(trendingSliderTrack, trendingPrevArrow, trendingNextArrow);
    }
  
    // Initialize Recommended Products slider
    const recommendedSliderTrack = document.querySelector('.recommended-products .slider-track');
    const recommendedPrevArrow = document.querySelector('.recommended-products .prev-arrow');
    const recommendedNextArrow = document.querySelector('.recommended-products .next-arrow');
    if (recommendedSliderTrack && recommendedPrevArrow && recommendedNextArrow) {
      initializeSlider(recommendedSliderTrack, recommendedPrevArrow, recommendedNextArrow);
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroPrevArrow = document.querySelector('.hero-prev-arrow');
    const heroNextArrow = document.querySelector('.hero-next-arrow');
    let currentSlide = 0;
  
    // Function to show the current slide
    const showSlide = (index) => {
      heroSlider.style.transform = `translateX(-${index * 100}%)`;
    };
  
    // Function to go to the next slide
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % heroSlides.length;
      showSlide(currentSlide);
    };
  
    // Function to go to the previous slide
    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
      showSlide(currentSlide);
    };
  
    // Automatic scrolling
    let autoScrollInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  
    // Pause auto-scroll on hover
    heroSlider.addEventListener('mouseenter', () => {
      clearInterval(autoScrollInterval);
    });
  
    // Resume auto-scroll on mouse leave
    heroSlider.addEventListener('mouseleave', () => {
      autoScrollInterval = setInterval(nextSlide, 5000);
    });
  
    // Previous arrow click
    heroPrevArrow.addEventListener('click', () => {
      prevSlide();
    });
  
    // Next arrow click
    heroNextArrow.addEventListener('click', () => {
      nextSlide();
    });
  });
  // Update cart count in the header
  document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    // Function to update the cart count
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cartCountElement.textContent = cart.length;
    };
  
    // Initialize cart count on page load
    updateCartCount();
  
    // Add to cart functionality
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        localStorage.clear();
      });
    });
  });
  
  function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
  }
  