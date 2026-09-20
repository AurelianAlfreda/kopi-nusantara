
$(document).ready(function () {

    $('.faq-answer').hide();
    $('.faq-question').on('click', function () {
        var jawaban = $(this).next('.faq-answer');
        $('.faq-answer').not(jawaban).slideUp();
        $('.faq-question').not(this).removeClass('open');
        jawaban.slideToggle();
        $(this).toggleClass('open');

    });

    $('.like-btn').on('click', function () {
        var tombol = $(this);
        var jumlah = tombol.siblings('.like-count');
        var nilai = parseInt(jumlah.text());

        if (tombol.hasClass('liked')) {
            nilai = nilai - 1;
            tombol.removeClass('liked');
            tombol.html('<i class="far fa-heart"></i> Suka');
        } else {
            nilai = nilai + 1;
            tombol.addClass('liked');
            tombol.html('<i class="fas fa-heart"></i> Disukai');
        }

        jumlah.fadeOut(100, function () {
            jumlah.text(nilai).fadeIn(100);
        });
    });

});
