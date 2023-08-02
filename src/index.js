// images must be named integers >1 with extension "jpg" f.e. "4.jpg", "5.jpg"

(() => {
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    const slider = document.getElementById('slider');

    let currentImg = 1;

    const minImg = 1;
    const maxImg = 3; // change the value if you add more photos

    const loadImg = () => {
        slider.style.backgroundImage = `url(./img/${currentImg}.jpg)`;
    };

    const updateCurrentImgDot = () => {
        const dots = document.querySelectorAll('.dot');

        for (let i = 0; i < maxImg; i += 1) {
            if (dots[i].classList.contains('active-dot')) {
                dots[i].classList.remove('active-dot');
                dots[i].classList.add('disable-dot');
            }
        }

        dots[currentImg - 1].classList.remove('disable-dot');
        dots[currentImg - 1].classList.add('active-dot');
    };

    leftArrow.addEventListener('click', () => {
        if (currentImg === minImg) {
            currentImg = maxImg;
        } else if (currentImg > minImg) {
            currentImg -= 1;
        }
        loadImg();
        updateCurrentImgDot();
    });

    rightArrow.addEventListener('click', () => {
        if (currentImg === maxImg) {
            currentImg = minImg;
        } else if (currentImg < maxImg) {
            currentImg += 1;
        }
        loadImg();
        updateCurrentImgDot();
    });

    const dotsContainer = document.getElementById('dots');
    for (let i = 1; i <= maxImg; i += 1) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.classList.add('disable-dot');
        dotsContainer.appendChild(dot);
    }

    updateCurrentImgDot();
})();
