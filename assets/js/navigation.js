$(document).ready(() => {
    const mainPage = '/';
    const hash = window.location.hash;
    const offset = 100

    if (hash) {
        const $target = $(hash);
        if ($target.length) {
            $("html, body").animate({
                scrollTop: $target.offset().top - offset
            }, 500, () => {
                history.replaceState(null, null, window.location.origin + window.location.pathname);
            });
        };
    };

    // Mobile
    $('[data-nav-target]').on('click', function (e) {
        e.preventDefault();

        const targetId = $(this).data("nav-target");
        const currentPath = window.location.pathname;

        if (!currentPath.endsWith('/') && !currentPath.endsWith('index.html')) {
            window.location.href = `${mainPage}index.html#${targetId}`;
        } else {
            const $target = $('#' + targetId);
            if ($target.length) {
                $("html, body").animate({
                    scrollTop: $target.offset().top - offset
                }, 500, () => {
                    history.replaceState(null, null, window.location.origin + window.location.pathname);
                });
            };
        };
    });

    // Desktop
    $('.nav-link, .navbar-brand').on('click', function (e) {
        const href = $(this).attr('href');

        if (!href.startsWith('#')) return;

        e.preventDefault();

        const targetId = href;
        const currentPath = window.location.pathname;

        if (!currentPath.endsWith('/') && !currentPath.endsWith('index.html')) {
            window.location.href = `${mainPage}${targetId}`;
        } else {
            const $target = $(targetId);
            if ($target.length) {
                $("html, body").animate({
                    scrollTop: $target.offset().top - offset
                }, 500, () => {
                    history.replaceState(null, null, window.location.origin);
                });
            };
        };
    });
});