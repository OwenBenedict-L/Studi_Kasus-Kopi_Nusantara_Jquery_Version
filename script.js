// SCRIPT KONTAK
$(document).ready(function() {
    const maxChars = 999;

    $('#keperluan').on('input', function() {
        const currentLength = $(this).val().length;
        $('#char_count').text(`${currentLength}/${maxChars}`);
    });

    $('#kontakform').on('submit', function(e) {
        e.preventDefault();

        const nama = $('#nama').val().trim();
        const email = $('#email').val().trim();
        const keperluan = $('#keperluan').val().trim();
        const $pesanError = $('#pesan-error');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nama === '' || email === '' || keperluan === '') {
            $pesanError.text('Data anda tidak lengkap, silahkan isi berlebih dahulu!').show();
            return;
        }

        if (!emailRegex.test(email)) {
            $pesanError.text('Format email tidak valid! Harap masukkan format yang benar (contoh: nama@email.com).').show();
            return;
        }

        $pesanError.hide();

        const $alert =$('#custom-alert');
        $alert.addClass('active').fadeIn(300);
        setTimeout(function() {
            $alert.fadeOut(300, function() {$alert.removeClass('active');
            });
        }, 4000);

        $(this).trigger('reset');$('#char-count').text(`0/${maxChars}`);
    });
});