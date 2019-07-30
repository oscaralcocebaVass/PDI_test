// Scripts UOC
jQuery(document).ready(function ($) {

    function calculoWidth() {
        $('.js-width').each(function () {
            var width = $(this).width();
            $(this).find(".js-width-final").width(width)
        });
    }
    
    function removeSticky(){
        if ($(window).width() < 768) {
            $(".js-removeSticky").removeClass("sticky");
        }
    }
    
    //collapse
    function collapse(){

        $('.js-collapseClick').on('click', function () {

            if ($(this).closest('.js-collapse').hasClass('js-sub')){

                if ($(this).closest('.js-collapse').siblings().hasClass('show')) {
                    $(this).closest('.js-collapse').siblings().removeClass('show');
                    $(this).attr('aria-expanded', 'false');


                } else {
                    $('.js-sub .js-collapseClick').attr('aria-expanded', 'false');
                    $('.js-sub').siblings().removeClass('show');
                    $(this).closest('.js-sub').siblings().addClass('show');
                    $(this).attr('aria-expanded', 'true');
                }


            }else{

                if ($(this).closest('.js-collapse').siblings().hasClass('show')) {
                    $(this).closest('.js-collapse').siblings().removeClass('show');
                    $(this).attr('aria-expanded', 'false');


                } else {
                    $(this).closest('.js-collapse-group').find('.js-collapseClick').attr('aria-expanded', 'false');
                    $(this).closest('.js-collapse-group').find('.js-collapse').siblings().removeClass('show');
                    $(this).closest('.js-collapse').siblings().addClass('show');
                    $(this).attr('aria-expanded', 'true');
                }
            }

           
            
            
        });
      

    }


    if($('.tag-list').length > 0) {
        $('.tag-list').on('click', 'li', function() {
            $(this).toggleClass('active');
        })
    }

    if($('.tag-icons').length > 0) {
        $('.tag-icons').on('click', 'li', function() {
            $(this).toggleClass('select-icon');
        })
    }

    calculoWidth();
    removeSticky();
    collapse();
    
    $(window).on('resize', function () {
        calculoWidth();
        removeSticky();
        collapse();
    });

    //Smooth anchor click scroll
    $('.hero-section__scroll a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        
    });
    

    $('.filters-main__box').on('click', '.tab', function() {
        var $this = $(this).closest('.filters-main__box');
        if(!$this.hasClass('box-green-selected')) {
            $this.addClass('box-green-selected');
            $this.siblings().removeClass('box-green-selected');
            $('.filters-main__content').removeClass('hidde-content');
        } else {
            $this.removeClass('box-green-selected');
            $this.siblings().removeClass('box-green-selected');
            $('.filters-main__content').addClass('hidde-content');
        }
    });

    if($('.sticky-sidebar').length > 0) {

        if($(window).width() > 992) {
            var sticky = new Sticky('.toStick');
        }
    }
});
