'use strict';

var subForm = document.getElementById('m10c_subscription_form');

if (subForm) {

	var action = subForm.action,
		method = subForm.method,
		submitEvent = function(event) {
			event.preventDefault();
			return false;
		};

	if (action && method) {

		submitEvent = function(event) {

			event.preventDefault();
			var overlay = document.getElementById('success_overlay');

			if (overlay) {
				overlay.classList.remove('hidden');
				overlay.classList.remove('initial-hidden');
			}

			var r = new XMLHttpRequest();

			r.open(method, action, true);

			r.onreadystatechange = function() {
				if (r.readyState != 4 || r.status != 200) {
					return;
				}
			};

			r.send(JSON.stringify({'email': subForm['email_address'].value}));
			subForm['email_address'].value = '';
			setTimeout(function() {
				var _overlay = document.getElementById('success_overlay');
				if (_overlay) {
					_overlay.classList.add('hidden');
				}
			}, 2000);
		};
	}

	subForm.onsubmit = submitEvent;
}

