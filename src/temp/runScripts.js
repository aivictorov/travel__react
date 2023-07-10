
function alignModalWindows() {
    align();
    window.addEventListener('resize', align);

    function align() {
        document.querySelectorAll('[modal-window]').forEach((modal) => {
            const content = modal.querySelector('[modal-content]');
            if (content.clientHeight <= window.innerHeight - 80) {
                content.classList.add('center');
            } else {
                content.classList.remove('center');
            };
        });
    };
};

function reviewsCarousel() {
    const owl = $(".reviews-section .owl-carousel");

    owl.owlCarousel(
        {
            loop: true,
            items: 3,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            smartSpeed: 2500,
        }
    );
};