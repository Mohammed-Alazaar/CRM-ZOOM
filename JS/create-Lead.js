
$(document).ready(function() {
    $('.public-trip-inputs-container').hide();
      $('.private-trip-inputs-container').hide();
      $('.car-rentel-inputs-container').hide();
      $('.show-hover').hide();
      
    // Event handler for the "Public" tab
  $('.tab-Public').click(function() {
    $('.public-trip-inputs-container').show();
    $('.private-trip-inputs-container').hide().find('input, textarea').val('');
    $('.car-rentel-inputs-container').hide().find('input, textarea').val('');
    $('.show-hover').show();
    $('.choose-type-div').hide();
  });

  // Event handler for the "Private" tab
  $('.tab-Private').click(function() {
    $('.public-trip-inputs-container').hide().find('input, textarea').val('');
    $('.private-trip-inputs-container').show();
    $('.car-rentel-inputs-container').hide().find('input, textarea').val('');
    $('.show-hover').show();
    $('.choose-type-div').hide();

  });

  // Event handler for the "Car Rental" tab
  $('.tab-car').click(function() {
    $('.public-trip-inputs-container').hide().find('input, textarea').val('');
    $('.private-trip-inputs-container').hide().find('input, textarea').val('');
    $('.car-rentel-inputs-container').show();
    $('.show-hover').show();
    $('.choose-type-div').hide();
  });
  });
  
