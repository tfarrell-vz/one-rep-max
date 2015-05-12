// Calculate one rep max (ORM) using Epley formula
var one_rep_max = function(weight, reps) {
	return weight * (1 + reps/30);
};

// Obtain the entered values for weight and reps. 
var get_entered_values = function() {
	var values = {};
	var weight = $('#weight').val();
	var reps = $('#reps').val();
	values['weight'] = weight;
	values['reps'] = reps;
    
	console.log(values);
	
	return values;
};

// Calculate ORM upon click, and push the result to the appropriate field. 
$('#calc').on('click', function() {
	var data = get_entered_values();
	var result = one_rep_max(data['weight'], data['reps']);
	$('#result').val(result);
});

// TODO: Reset button function. 
 
