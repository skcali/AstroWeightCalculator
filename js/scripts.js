$(document).ready(function() {

  // Make Array of Plant names and the gravity
	var planets = [
		['Pluto', 0.06],
		['Neptune', 1.148],
		['Uranus', 0.917],
		['Saturn', 1.139],
		['Jupiter', 2.640],
		['Mars', 0.3895],
		['Moon', 0.1655],
		['Earth', 1],
		['Venus', 0.9032],
		['Mercury', 0.377],
		['Sun', 27.9],
	];

  // Iterate through the planets object, grab the text and the value, then print them out as options under the selections menu
	for (i = planets.length - 1; i >= 0; i--) {
		$('#planetList').append('<option value = "' + planets[i][1] + '">' + planets[i][0] + '</option>');
	}

  // Click on the button to do the math and print
  $('#planetButton').click(function () {
    // Grab the weight from the input
    var weight = $('#weight').val();
    // Grab the planet name
    var planetName = $('select option:selected').text();
    // Grab the planets gravity
    var planetGravity = $('select option:selected').val();
    // Do the math
    var calcTotal = planetGravity * weight;
    // Print it all out to the document
    $('#printCalc').text('You would weight ' + Math.round(calcTotal) + ' pounds on planet ' + planetName + '!');
  });

  // Check if check box is checked or not
  $('#checkBox').change(function() {
    if ( $('#checkBox').is(':checked')) {
      // When the checkbox is checked, remove the last option
      $('#planetList').children("option:last").remove();
    } else {
      // When the checkbox is not checked, bring back the last option
      $("select").append("<option value="+planets[0][1]+">"+planets[0][0]+"</option>");
    }
  });
});
