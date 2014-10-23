// jQuery Equal Height plugin version 0.1
// Author: Andreas Nylin
(function ($) {
	$.fn.equalHeight = function (options) {
		var opts = $.extend({}, $.fn.equalHeight.defaults, options);

		return this.each(function () {
			var maxHeight = 0,
				$this = $(this),
				columns = opts.columnSelector ? $this.find(opts.columnSelector) : $this.children();

			columns.each(function () {
				var height = $(this).outerHeight();

				if (maxHeight < height) {
					maxHeight = height;
				}

			}).height(maxHeight);

		});
	};

	$.fn.equalHeight.defaults = {
		columnSelector: null 
	};

})(jQuery);