var movies,
    thumbnails;

window.onload = function () {
    movies = ['The Shining', 'Kill Bill', 'Batman', 'Inception'];
    thumbnails = ['shining.jpg', 'kb.jpg', 'batman.jpg', 'inception.jpg'];
    initEvents();
}

function displayCatalog() {
    var table = document.querySelector('.table > tbody');
    for (let i = 0; i < movies.length; i++) {
        var row = document.createElement('tr');
        var title = document.createElement('p');
        var titleText = document.createTextNode(movies[i]);

        row.id = thumbnails[i];
        title.contentEditable = true;

        title.appendChild(titleText);
        row.appendChild(title);
        table.appendChild(row);
    }

    setRowEvent();
}

function askDelete() {
    if(confirm("Desea borrar esta película")) {
        var table = document.querySelector('.table > tbody');
        var row = document.getElementById(this.id);
        table.removeChild(row);
    }
}
function initEvents() {
    var btnMovies = document.querySelector('.btn');
    setEventHandler(btnMovies, 'click', displayCatalog);
}

function setRowEvent() {
    var rows = document.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        rows[i].addEventListener('mouseover', function() {
            var thumbnail = document.querySelector('#thumbnail');
            thumbnail.src = this.id;
        });
    }

    setCollectionEventHandler(rows, 'dblclick', askDelete);
}

function setEventHandler(el, event, fn) {
    el.addEventListener(event, fn);
}

function setCollectionEventHandler(arr, event, fn) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener(event, fn);
    }
}