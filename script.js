// JavaScript to create endless scrolling effect by duplicating the ASCII cat
const container = document.querySelector('#cat-container');
const asciiCats = [
    `
     /\\_____/\\
    /  o   o  \\
   ( ==  ^  == )
    )         (
   (           )
  ( (  )   (  ) )
 (__(__)___(__)__)` // Add more ASCII cats here
];

function addCats() {
    const newCat = document.createElement('pre');
    newCat.classList.add('ascii-cat');
    newCat.textContent = asciiCats[Math.floor(Math.random() * asciiCats.length)];
    container.appendChild(newCat);
}

for (let i = 0; i < 10; i++) {
    addCats();
}

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        addCats();
    }
});

// Interactive Buttons
const changeBgButton = document.getElementById('change-bg');
const changeCatButton = document.getElementById('change-cat');

changeBgButton.addEventListener('click', () => {
    document.body.style.background = `linear-gradient(${Math.floor(Math.random() * 360)}deg, #f3ec78, #af4261)`;
});

changeCatButton.addEventListener('click', () => {
    const allCats = document.querySelectorAll('.ascii-cat');
    allCats.forEach(cat => {
        cat.textContent = asciiCats[Math.floor(Math.random() * asciiCats.length)];
    });
});
