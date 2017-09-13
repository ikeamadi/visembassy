var amount = document.getElementById('amount_pay');
var total = document.getElementById('total_passport');


function updateTotal() {
	eval(total.value);
}

amount.addEventListener('input', function() {
	
	if (amount.value === '') {total.value = ''} 
	else {
		var intResult = Number(amount.value) + 15;
		total.value = "$" + intResult.toString();
		updateTotal();}
});
