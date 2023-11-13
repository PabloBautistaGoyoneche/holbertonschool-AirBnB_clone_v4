/* Listen for the changes on each input */

$(document).ready(function () {
    // Create an object to store selected amenities with their IDs
    const amenityObj = {};
  
    // Listen for changes on checkboxes inside the amenities popover
    $('.amenities .popover input').change(function () {
      // Check if the checkbox is checked
      if ($(this).is(':checked')) {
        // Add the amenity to the object with its ID
        amenityObj[$(this).attr('data-name')] = $(this).attr('data-id');
      } else if ($(this).is(':not(:checked)')) {
        // Remove the amenity from the object if unchecked
        delete amenityObj[$(this).attr('data-name')];
      }
  
      // Get the names of selected amenities and sort them
      const names = Object.keys(amenityObj).sort();
  
      // Update the h4 tag with the sorted list of amenity names
      $('.amenities h4').text(names.join(', '));
    });
  });
  
