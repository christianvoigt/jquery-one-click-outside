/*
 *  jQuery one click outside - v0.1.0
 *  get called once if someone clicked outside
 *  
 *
 *  Made by Christian Voigt
 *  Under MIT License
 */
;(function ( $, window, document, undefined ) {

		var pluginName = "oneClickOutside";

		function Plugin ( element, callback, calledFromClickInsideHandler ) {
				this.element = element;
				this._name = pluginName;
				this.clickOutsideCallback = callback;
				this.init(calledFromClickInsideHandler);
		}

		$.extend(Plugin.prototype, {
				init: function (calledFromClickInsideHandler) {
					var that = this,
					outside = (calledFromClickInsideHandler)? false: true;
					this.$el = $(this);
					this.clickInsideHandler = function(){
						outside = false;
					};
					this.clickOutsideHandler = function(){
						if(outside){
							that.clickOutsideCallback();
							that.destroy();
						}
						outside = true;
					};
					this.$el.on("click",this.clickInsideHandler);
					$(document).on("click",this.clickOutsideHandler);
				},
				destroy : function(){
					this.removeListeners();
					$.data(this.element, "plugin_" + pluginName, null);
				},
				removeListeners : function(){
					this.$el.off("click",this.clickInsideHandler);
					$(document).off("click",this.clickOutsideHandler);
				}
		});

		$.fn[ pluginName ] = function ( callback, calledFromClickInsideHandler ) {
				this.each(function() {
						var plugin = $.data( this, "plugin_" + pluginName );
						if (Object.prototype.toString.call(callback) === "[object Function]" && !plugin ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, callback, calledFromClickInsideHandler ) );
						}else if(callback === "off" && plugin){
							plugin.destroy();
						}
				});
				return this;
		};

})( jQuery, window, document );
