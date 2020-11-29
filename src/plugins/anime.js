import anime from 'animejs';

export function carousel(element) {
    anime({
        targets: element,
        keyframes: [
            {opacity:1, translateX: 326},
            {opacity:0, translateX: 652},
        ],
        duration: 6000,
        delay: anime.stagger(3000), 
        loop: true,
        easing: 'spring(1, 80, 10, 0)',
    });
}

export function fadeIn(element) {
    anime({
        targets: element,
        opacity:1,
        delay: anime.stagger(300),
        duration:10000,
    });
}