// Custom text (set by the developer)
const customText = `Hey babe.

I know this isn't much, I'm not used to making websites.
But just know, I love you. I really do.

You are the best thing that ever happened to me, ever.
And as much as I express it in real life with words and actions,
I can't love you enough.
I'll always love you more than yesterday,
less than tomorrow,
and never enough.
I Love You.
My Other Half.`;

// Get the text element
const textElement = document.getElementById('custom-text');

// Create a cursor element
const cursor = document.createElement('span');
cursor.classList.add('cursor');
textElement.appendChild(cursor);

// Function to simulate typewriter effect with sentence delay
function typeWriter(text, element, speed = 50, sentenceDelay = 500) {
  let i = 0;
  let line = 0;
  const lines = text.split('\n'); // Split text into lines

  function type() {
    if (line < lines.length) {
      if (i < lines[line].length) {
        element.insertBefore(document.createTextNode(lines[line].charAt(i)), cursor);
        i++;
        setTimeout(type, speed);
      } else {
        // Move to the next line after a delay
        line++;
        i = 0;
        if (line < lines.length) {
          element.insertBefore(document.createTextNode('\n'), cursor);
          setTimeout(type, sentenceDelay);
        }
      }
    }
  }
  type();
}

// Start the typewriter effect
typeWriter(customText, textElement);

// Function to generate random positions
function getRandomPosition() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  return { x, y };
}

// Add floating hearts
for (let i = 0; i < 20; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  const { x, y } = getRandomPosition();
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.appendChild(heart);
}

// Add purple sparks
for (let i = 0; i < 20; i++) {
  const spark = document.createElement('div');
  spark.classList.add('spark');
  spark.innerHTML = '✨';
  const { x, y } = getRandomPosition();
  spark.style.left = `${x}px`;
  spark.style.top = `${y}px`;
  document.body.appendChild(spark);
}

// Add glowing stars
for (let i = 0; i < 20; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.innerHTML = '⭐';
  const { x, y } = getRandomPosition();
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
  document.body.appendChild(star);
}

// Add floating love notes
for (let i = 0; i < 10; i++) {
  const loveNote = document.createElement('div');
  loveNote.classList.add('love-note');
  loveNote.innerHTML = '💌';
  const { x, y } = getRandomPosition();
  loveNote.style.left = `${x}px`;
  loveNote.style.top = `${y}px`;
  document.body.appendChild(loveNote);
}