document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const imgSrc = this.getAttribute('href');
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${imgSrc}" alt="Full-size Image">
                </div>
            `;
            document.body.appendChild(lightbox);

            lightbox.addEventListener('click', function () {
                document.body.removeChild(lightbox);
            });
        });
    });
});