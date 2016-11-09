/**
 * name : jysSelectbox
 * make : parkjonghcan
 * version : 0.1
 * date : 2016.10.20
 * e-mail:idpjc1@gamil.com //korea
 *
 */
(function($){
    $.fn.JYStabletTab=function(options){
        this.each(function(index){
            var JYStabletTab = new jystableTab(this,options);
            $(this).data("JYStabletTab", JYStabletTab);
        });
        return this;
    };
})(jQuery);
function jystableTab(selector, options){
    this.$JYStabletTab = null;
    this._init(selector);
    this._initEvent();
}
jystableTab.prototype._init=function(selector){
    this.$JYStabletTab = $(selector);
    this._$tabList = this.$JYStabletTab.find('.tab_list li');
    this._$tabContent = this.$JYStabletTab.find('.content');
};
jystableTab.prototype._initEvent=function(){
   var objThis = this;
   this._$tabList.on('click',function(e){
		e.preventDefault();

		if(objThis._$tabList.children().hasClass('active')) {
			objThis._$tabList.children().removeClass('active');
			objThis._$tabContent.removeClass('active');
		}
		var idx = objThis._$tabList.index(this);
		$(this).children().addClass('active');
		objThis._$tabContent.eq(idx).addClass('active');
    });
};

