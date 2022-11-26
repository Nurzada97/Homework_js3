// Text
const text1 = document.querySelector('.text1');

let t1_btn = document.createElement('button');
let t1_p = document.createElement('p');

t1_btn.textContent = 'Try Me';
t1_btn.addEventListener('click', () => {
  t1_p.style.display = t1_p.style.display === 'none' ? 'flex' : 'none';
});
t1_btn.style.padding = '5px 10px';

t1_p.innerText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, porro consequatur? Id voluptas iure, rem aliquid aspernatur eum ullam sapiente harum, natus nam consequatur alias, quia tenetur aut assumenda voluptate.';
t1_p.style.padding = '12px';
t1_p.style.fontSize = '26px';

text1.appendChild(t1_btn);
text1.appendChild(t1_p);

// Change color
const change = document.querySelector('.change');
const colorArray = [
  '#D2B4DE ',
  '#2980B9',
  '#52BE80',
  '#A9CCE3',
  '#5499C7',
  '#AED6F1',
  '#4A235A',
  '#D68910',

  
];

const t2_ul = document.createElement('ul');

for (const color of colorArray) {
  let t2_li = document.createElement('li');
  t2_li.style = `width: 25px; height: 25px; background-color: ${color}`;
  t2_li.style.cursor = 'pointer';
  t2_li.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = color;
    change.style.backgroundColor = color;
  });
  t2_li.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = '#2980B9';
    change.style.backgroundColor = 'pink';
  });
  t2_ul.appendChild(t2_li);
}
change.appendChild(t2_ul);

// Movies 
const movies = document.querySelector('.movies');
const imdb = [
  {
    name: 'Harry Potter',
    year: 1997,
    desc: 'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.',
  },
  {
    name: 'Interstellar',
    year: 2014,
    desc: ' Interstellar is a 2014 movie that was directed by Christopher Nolan and written by Christopher Nolan and Jonathan Nolan. The film received four Academy Award nominations for Best Original Score, Best Production Design, Best Sound Mixing, and Best Sound Editing – and the VFX (Visual Effects) were so well regarded that they won the Oscar for Best Visual Effects.',
  },
  {
    name: 'Friends',
    year: 1994,
    desc: 'Friends is an American television sitcom created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons.[1] With an ensemble cast starring Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry and David Schwimmer, the show revolves around six friends in their 20s and 30s who live in Manhattan, New York City. The series was produced by Bright/Kauffman/Crane Productions, in association with Warner Bros. Television. The original executive producers were Kevin S. Bright, Kauffman, and Crane.',
  },
 
];

const t3_ul = document.createElement('ul');

const t3_div = document.createElement('div');
t3_div.classList.add('filminfo');
t3_div.style.padding = '20px';
const t3_title = document.createElement('p');
const t3_year = document.createElement('p');
const t3_desc = document.createElement('p');
t3_div.appendChild(t3_title);
t3_div.appendChild(t3_year);
t3_div.appendChild(t3_desc);

for (const film of imdb) {
  let t3_li = document.createElement('li');
  t3_li.textContent = film.name;
  t3_li.style.cursor = 'pointer';
  t3_li.addEventListener('mouseover', () => {
    t3_div.style.display = 'block';
    t3_title.innerHTML = `Name: <b>${film.name}</b>`;
    t3_year.innerText = `Relaese year: ${film.year}`;
    t3_desc.innerHTML = `Description: <i>${film.desc}</i>`;
  });
  t3_li.addEventListener('mouseout', () => {
    t3_div.style.display = 'none';
  });
  t3_ul.appendChild(t3_li);
}

movies.appendChild(t3_ul);
movies.appendChild(t3_div);

// Keyboard
const keyboard = document.querySelector('.keyboard');
const t4_keys = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
];
const t4_keyboard = document.createElement('div');
const t4_lines = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
const t4_p = document.createElement('p');
t4_p.classList.add('t4_p');
t4_p.style.position = 'fixed';
t4_p.style.top = 'calc(50% - 75px)';
t4_p.style.left = 'calc(50% - 75px)';
keyboard.appendChild(t4_p);

function setTimer() {
  t4_p.style.opacity = '0%';
  t4_p.style.zIndex = '-1';
}

var timer = setTimeout(setTimer, 1000);

for (const lineNumer in t4_lines) {
  t4_keyboard.appendChild(t4_lines[lineNumer]);
  for (const key of t4_keys[lineNumer]) {
    let btn = document.createElement('button');
    btn.textContent = key;
    btn.style.width = '30px';
    btn.style.height = '30px';
    btn.addEventListener('click', () => {
      clearInterval(timer);
      t4_p.innerText = key.toUpperCase();
      t4_p.style.opacity = '100%';
      t4_p.style.zIndex = '10';
      timer = setInterval(setTimer, 1000);
    });
    t4_lines[lineNumer].appendChild(btn);
  }
}
keyboard.appendChild(t4_keyboard);