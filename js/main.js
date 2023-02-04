document.getElementById('players').addEventListener('click', function (event) {
    const playersName = event.target.parentElement.firstChild.nextSibling.innerText;
    const playerSelectBtn = event.target.parentElement.lastChild.previousSibling;

    const ul = document.getElementById('players-list');
    const liLength = ul.getElementsByTagName("li").length

    if ((liLength + 1) > 5) {
        alert('Sorry! You have reach maximum number of players.');
        return;
    } else {
        const li = document.createElement('li');
        li.innerText = playersName;
        ul.appendChild(li);
        playerSelectBtn.setAttribute('disabled', true);
        playerSelectBtn.style.backgroundColor = 'gray';
    }
})