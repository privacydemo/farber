// Create an overlay div
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
overlay.style.zIndex = '9999';
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.color = '#fff';
overlay.style.fontSize = '3rem';
overlay.style.textAlign = 'center';
overlay.style.fontFamily = 'Arial, sans-serif';

// Use the relative URL for the image
overlay.innerHTML = `
    <div style="text-align: center;">
        <div style="background: url(../img/cutieTundra.png) no-repeat center center; background-size: contain; width: 400px; height: 400px; margin: auto;"></div>
        <p style="margin-top: 20px; color: white;">Give me more treaties NOW</p>
    </div>
`;

document.body.appendChild(overlay);

const screamAudio = new Audio('../audio/huskyTalk.mp3'); // Relative path for audio
screamAudio.play();

setTimeout(() => {
    document.body.removeChild(overlay);
}, 10000);
