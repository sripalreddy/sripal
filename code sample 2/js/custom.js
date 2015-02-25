$(document).ready(function() {

	$("button").click(function(event) {
		var itemname = $(this).text();

		var itemvalue = $(this).attr("data-value");

		var qty;

		var itemlength = $('.rowlength').length + 1;

		//console.log(itemlength);
		row = "<tr class='rowlength'><td>" + itemlength + "</td><td class='itemnames'>" + itemname + "</td><td data-value=" + itemvalue + "> " + itemvalue + "</td><td><select value=''><option>1</option ><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select></td><td >" + itemvalue + "</td></tr>";

		if ($('.myTable').find('tr').length == 1) {

			$('.myTable').append(row);

		} else {

			$('.myTable tbody tr:last').before(row);

		}

		update_amounts();
	});
	;
	function update_amounts() {
		var total = 0.00;
		var tax = "";
		$('.myTable > tbody  > tr').each(function() {
			if (!$(this).hasClass('totals')) {
				var x = parseInt($(this).find('td:last').text());

				total += x;
				//console.log(total);
				var tax = (total * 6.5) / 100;
				console.log(tax);
				//total += tax;

			}
		});
		//console.log(total);
		if ($('.totals').length == 0) {
			var totalRow = "<tr class='totals'><td class='text-right' colspan='4'>Total</td><td class='totalamount'>" + total.toFixed(2) + "</td></tr>";

			$('.myTable').append(totalRow);

		} else {
			$('.totalamount').text(total.toFixed(2));

		}
	}


	$('.myTable').on("change", 'select', function() {
		var qty = $(this).val();

		var itemvalue = parseInt($(this).parent().parent().find('[data-value]').text());

		var amount = qty * itemvalue;

		$(this).parent().parent().find('td:last').text(amount.toFixed(2));

		update_amounts();
	});

});

