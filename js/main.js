var one_rep_max = function(weight, reps) {
	return weight * (1 + reps/30);
};

var get_entered_values = function() {
	var values = [];
	var weight = $('#weight').val();
	var reps = $('#reps').val();
	values.push(weight);
	values.push(reps);

	console.log(values);
	
	return values;
};

$('#calc').on('click', function() {
	var data = get_entered_values();
	var result = one_rep_max(data[0], data[1]);
	$('#result').val(result);
});

 
