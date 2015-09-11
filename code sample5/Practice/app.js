/**
 * @author sripal
 */
(function() {

	var app = angular.module('store', []);

	app.controller('StoreController', function() {

		this.product = gems;

	});

	var gems = [{

		name : 'Dodecohedran',
		price : 2.95,
		description : 'Its very improtant to add keyword in meta tag because most search engines finds the keyword and these keywords ranked higher in the seasrch engines',
		canPurchase : true,
		soldOut : false,
		images : [{
			full : 'images/diamond1.jpg',
			thumb : 'diamond2.jpg'

		}, {

			full : 'images/diamond2.jpg',
			thumb : 'diamond3.jpg'

		}, {
			full : 'images/diamond3.jpg',
			thumb : 'diamond1.jpg'

		}]

	},
	
	
	
	
	 {
		name : 'The Great Star of Africa',
		price : 4.45,
		description : '530.20 Carats - the Cullinan I or Star Africa diamond is the largest cut diamond in the world. Pear shaped, with 74 facets, it is set in the Royal Scepter (kept with the other Crown Jewels in the Tower of London). It was cut from the 3,106-carat Cullian, the largest diamond crystal ever found. The Cullian was discovered in Transvaal, South Africa in l095 on an inspection tour of the Premier Mine. The Cullian was cut by Joseph Asscher and Company of Amsterdam, who examined the enormous crystal for around six months before determining how to divide it. It eventually yeilded nine major, and 96 smaller brilliant cut stones. When the Cullian was first discovered, certain signs suggested that it may have been part of a much larger crystal. But no discovery of the "missing half" has ever been authenticated.',
		canPurchase : true,
		soldOut : false

	}, {
		name : 'The Orloff',
		price : 6,
		description : '300 Carats when found, color: slightly bluish green, clarity: exceptionally pure, cut: Mogul-cut rose, source: India',
		canPurchase : true,
		soldOut : false

	}];

})();

