function createBookCard(i, userComments) {
    return /*html*/`
        <section id="bookCard${i}" class="book-card">
            <article id="headLine" class="head-line"><h2>${books[i].name}</h2></article>
            <article id="bookCover" class="book-cover">
                <img src="./assets/img/${books[i].name}.png" alt="${books[i].name}">
            </article>
            
            ${createBookInfo(i)}
            
            <article class="show-comments">
                <h3>Kommentare:</h3>
                <div class="comment-wrapper">
                    ${userComments}
                </div>
            </article>
            <article class="input-field">
                <input type="text" id="inputComment${i}" class="input-comment" 
                    placeholder="Schreibe dein Kommentar">
                    <div onclick="addComment(${i})" class="send-btn">
                        <img src="./assets/icons/flieger.png" alt="Send comment">
                    </div>
            </article>
        </section>
    `;
}

function createBookInfo(i) {
    return /*html*/`
        <article id="bookInfo" class="book-info">
            <div class="priceLikeCont">
                <div class="book-price"><strong>${books[i].price.toFixed(2)} €</strong></div>
                <div id="likeBtn${i}" class="like-btn"></div>
            </div>
            <div class="info-details">
                <div class="p-title">
                    <p><strong>Autor:</strong></p>
                    <p><strong>Jahr:</strong></p>
                    <p><strong>Genre:</strong></p>
                </div>
                <div class ="p-output">
                    <p>${books[i].author}</p>
                    <p>${books[i].publishedYear}</p>
                    <p>${books[i].genre}</p>
                </div>
            </div>
        </article>
    `;
}

function getDefaultHeartTemplate(i) {
    return /*html*/ `
        <img onclick="toggleHeart(${i})" src="./assets/icons/herz2.png" alt="Herz Icon">
    `;
}

function getFullHeartTemplate(i) {
    return /*html*/ `
        <img onclick="toggleHeart(${i})" src="./assets/icons/herz_rot.png" alt="Rotes Herz Icon">
    `;
}

function getCommentsTemplate(i, c) {
    return /*html*/`
        <div id="userComments${i}" class="user-comments">
            <p class="users-name">[${books[i].comments[c].name}]</p>
            <p class="users-comment">: ${books[i].comments[c].comment}</p>
        </div>
    `;
}