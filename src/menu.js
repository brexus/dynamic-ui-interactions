const menu = (() => {
    const hamburger = document.getElementById('hamburger');

    const hamburgerListener = () => {
        const navbar = document.querySelector('.navbar');

        hamburger.addEventListener('click', () => {
            if (hamburger.classList.contains('hamb-icon')) {
                hamburger.classList.toggle('hamb-icon');
                hamburger.classList.toggle('close-icon');
                hamburger.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>';
            } else {
                hamburger.classList.toggle('hamb-icon');
                hamburger.classList.toggle('close-icon');
                hamburger.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>';
            }

            // navbar.classList.toggle("open");
            if (navbar.style.right === '10px') {
                navbar.style.right = '-100%';
            } else {
                navbar.style.right = '10px';
            }
        });
    };

    const start = () => {
        hamburgerListener();
    };

    return { start };
})();

export default menu;
