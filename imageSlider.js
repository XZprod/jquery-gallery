(function ($) {
    jQuery.fn.imageSlider = function (options) {
        this.currentImageNum = 0;
        if (Array.isArray(options) && options.length > 0) {
            this.imageUrls = options;
            $(this).css('background-image', 'url(' + this.imageUrls[this.currentImageNum] + ')');
            $(this).css('background-repeat', 'no-repeat');
            $(this).css('background-size', 'contain');
            var that = this;
            $(this).click(that, function () {
                that.currentImageNum >= that.imageUrls.length - 1 ? that.currentImageNum = 0 : that.currentImageNum++;
                $(that).css('background-image', 'url(' + that.imageUrls[that.currentImageNum] + ')');
            });
        } else {
            console.error('Не передан массив с изображениями');
            return;
        }
        return this;
    };
})(jQuery);