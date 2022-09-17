const hamburger = document.querySelector('#ham_menu_button');
const close = document.querySelector('#nav-close-btn');
const nav = document.querySelector('.mobile-nav');
const arr = [hamburger, close];
arr.forEach((e) => {
  e.addEventListener('click', (e) => {
    e.preventDefault();
    close.classList.toggle('visible');
    hamburger.classList.toggle('hidden');
    nav.classList.toggle('visible');
  });
});

const speakerData = [
  {
    id: 1,
    image: './imgs/speaker-1.png',
    name: 'Dan Koerner',
    position: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    bio: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    id: 2,
    image: './imgs/speaker-2.png',
    name: 'Elena Zavelev',
    position: 'Art Center Nabi Director, CC Korea Director',
    bio: 'As the author of <Digital Art Art of Our Time>, she opened \'Art Center Nabi\', Korea\'s first digital art institution in 2000, and is currently serving there.',
  },
  {
    id: 3,
    image: 'imgs/speaker-3.png',
    name: 'Dr. Brent Ridge',
    position: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
    bio: 'By developing Asia\'s first Internet protocol network SDN and leading Korea\'s first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.',
  },
  {
    id: 4,
    image: 'imgs/speaker-4.png',
    name: 'Francesca Fini',
    position: 'Head of the Young Pirates of Europe',
    bio: 'European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU\'s copyright law in July.',
  },
  {
    id: 5,
    image: 'imgs/speaker-5.png',
    name: 'Larisa Barbu',
    position: 'Secretary General of the Wikimedia Foundation',
    bio: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages every month to over 100 million people, nearly half of the world\'s population.',
  },
  {
    id: 6,
    image: 'imgs/speaker-6.png',
    name: 'Trevor Jones',
    position: 'Creative Commons CEO, Former Mozilla Foundation COO',
    bio: 'He led open source projects at the Mozilla Foundation and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.',
  },
];

const speakersList = document.querySelector('.speakers-list');
let displayAll = '';
for (let i = 0; i < speakerData.length; i += 1) {
  displayAll += `<li class="speaker">
              <div class="speaker-img">
                <img src="${speakerData[i].image}" alt="">
              </div>
              <div class="speaker-info-wrap">
                <div class="eng-name">
                  <p>${speakerData[i].name}</p>
                </div>
                <div class="position">
                  <p>${speakerData[i].position}</p>
                </div>
                <div class="bio">
                  <p>${speakerData[i].bio}</p>
                </div>
              </div>
            </li>`;
}
speakersList.innerHTML = displayAll;