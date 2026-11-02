document.addEventListener('DOMContentLoaded', function () {

    /* ---------- Modal foto ---------- */
    const photoModal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');

    photoModal.addEventListener('show.bs.modal', function (event) {
        const clickedPhoto = event.relatedTarget;
        if (!clickedPhoto) return;

        modalImage.src = clickedPhoto.getAttribute('data-image');
        modalImage.alt = clickedPhoto.getAttribute('data-title');
        modalTitle.textContent = clickedPhoto.getAttribute('data-title');
    });

    // Kosongkan gambar saat modal ditutup agar tidak muncul foto lama
    photoModal.addEventListener('hidden.bs.modal', function () {
        modalImage.src = '';
    });

    /* ---------- Efek navbar saat scroll ---------- */
    const navbar = document.querySelector('.navbar');

    function handleNavbarScroll() {
        navbar.classList.toggle('navbar-scrolled', window.scrollY > 50);
    }

    handleNavbarScroll();
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });

    /* ---------- Tutup menu mobile setelah link diklik ---------- */
    const navCollapse = document.getElementById('navbarNav');

    document.querySelectorAll('#navbarNav .nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
            if (navCollapse.classList.contains('show')) {
                bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
            }
        });
    });

});