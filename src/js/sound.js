import mp3 from '../assets/tada.mp3';

export function getSound() {
    var audio = new Audio();
    audio.src = mp3;
    return audio;
}