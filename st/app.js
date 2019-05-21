(function () {
	'use strict';

	var byId = function (id) { return document.getElementById(id); }


	Sortable.create(byId('foo'), {
		group: "words",
		animation: 150,
		store: {
			get: function (sortable) {
				var order = localStorage.getItem(sortable.options.group);
				return order ? order.split('|') : [];
			},
			set: function (sortable) {
				var order = sortable.toArray();
				localStorage.setItem(sortable.options.group, order.join('|'));
			}
		},
		onEnd: function(evt){ console.log('onEnd.foo:', evt.from);}
	});
})();


