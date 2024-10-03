document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const dots = document.querySelectorAll('.dot');
    const startButton = document.getElementById('startButton');
    const autoplayButton = document.getElementById('autoplayButton');
    const resetButton = document.getElementById('resetButton');
    const sound = document.getElementById('sound');
    let playerPosition = 0;
    const speed = 6; // Adjust the speed as needed
    let autoplay = false;

    function movePlayer() {
        playerPosition += speed;
        player.style.left = playerPosition + 'px';

        if (playerPosition < document.querySelector('.line').offsetWidth - player.offsetWidth) {
            requestAnimationFrame(movePlayer);
        }
    }

    function checkDots() {
        dots.forEach(dot => {
            if (Math.abs(playerPosition - dot.offsetLeft) < 20) { // More lenient timing
                dot.style.backgroundColor = 'green';
                if (autoplay) {
                    sound.play();
                }
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'j') {
            sound.play();
            checkDots();
        }
    });

    startButton.addEventListener('click', () => {
        playerPosition = 0;
        player.style.left = playerPosition + 'px';
        autoplay = false;
        movePlayer();
    });

    autoplayButton.addEventListener('click', () => {
        playerPosition = 0;
        player.style.left = playerPosition + 'px';
        autoplay = true;
        movePlayer();
    });

    resetButton.addEventListener('click', () => {
        dot.style.backgroundColor = 'red';
    });

    function movePlayer() {
        playerPosition += speed;
        player.style.left = playerPosition + 'px';

        if (autoplay) {
            checkDots();
        }

        if (playerPosition < document.querySelector('.line').offsetWidth - player.offsetWidth) {
            requestAnimationFrame(movePlayer);
        }
    }
});
