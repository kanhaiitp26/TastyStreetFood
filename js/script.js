$('.product-slider-box').slick({
  dots: true,
  infinite: true,
  loop : true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows : false,
  arrows : true,
  prevArrow : "<span class='prev-btn'><i class='fa-solid fa-arrow-left'></span>",
  nextArrow : "<span class='next-btn'><i class='fa-solid fa-arrow-right'></span>",
  dots : false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.testimonial-slider').slick({
  dots: true,
  infinite: true,
  loop : true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows : true,
  prevArrow : "<span class='prev-btn'><i class='fa-solid fa-arrow-left'></span>",
  nextArrow : "<span class='next-btn'><i class='fa-solid fa-arrow-right'></span>",
  dots : false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
});