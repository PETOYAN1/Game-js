let printer = document.getElementById('print');
let action = document.getElementsByTagName('button');
let compAction = document.getElementById('compAction');
let endValue = document.getElementById('endValue');
let actionComputer;
let span;

let img = document.createElement('img');
img.className = 'imagine';
let image = document.getElementById('image');

let createImg = document.createElement('img');
createImg.className = 'imagine';
let image2 = document.getElementById('image2');

// take the value of action 

for(const key of action) {
    key.addEventListener('click', () => {
        printer.innerHTML = key.value;
        if(key.value == 'Paper') {
            img.src = 'img/paper.png';
            image.className = 'd-flex justify-content-center';
            image.appendChild(img);
        } 
        if(key.value == 'Rock') {
            img.src = 'img/rock1.png';
            image.appendChild(img);
        } 
        if(key.value == 'Successor') {
            img.src = 'img/scissors.png';
            image.appendChild(img);
        } 
        Generate();
        sortingAction(actionComputer);
        popUp(key.value, actionComputer);
    });
}

// Generate random action for computer

function Generate() {
    actionComputer = Math.floor(Math.random() * 3) + 1;
}

// Sort Computer action in numbers

function sortingAction(arg) {
    if(arg == 1) {
        arg = 'Paper';
        createImg.src = 'img/paper.png';
        image2.appendChild(createImg);
    }
    if(arg == 2) {
        arg = 'Rock';
        createImg.src = 'img/rock1.png';
        image2.appendChild(createImg);
    }
    if(arg == 3) {
        arg = 'Successor';
        createImg.src = 'img/scissors.png';
        image2.appendChild(createImg);
    }
    compAction.innerHTML = arg;
}

// Matching actions

function popUp(arg, compArg) {
    if(arg == 'Paper' && compArg == 1) {
        span = 'Matching Actions';
        endValue.className = 'yellow';
    }
    if(arg == 'Rock' && compArg == 2) {
        span = 'Matching Actions';
        endValue.className = 'yellow';
    }
    if(arg == 'Successor' && compArg == 3) {
        span = 'Matching Actions';
        endValue.className = 'yellow';
    }

    // You Win

    if(arg == 'Paper' && compArg == 2) {
        span = 'You are Win!';
        endValue.className = 'green';
    }
    if(arg == 'Rock' && compArg == 3) {
        span = 'You are Win!';
        endValue.className = 'green';
    }
    if(arg == 'Successor' && compArg == 1) {
        span = 'You are Win!';
        endValue.className = 'green';
    }

    // You Lose

    if(arg == 'Paper' && compArg == 3) {
        span = 'You are Lose!';
        endValue.className = 'red';
    }
    if(arg == 'Rock' && compArg == 1) {
        span = 'You are Lose!';
        endValue.className = 'red';
    }
    if(arg == 'Successor' && compArg == 2) {
        span = 'You are Lose!';
        endValue.className = 'red';
    }
    return endValue.innerHTML = span;
}

// Validation 

// if(!image) {
//     image.removeChild(img);
// }
