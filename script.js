let currentItem = {}

const items = [
  {
    img: 'books.png',
    title: 'Livre préféré',
    sentence: 'Ton livre préféré ?'
  },
  {
    img: 'chocolate.png',
    title: 'Péché mignon',
    sentence: 'Ton péché mignon ?'
  },
  {
    img: 'drink.png',
    title: 'Boisson favorite',
    sentence: 'Ta boisson favorite ?'
  },
  {
    img: 'emoji.png',
    title: 'Émoji du jour',
    sentence: 'Ton émoji du jour ?'
  },
  {
    img: 'food.png',
    title: 'Plat préféré',
    sentence: 'Ton plat préféré ?'
  },
  {
    img: 'gamepad.png',
    title: 'Jeu préféré',
    sentence: 'Ton jeu préféré ?'
  },
  {
    img: 'picture.png',
    title: 'Photo préférée',
    sentence: 'Ta photo préférée ?'
  },
  {
    img: 'planet.png',
    title: 'Destination de rêve',
    sentence: 'Ta destination de rêve ?'
  },
  {
    img: 'plane.png',
    title: 'Voyage préféré',
    sentence: 'Ton voyage préféré ?'
  },
  {
    img: 'popcorn.png',
    title: 'Film ou série préféré(e)',
    sentence: 'Ton film ou ta série préféré(e) ?'
  },
  {
    img: 'radio.png',
    title: 'Musique préférée',
    sentence: 'Ta musique préférée ?'
  },
  {
    img: 'skateboard.png',
    title: 'Activité préférée',
    sentence: 'Ton activité préférée ?'
  },
]

const button = document.getElementById("button");
const image = document.getElementById("image");
const container = document.getElementById("image-container");
const audioPlayers = {
  audio1: document.getElementById('audio1'),
  audio2: document.getElementById('audio2'),
  audio3: document.getElementById('audio3'),
}

button.addEventListener("click", startSmoothScrolling);

function startSmoothScrolling() {
  displaySentence('')
  button.disabled = true;
  button.classList.add("button-breathe"); // Add the "button-breathe" class to start the animation

  const totalTime = 6500;
  let elapsedTime = 0;

  let currentSettimeout = 0;

  const nextTick = (time, even) => {
    currentSettimeout = setTimeout(() => {
      nextIndex = parseInt((Math.random() * items.length));
      if (nextIndex === items.length) {
        nextIndex = 0;
      }
      currentItem = items[nextIndex]
      image.src = 'img/' + currentItem.img;

      audioPlayers[`audio${even?2:1}`].currentTime = 0;
      audioPlayers[`audio${even?2:1}`].play();

      elapsedTime += time

      if(elapsedTime >= totalTime) { 
        clearTimeout(currentSettimeout)
        displaySentence(currentItem.sentence || '')
        audioPlayers['audio3'].play();
        button.disabled = false;
        button.classList.remove("button-breathe"); // Remove the "button-breathe" class to stop the animation
      } 
      else if(totalTime - elapsedTime <= 1000) {
        currentSettimeout = nextTick(666, !even)
        return
      }
      else if(totalTime - elapsedTime <= 2000) {
        currentSettimeout = nextTick(500, !even)
        return
      }
      else if(totalTime - elapsedTime <= 3000) {
        currentSettimeout = nextTick(250, !even)
        return
      }
      else if(totalTime - elapsedTime <= 4000) {
        currentSettimeout = nextTick(125, !even)
        return
      } else {
        currentSettimeout = nextTick(100, !even)
        return
      }

    }, time)
  }

  currentSettimeout = nextTick(100, false)
}

function displaySentence(sentence) {
  document.getElementById('sentence').innerText = sentence;
}
