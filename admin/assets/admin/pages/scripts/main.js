$('.page-sidebar-menu li').click(function(e) {
    $('.page-sidebar-menu li.active').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    e.preventDefault();
});