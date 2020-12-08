let storage = document.querySelector('.storage');
let input = document.querySelector('#input');

window.addEventListener('DOMContentLoaded', displayList);

window.addEventListener('keypress', key => {
    if (key.keyCode == 13) {
        if (input.value) {
            addToCart(input.value);
            saveToStorage(input.value);
            input.value = '';
        } else {
            alert('Please input value.')
        }
    }
});

function addToCart() {
    const div = document.createElement('div');
    div.classList.add('div-bg');
    div.innerHTML = input.value;

    const btn = document.createElement('button')
    btn.classList.add('btn');
    btn.innerHTML = 'Delete';

    div.appendChild(btn);
    storage.appendChild(div);

    btn.addEventListener('click', () => { div.remove(); }

    );
}

function saveToStorage(list) {
    let listItem;
    if (localStorage.getItem('listItem') === null) {
        listItem = [];
    } else {
        listItem = JSON.parse(localStorage.getItem('listItem'));
    }

    listItem.push(list);
    localStorage.setItem('listItem', JSON.stringify(listItem));
}

function displayList() {
    let listItem;
    if (localStorage.getItem('listItem') === null) {
        listItem = [];
    } else {
        listItem = JSON.parse(localStorage.getItem('listItem'));
    }
    listItem.forEach(function (list) {
        const div = document.createElement('div');
        div.classList.add('div-bg');
        div.innerHTML = list;

        const btn = document.createElement('button')
        btn.classList.add('btn');
        btn.innerHTML = 'Delete';

        div.appendChild(btn);
        storage.appendChild(div);

        btn.addEventListener('click', () => {
            deleteList(list);
            div.remove();
        });
    });
}

function deleteList(list) {
    let listItem;
    if (localStorage.getItem('listItem') === null) {
        listItem = [];
    } else {
        listItem = JSON.parse(localStorage.getItem('listItem'));
    }

    const listIndex = listItem.indexOf(list);
    listItem.splice(listIndex, 1);
    localStorage.setItem('listItem', JSON.stringify(listItem));
}