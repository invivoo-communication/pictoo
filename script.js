let currentItem = {}

const items = [
  {
    img: 'books.png',
    title: 'Livre préféré',
    sentence: 'Quel est ton livre préféré ?'
  },
  {
    img: 'chocolate.png',
    title: 'Péché mignon',
    sentence: 'Quel est ton péché mignon ?'
  },
  {
    img: 'drink.png',
    title: 'Boisson favorite',
    sentence: 'Quelle est ta boisson favorite ?'
  },
  {
    img: 'emoji.png',
    title: 'Émoji du jour',
    sentence: 'Quel est ton émoji du jour ?'
  },
  {
    img: 'food.png',
    title: 'Plat préféré',
    sentence: 'Quel est ton plat préféré ?'
  },
  {
    img: 'gamepad.png',
    title: 'Jeu préféré',
    sentence: 'Quel est ton jeu préféré ?'
  },
  {
    img: 'picture.png',
    title: 'Photo préférée',
    sentence: 'Quel est ta photo préférée ?'
  },
  {
    img: 'planet.png',
    title: 'Destination de rêve',
    sentence: 'Quelle serait ta destination de rêve ?'
  },
  {
    img: 'plane.png',
    title: 'Voyage préféré',
    sentence: 'Quelle est tonvoyage préféré ?'
  },
  {
    img: 'popcorn.png',
    title: 'Film ou série préféré(e)',
    sentence: 'Quelle est ton film ou ta série préféré(e) ?'
  },
  {
    img: 'radio.png',
    title: 'Musique préférée',
    sentence: 'Quelle est ta musique préférée ?'
  },
  {
    img: 'skateboard.png',
    title: 'Activité préférée',
    sentence: 'Quelle est ton activité préférée ?'
  },
]

const button = document.getElementById("button");
const image = document.getElementById("image");
const container = document.getElementById("image-container");
const audio = document.getElementById('audio');

button.addEventListener("click", startSmoothScrolling);

// J'ai commenté la fonction (corrigée) pour ajouter le scroll qui ralentit
/* function startScrolling() {
  button.disabled = true;
  button.classList.add("button-breathe"); // Add the "button-breathe" class to start the animation
  let currentIndex = 0;
  let intervalDuration = 100;
  const intervalId = setInterval(() => {
    currentIndex = parseInt((Math.random() * items.length));
    if (currentIndex === items.length) {
      currentIndex = 0;
    }
    currentItem = items[currentIndex]
    image.src = 'img/' + currentItem.img;
    const timeLeft = 6000 - (currentIndex + 1) * intervalDuration;
    if (timeLeft < 1000) {
      intervalDuration += timeLeft / 120;
    } else if (timeLeft < 2000) {
      intervalDuration += timeLeft / 140;
    } else if (timeLeft < 3000) {
      intervalDuration += timeLeft / 160;
    }
  }, intervalDuration);

  audio.currentTime = 0;
  audio.play();

  setTimeout(() => {
    clearInterval(intervalId);
    button.disabled = false;
    button.classList.remove("button-breathe"); // Remove the "button-breathe" class to stop the animation
    audio.pause();
    displaySentence(currentItem.sentence || '')
  }, 6000);
} */


function startSmoothScrolling() {
  displaySentence('')
  button.disabled = true;
  button.classList.add("button-breathe"); // Add the "button-breathe" class to start the animation

  const totalTime = 6500;
  let elapsedTime = 0;

  let currentSettimeout = 0;
  audio.currentTime = 0;
  audio.play();
  const nextTick = (time) => {
    currentSettimeout = setTimeout(() => {
      nextIndex = parseInt((Math.random() * items.length));
      if (nextIndex === items.length) {
        nextIndex = 0;
      }
      currentItem = items[nextIndex]
      image.src = 'img/' + currentItem.img;
      elapsedTime += time

      if(elapsedTime >= totalTime) { 
        clearTimeout(currentSettimeout)
        displaySentence(currentItem.sentence || '')
        button.disabled = false;
        button.classList.remove("button-breathe"); // Remove the "button-breathe" class to stop the animation
        audio.pause();
      } 
      else if(totalTime - elapsedTime <= 1000) {
        currentSettimeout = nextTick(666)
        return
      }
      else if(totalTime - elapsedTime <= 2000) {
        currentSettimeout = nextTick(500)
        return
      }
      else if(totalTime - elapsedTime <= 3000) {
        currentSettimeout = nextTick(250)
        return
      }
      else if(totalTime - elapsedTime <= 4000) {
        currentSettimeout = nextTick(125)
        return
      } else {
        currentSettimeout = nextTick(100)
        return
      }

    }, time)
  }

  currentSettimeout = nextTick(100)
}

function displaySentence(sentence) {
  document.getElementById('sentence').innerText = sentence;
}
