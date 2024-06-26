var isPlaying = false;
        var audio = document.getElementById('backgroundMusic');
        var button = document.getElementById('audioButton');

        function togglePlay() {
            if (isPlaying) {
                audio.pause();
                button.textContent = 'Play Music';
            } else {
                audio.play();
                button.textContent = 'Pause Music';
            }
            isPlaying = !isPlaying;
        }

        audio.onplaying = function() {
            isPlaying = true;
            button.textContent = 'Pause Music';
        };

        audio.onpause = function() {
            isPlaying = false;
            button.textContent = 'Play Music';
        };