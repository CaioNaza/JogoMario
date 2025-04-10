const mario = document.querySelector('.mario'); 
const pipe = document.querySelector('.pipe');

const gameOverAudio = new Audio('./som/smb_gameover.wav');
const jumpAudio = new Audio('./som/smb_jump-small.wav');

const jump = () => {
    //add o jump
    mario.classList.add('jump');
    //Add audio quando pula / aperta qualquer tecla 
    jumpAudio.courrentTime = 0;
    jumpAudio.play();
    

    //Retira o jump para que ele volte bottom
    setTimeout(() => {

        mario.classList.remove('jump');
    }, 700);

}
document.addEventListener('keydown', (jump))

// Toque na tela (mobile)
document.addEventListener('touchstart', () => {
    jump();
  });


const loop  = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (verificaColisao(pipePosition, marioPosition)) {
        gameOver(pipePosition, marioPosition);
        clearInterval(loop);
    }
        
    
},10);
document.addEventListener('keydown', jump);

function verificaColisao(pipePosition, marioPosition) {
    return pipePosition <= 120 && pipePosition > 0 && marioPosition < 80;
}

function gameOver(pipePosition, marioPosition) {
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;
    mario.src = './images/game-over.png';

    gameOverAudio.currentTime = 0;
    gameOverAudio.play();

    const gameOverDiv = document.getElementById('gameOver');
    gameOverDiv.style.display = 'block';
}
