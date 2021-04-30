const dataBase = [
    {
        id: 1,
        name: 'Gojo Satoru',
        age: 28,
        img: 'https://pbs.twimg.com/media/EvcizDkWQAABXn3.jpg',
        description: 'Gojo Satoru -  is one of the main protagonists of Jujutsu Kaisen. He is a special grade jujutsu sorcerer and a teacher at the Tokyo Metropolitan Curse Technical College.',
        isLiked: null
    },
    {
        id: 2,
        age: 15,
        name: 'Itadori Yuji',
        img: 'https://i.pinimg.com/originals/f3/ae/12/f3ae12ee323def2e2d6bb95d75e9a9ad.jpg',
        description: 'Itadori Yuji - is the main protagonist of the Jujutsu Kaisen series. He is the son of Jin Itadori and grandson of Wasuke Itadori, who was living a normal life until he encountered Megumi and one of Sukuna "s fingers. After becoming Sukuna"s vessel, Yuji began attending Tokyo Jujutsu High alongside Megumi and Nobara as first-year students.',
        isLiked: null
    },
    {
        id: 3,
        age: 10000,
        name: 'Sukuna',
        img: 'https://pbs.twimg.com/media/EpoDyKEVQAECkS7.jpg',
        description: 'Sukuna - more often called just Sukuna (宿すく儺な Sukuna?), is a mighty cursed spirit known as the undisputed King of Curses (呪のろいの王おう Noroi no Ō?). He serves as one of the primary antagonists of Jujutsu Kaisen.',
        isLiked: null
    },
    {
        id: 4,
        age: 17,
        name: 'Miwa Casumi',
        img: 'https://shikimori.one/system/characters/original/164485.jpg',
        description: 'Miwa Casumi -  is a character in Jujutsu Kaisen. She is a second-year at Kyoto Jujutsu High.',
        isLiked: null
    },
    {
        id: 5,
        age: 15,
        name: 'Megumi Fushiguro',
        img: 'https://i.pinimg.com/736x/47/30/23/473023b58c7821120d4f4d0772c90c07.jpg',
        description: 'Megumi Fushiguro is the deuteragonist of the Jujutsu Kaisen series. He is a first-year student at the Jujutsu High and also a descendant of the Zenin family.',
        isLiked: null
    },
    {
        id: 6,
        age: 15,
        name: 'Nobara Kugisaki',
        img: 'https://a-static.besthdwallpaper.com/nobara-kugisaki-khammer-taym-oboi-640x960-70726_169.jpg',
        description: 'Nobara Kugisaki is the tritagonist of Jujutsu Kaisen. She is a first-year at Tokyo Metropolitan Curse Technical College.',
        isLiked: null
    },
    {
        id: 7,
        age: 16,
        name: 'Yuta Okkotsu',
        img: 'https://i.pinimg.com/originals/50/08/49/500849a6e2e651d374ce0f4049e43afe.jpg',
        description: 'Yuta Okkotsu is the main protagonist of Jujutsu Kaisens prequel series Jujutsu Kaisen 0: Jujutsu High. He was initially a Special Grade cursed human haunted by his late childhood friend, Rika Orimoto. Satoru Gojo mentored Yuta and enrolled him at Tokyo Jujutsu High. Yuta is currently a second-year student at Jujutsu High. He was training overseas in Africa with Miguel until after the Shibuya Incident when he returned to Tokyo.',
        isLiked: null
    },
    {
        id: 8,
        age: 16,
        name: 'Inumaki Toge',
        img: 'https://i.pinimg.com/originals/d6/89/3f/d6893f909892422167fd1b7ddf78dae8.jpg',
        description: 'Inumaki Toge is a supporting character in the Jujutsu Kaisen series. He is a descendant of the Toge Family who inherited the rare and powerful Cursed Speech technique. Toge is a second-year at Tokyo Jujutsu High along Yuta, Maki, and Panda.',
        isLiked: null
    },
    {
        id: 9,
        age: 16,
        name: 'Zenin Maki',
        img: 'https://i.pinimg.com/originals/c0/f1/97/c0f197a20a54b107310150201d4c9b41.jpg',
        description: 'Zenin Maki is a major supporting character in Jujutsu Kaisen and one of the main protagonists of the Prequel Series.',
        isLiked: null
    },
    {
        id: 10,
        age: 16,
        name: 'Panda',
        img: 'https://cdn.myanimelist.net/images/characters/16/423950.jpg',
        description: 'Panda  is a supporting character in Jujutsu Kaisen and a protagonist in the Prequel Series. Not an actual panda, he is an Abrupt Mutated Cursed Corpse created by principal Masamichi Yaga and attends Jujutsu High as a second-year student.',
        isLiked: null
    },
    {
        id: 11,
        age: 16,
        name: 'Zenin Mai',
        img: 'https://i.pinimg.com/originals/c9/dc/05/c9dc0547b9408e8af2e093bba513aafe.jpg',
        description: 'Zenin Mai - is a character in Jujutsu Kaisen. She is a second-year at Kyoto Metropolitan Curse Technical College.',
        isLiked: null
    },
    {
        id: 12,
        age: 30,
        name: 'Toji Fushiguro',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtjcvo2qVzbaNtiZhPVjpjvWBU6nHoBvJa-3Krjs5COkHM-pbugDcu0hFQEAOQFalEn1Q&usqp=CAU',
        description: 'Toji Fushiguro born Toji Zenin (禪ぜん院いん甚とう爾じ Zenin Tōji?) is a recurring character in the Jujutsu Kaisen series. He was a former member of the Zenin family and the infamous assassin, known as the Sorcerer Killer (術じゅつ師し殺ごろし Jutsushi Goroshi?), contracted by the Time Vessel Association among other groups throughout his time as a non-curse user. He was also the father of Megumi Fushiguro and former enemy of Satoru Gojo. While working for the Star Religious Group, Toji Fushiguro serves as the primary antagonist of the Gojos Past Arc.',
        isLiked: null
    }
]

const container = document.querySelector('.container');
const input = document.querySelector('.searchInput');
const likedBtn = document.querySelector('.likedBtn');
const homeBtn = document.querySelector('.homeBtn');
const savedBtn = document.querySelector('.savedBtn');
const likeBtn = document.querySelector('.like');

window.addEventListener('load', () => {
    if(localStorage.getItem('database')){
        return
    }else {
        localStorage.setItem('database', JSON.stringify(dataBase));
    }
});

const dbFromLocal = JSON.parse(localStorage.getItem('database'));

function showCards(arr){
    const filteredArr = arr.map(({id, img}) => {
        return `
            <div style="background: url('${img}') center / cover no-repeat" class="card">
                <button onclick="showSingle(${id})" href="" class="watch">More</button>
                <div style="background: url('${img}') center / cover no-repeat" class="circle"></div>
                <div class="product"></div>
                <button onclick="like(${id})" class="like"><i class="fas fa-heart"></i></button>
            </div>
        `
    }).join('');

    container.innerHTML = filteredArr;
}

showCards(dbFromLocal);

input.addEventListener('input', e => {
    const search = e.target.value.toUpperCase();
    
    const filteredArr = dbFromLocal.filter(({name}) => name.toUpperCase().includes(search));
    showCards(filteredArr);
});

function showSingle(id){
    const filterArr = dbFromLocal.filter(item => item.id === id);
    localStorage.setItem('singleCharacter', JSON.stringify(filterArr));
    window.open('single.html', '_self');
}

function like(id){
    const newDB = dbFromLocal.map(item => {
        if(item.id === id){
            if(item.isLiked === null){
                return {
                    ...item,
                    isLiked: true
                }
            }else{
                return {
                    ...item,
                    isLiked: !item.isLiked
                }
            }
        }else{
            return item
        }
    });

    localStorage.setItem('database', JSON.stringify(newDB));
    window.location.reload();
}

likedBtn.addEventListener('click', e => {
    e.preventDefault();
    localStorage.setItem('showLiked', true)
    window.open('favorites.html', '_self');
});

homeBtn.addEventListener('click', e => {
    e.preventDefault();
    localStorage.setItem('showLiked', false)
    window.open('index.html', '_self');
});

savedBtn.addEventListener('click', e => {
    e.preventDefault();

    window.open('single.html', '_self');
});