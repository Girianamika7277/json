

$(document).ready(function () {
    // Define the JSON file path
    var jsonFilePath = 'hospital-list.json';

    // Use jQuery's AJAX to fetch JSON data
    $.getJSON(jsonFilePath, function (data) {
      // Assuming the JSON structure is an array of objects
      $.each(data, function (index, item) {
        // Create a new row for each item in the JSON
        var newRow = $('<tr>');
        newRow.append($('<td>').text(item.Hospital)); // Replace 'column1' with your actual JSON field name
        newRow.append($('<td>').text(item.City)); // Replace 'column2' with your actual JSON field name
        newRow.append($('<td>').text(item.State));
        newRow.append($('<td>').text(item.Address));
        newRow.append($('<td>').text(item.Pin));
        // Add more columns as needed

        // Append the new row to the table body
        $('#data-table tbody').append(newRow);
      });
    });
  });
