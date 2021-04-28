const container = document.querySelector('.container');
const likedBtn = document.querySelector('.likedBtn');
const homeBtn = document.querySelector('.homeBtn');
const savedBtn = document.querySelector('.savedBtn');

window.addEventListener('load', () => {
    const likedCharacters = JSON.parse(localStorage.getItem('singleCharacter'));

    function showCards(arr){
        const filteredArr = arr.map(item => {
            return `
                <div style="background: url('${item.img}') center / cover no-repeat" class="card">
                    <div class="product"></div>
                    <div class="watch" style="top: 35%;">${item.name}. ${item.age} years old.</div>
                </div>
                <p style="background: red; padding: 10px 15px; color: #fff; border-radius: 20px;"> ${item.description}</p>
            `
        }).join('');
    
        container.innerHTML = filteredArr;
    }

    showCards(likedCharacters);

});

likedBtn.addEventListener('click', e => {
    e.preventDefault();

    window.open('favorites.html', '_self');
});

homeBtn.addEventListener('click', e => {
    e.preventDefault();

    window.open('index.html', '_self');
});

savedBtn.addEventListener('click', e => {
    e.preventDefault();

    window.open('single.html', '_self');
});