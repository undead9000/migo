// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

$(document).ready(function(){
  $('[data-content-list-save]').on('click', function(e){
    e.preventDefault();
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  })

  $('[data-content-list-note]').on('click', function(e){
    e.preventDefault();
    if($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).closest('li').children('[personal-note]').removeClass('show');
    } else {
      $(this).addClass('active');
      $(this).closest('li').children('[personal-note]').addClass('show');
    }
  });

  $('[content-filter-toggle]').on('click', function(e){
    e.preventDefault();
    if($(this).hasClass('show')) {
      $(this).removeClass('show');
      $(this).siblings('[content-filter-toggle]').addClass('show');
      if($('[content-filter-additional-options]').hasClass('show')) {
        $('[content-filter-additional-options]').removeClass('show');
      } else {
        $('[content-filter-additional-options]').addClass('show');
      }
    } 
  });

  $('[main-slider]').slick({
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '13px',
    arrows: false,
    adaptiveHeight: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 8,
        }
      },
      {
        breakpoint: 1740,
        settings: {
          slidesToShow: 7,
        }
      },
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 4,
        }
      },
    ]
  });

  $('[main-slider-favorite]').on('click', function(e){
    e.preventDefault();
    if($(this).closest('li').hasClass('active')) {
      $(this).closest('li').removeClass('active');
    } else {
      $(this).closest('li').addClass('active');
    }
  });

  //dropdowns
  $('[data-selectmenu]').selectmenu();
})