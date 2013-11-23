/*!
 * Confirm dialog plugin
 * 
 * @version 1.0
 * @author Mikko Tikkanen <mikko.tikkanen@gmail.com>
 */
;(function(window, document, $, undefined) {
	var methods = {},	// Methods namespace
		O = {},			// Options
		E = {			// Elements
			bg: null
		};
	
	
		
	/* Confirm modal method
	 *
	 * Shows the actual confirm dialog + background
	 * ----------------------------------------------------------------------------------------- */
	methods.confirm = function(message, callback, event) {
		callback = callback || function() {};
		message = message || 'Are you sure?';
		E.bg.show();
		var result = confirm(message);
		E.bg.hide();
		
		// Declined
		if(result !== true) {
			if(event) { event.preventDefault(); }
			return;
		}
		
		// Accepted - Trigger confirm event or run callback
		if(typeof callback == 'object') {
			callback.trigger('confirm');
		} else {
			callback();
		}
	};
	
	
	/* Set option method
	 * ------------------------------------------------------------------------------------------ */
	methods.set = function(key, value) {
		O[key] = value;
	}
	
	
	/* Plugin base logic
	 * ------------------------------------------------------------------------------------------ */
	$.confirm = function(method) {
		if(methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else {
			return methods.confirm.apply(this, arguments);
		}
	}
	
	
	
	
	
	// JQuery confirm shorthand
	$.fn.confirm = function(fnc) { this.on('confirm', fnc); }
	
	// Add automatic confirm handlers
	$(document).ready(function() {
		$('*[data-confirm]').click(function(e) { $.confirm($(this).data('confirm'), $(this), e); });
	});
	
	// Create confirm background
	var el = $('<div />');
	el.css({
		display: 'none',
		position: 'fixed',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		background: '#000',
		opacity: 0.5,
		zIndex: 9999
	});
	$('body').prepend(el)
	E.bg = el;
	
})(window, document, jQuery);

