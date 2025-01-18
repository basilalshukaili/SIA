(function ($) {
    "use strict";

    // Define the text groups
    const group1 = [
        "الحق يعلو ولا يُعلى عليه",
        "كل إنسان بريء حتى تثبت إدانته",
        "العدل أساس الملك",
        "العقد شريعة المتعاقدين",
        "لا جريمة ولا عقوبة إلا بنص",
        "النية جزء من الفعل",
        "الأصل براءة الذمة",
        "لا يجوز التعاقد على ما هو غير مشروع",
        "لا ضرر ولا ضرار",
        "الحق لا يسقط بالتقادم"
    ];
    const group2 = [
        "البينة على من ادعى",
        "السلطة تُمارَس وفق القانون",
        "المحكمة ليست مكاناً للتقاضي، بل للعدل",
        "لا يُمنح أي حق دون واجب",
        "الحرية مسؤولية",
        "الالتزام بالشروط هو جوهر العقد",
        "كل فعل له تبعات قانونية",
        "لا يجوز الرجوع في الهبة",
        "الشهادة حق وواجب",
        "الحق في الدفاع مكفول"
    ];
    const group3 = [
        "لا تمييز بين المواطنين أمام القانون",
        "المصلحة العامة فوق المصلحة الخاصة",
        "المسؤولية المدنية تُلزم بالتعويض",
        "الحكم المشمول بالنفاذ المعجل والجزائي يُنفذ حتى يُستأنف",
        "الجرائم تُعاقب وفق القانون",
        "كل إنسان له الحق في محاكمة عادلة",
        "السرية واجبة في بعض الحالات",
        "لا يجوز التأديب إلا في حدود القانون",
        "الحرمان من الحقوق يحتاج إلى سبب قانوني"
    ];
    

    // Function to pick a random item from each group
    function getRandomText() {
        const randomGroup = Math.floor(Math.random() * 3) + 1; // Randomly choose a group
        let randomText = "";
        
        if (randomGroup === 1) {
            randomText = group1[Math.floor(Math.random() * group1.length)];
        } else if (randomGroup === 2) {
            randomText = group2[Math.floor(Math.random() * group2.length)];
        } else {
            randomText = group3[Math.floor(Math.random() * group3.length)];
        }
        
        return randomText;
    }

    // Apply random text to the h1 element in each carousel item
    $(".carousel-item h1").each(function() {
        $(this).text(getRandomText());
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });

    // Blogs carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
})(jQuery);
