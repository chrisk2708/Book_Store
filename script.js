function init() {
    getFromLocalStorage();
    renderAllBooks();
}

function getFromLocalStorage() {
    const myBooks = JSON.parse(localStorage.getItem("myBookstore"));
    
    if (myBooks != null) {
        books = myBooks;
    } else {
        alert("Keine Daten vorhanden !")
    }
}

function saveToLocalStorage() {
    localStorage.setItem("myBookstore", JSON.stringify(books));
}

function renderBook(i) {
    const contentRef = document.getElementById('mainContent');

        const userComments = renderUserComments(i);
        contentRef.innerHTML += createBookCard(i, userComments);
        renderLikeBtn(i);
}

function renderAllBooks() {
    const contentRef = document.getElementById('mainContent');
    contentRef.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        renderBook(i);
    }
    saveToLocalStorage();
}

function renderLikeBtn(i) {
    const heartBtnRef = document.getElementById(`likeBtn${i}`);
    heartBtnRef.innerHTML = "";
    if (books[i].liked == true) {
        heartBtnRef.innerHTML += getFullHeartTemplate(i);
    } else {
        heartBtnRef.innerHTML += getDefaultHeartTemplate(i);
    }
    heartBtnRef.innerHTML += /*html*/`
        ${books[i].likes}
    `;
}

function toggleHeart(i) {
    if (books[i].liked == false) {
        books[i].liked = true;
        books[i].likes ++;
    }
    else if (books[i].liked == true) {
        books[i].liked = false;
        books[i].likes --;
    }
    saveToLocalStorage();
    renderAllBooks();
};

function renderUserComments(i) {
    userComments = "";
    
    if (books[i].comments.length > 0) {
        for (let c = 0; c < books[i].comments.length; c++) {
            userComments += getCommentsTemplate(i, c);
        }
    }
    return userComments;
};

function addComment(i) {
    const inputRef = document.getElementById(`inputComment${i}`).value;
    const obj = { name: "default", comment: "default" };

    if (inputRef.value != "") {
        obj.name = "User";
        obj.comment = inputRef;
        books[i].comments.push(obj);
    }
    saveToLocalStorage();
    renderAllBooks();
    inputRef.value = "";
};
init();