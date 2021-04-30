const container = document.querySelector('.container');
const likedBtn = document.querySelector('.likedBtn');
const homeBtn = document.querySelector('.homeBtn');
const savedBtn = document.querySelector('.savedBtn');
const database = JSON.parse(localStorage.getItem('database'));

window.addEventListener('load', () => {
    const likedCharacters = JSON.parse(localStorage.getItem('database'));
    let filteredArr;
    const showLiked = JSON.parse(localStorage.getItem('showLiked'))
    if(likedCharacters){
        if(showLiked === true){
            filteredArr = likedCharacters.filter(item => item.isLiked);
        }else{
            filteredArr = likedCharacters.filter(item => item.isLiked === false);
        }
        showCards(filteredArr);
    }else {
        alert('Нет понравившихся персонажей!');
    }

});
function showCards(arr){
    const filteredArr = arr.map(item => {
        return `
            <div style="background: url('${item.img}') center / cover no-repeat" class="card">
                <button onclick="showSingle(${item.id})" class="watch">More</button>
                <div style="background: url('${item.img}') center / cover no-repeat" class="circle"></div>
                <div class="product"></div>
                <button onclick="like(${item.id})" class="like"><i class="fas fa-heart"></i></button>
            </div>
        `
    }).join('');

    container.innerHTML = filteredArr;
}

function showSingle(id){
    const filterArr = database.filter(item => item.id === id);
    localStorage.setItem('singleCharacter', JSON.stringify(filterArr));
    window.open('single.html', '_self');
}

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