// common
function getPlayersListNumber(playerList, li) {
    const ul = document.getElementById(playerList);
    const liLength = ul.getElementsByTagName(li).length
    return liLength;
};

// common 2
function getAmount(elementId) {
    const perCost = document.getElementById(elementId);
    const perAmount = perCost.value;
    return perAmount;
}

document.getElementById('players').addEventListener('click', function (event) {
    const playersName = event.target.parentElement.firstChild.nextSibling.innerText;
    const playerSelectBtn = event.target.parentElement.lastChild.previousSibling;

    const liLength = getPlayersListNumber('players-list', 'li');

    if ((liLength + 1) > 5) {
        alert('Sorry! You have reach maximum number of players.');
        return;
    } else {
        const li = document.createElement('li');
        li.innerText = playersName;
        document.getElementById('players-list').appendChild(li);
        playerSelectBtn.setAttribute('disabled', true);
        playerSelectBtn.style.backgroundColor = 'gray';
    }
});

document.getElementById('calculate-player-expense').addEventListener('click', function () {
    const perPlayerAmount = getAmount('per-player-budget')
    const playerAmount = parseInt(perPlayerAmount);

    const liLength = getPlayersListNumber('players-list', 'li');

    if (perPlayerAmount === '') {
        alert("Field Can't be empty");
        return;
    } else if (liLength < 5) {
        alert('Please Select At Least 5 Players');
        return;
    } else if (isNaN(perPlayerAmount)) {
        alert('Please Enter Correct Number Of Amount');
        perPlayerCost.value = '';
        return;
    } else {
        const totalPlayerAmount = playerAmount * liLength;
        const playerExpense = document.getElementById('player-expense');
        playerExpense.innerText = totalPlayerAmount;
    }
});

document.getElementById('calculate-total-expense').addEventListener('click', function () {
    const managerBudget = getAmount('manager-budget');
    const coachBudget = getAmount('coach-budget');
    const playerTotalCost = document.getElementById('player-expense');
    const playerTotalAmount = playerTotalCost.innerText;

    if (isNaN(managerBudget) || isNaN(coachBudget)) {
        alert('Please Enter Correct Number Of Amount');
        document.getElementById('manager-budget').value = '';
        document.getElementById('coach-budget').value = '';
        return;
    } else if (managerBudget === '' || coachBudget === '') {
        alert("Field Can't be empty");
        return;
    } else {
        const managerBudgetAmount = parseInt(managerBudget);
        const coachBudgetAmount = parseInt(coachBudget);
        const totalPlayerAmount = parseInt(playerTotalAmount);

        const total = managerBudgetAmount + coachBudgetAmount + totalPlayerAmount;

        const totalAmount = document.getElementById('total');
        totalAmount.innerText = total;
    }
})