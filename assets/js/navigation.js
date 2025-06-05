// Mobile
$(document).ready( () => {
    $('[data-nav-target]').on('click', function (e) {
        e.preventDefault();

        const targetId = $(this).data("nav-target");
        const currentPath = window.location.pathname;
        const mainPage = '/main.html';

        if (!currentPath.endsWith('main.html')) {
            window.location.href = `${mainPage}#${targetId}`;
        } else {
            const $target = $('#' + targetId);
            if ($target.length) {
                $("html, body").animate({
                    scrollTop: $target.offset().top
                }, 1000);
            };
        };
    });
});