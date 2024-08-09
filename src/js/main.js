
    const play = document.querySelector('.video-container');
    const contr = document.querySelector('.video-container__video');

    play.addEventListener('click', () => {
        contr.removeAttribute('poster');
        contr.setAttribute('autoplay', '');
        contr.setAttribute('controls', '');
        

        if (play.classList.contains('psevdo')){
            play.classList.remove('psevdo');
        }
        
    })

    const youtubePlay = document.querySelector('.youtube-player');
    const youtubeCont = document.querySelector('.youtube-container__prew');

    youtubeCont.addEventListener('click', () => {
        youtubeCont.style.display = 'none';

        youtubePlay.src += "&autoplay=1";
    })

