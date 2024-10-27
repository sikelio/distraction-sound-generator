const generateSoundPattern = () => {
    const minutesInput = document.getElementById('minutesInput');
    const secondsInFiveMinutes =
        (
            minutesInput.value === 0 || minutesInput.value == undefined || minutesInput.value == ''
                ? 5
                : minutesInput.value
        ) * 60;
    
    let pattern = [];
    let currentIndex = 0;
    let nbHighSounds = 0;
    let nbLowSounds = 0;

    while (currentIndex < secondsInFiveMinutes) {
        const value = Math.floor(Math.random() * 3) - 1;

        pattern[currentIndex] = value;

        if (value == 1) {
            nbHighSounds++;
        }
        else if (value == -1) {
            nbLowSounds++;
        }

        currentIndex += Math.floor(Math.random() * 4) + 2;
    }

    document.getElementById('nbHighSounds').innerText = `0 / ${nbHighSounds}`;
    document.getElementById('nbLowSounds').innerText = `0 / ${nbLowSounds}`;

    playPattern(pattern, nbHighSounds, nbLowSounds);
};

const playPattern = (pattern, totalHighSounds, totalLowSounds) => {
    let currentIndex = 0;
    let currentHighSounds = 0;
    let currentLowSounds = 0;

    const playNextSound = () => {
        if (currentIndex >= pattern.length) {
            return;
        }

        if (pattern[currentIndex] === 1) {
            generateTone(440);

            currentHighSounds++;

            document.getElementById('nbHighSounds').innerText = `${currentHighSounds} / ${totalHighSounds}`;
        } else if (pattern[currentIndex] === -1) {
            generateTone(220);

            currentLowSounds++;

            document.getElementById('nbLowSounds').innerText = `${currentLowSounds} / ${totalLowSounds}`;
        }
        
        currentIndex++;

        setTimeout(playNextSound, 1000);
    }

    playNextSound();
};

const generateTone = (frequency) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.5);
}

document.getElementById('generateBtn').addEventListener('click', generateSoundPattern);
