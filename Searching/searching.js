// array size slider
const slider = document.querySelector('#size_slider')
const output = document.querySelector('#size_value')
const body = document.querySelector('#mainbody')
const speedSlider = document.querySelector('#speed_slider')
const speedOutput = document.querySelector('#speed_value')
const preloader = document.querySelector('.preloader')
const select = document.querySelector('.select')
const icon = document.querySelector('.icon')
const menu = document.querySelector('.menu')
const options = document.querySelectorAll('.menu li')
const selected = document.querySelector('.selected')
const generate = document.querySelector('#generate')
const searchedVal = document.querySelector('#searchingVal')
const searchText = document.querySelector('.selected')


// disable all the sorting buttons while one sorting process take place
function disableSortingBtn() {
    document.querySelector("#linear_Search").disabled = true;
    document.querySelector("#binary_Search").disabled = true;
    document.querySelector("#searchingVal").disabled = true;
}

// enable all the sorting buttons after one of the sorting process is totally completed
function enableSortingBtn() {
    document.querySelector("#linear_Search").disabled = false;
    document.querySelector("#binary_Search").disabled = false;
    document.querySelector("#searchingVal").disabled = false;

}

// Disables array size slider while one sorting process take place
function disableSizeSlider() {
    document.querySelector("#size_slider").disabled = true;
    document.querySelector('#size').disabled = true
}

// Enables array size slider after one of the sorting process is done
function enableSizeSlider() {
    document.querySelector("#size_slider").disabled = false;
    document.querySelector('#size').disabled = false
}

// Disables newArray buttons while one sorting process take place
function disableNewArrayBtn() {
    document.querySelector("#generate").disabled = true;
}

// Enables newArray buttons after one of the sorting process is done
function enableNewArrayBtn() {
    document.querySelector("#generate").disabled = false;
}






output.innerHTML = slider.value


// generate bars in default size 100
// const body = document.querySelector('#mainbody')
var arr = []
for (let i = 1; i <= 64; i++) {
    let temp = Math.floor(Math.random() * (350 - 20) + 20)
    arr.push(temp)
}
// creating div element for the bars
for (let i = 0; i < 64; i++) {
    let bar = document.createElement('div')
    bar.className = 'bars'
    bar.style.height = `${arr[i]}px`
    bar.innerHTML = `${arr[i]}`
    bar.style.width = `4vw`;
    body.appendChild(bar)
}


// array size according to array size slider
var arrayVal = 64;
slider.oninput = function () {
    searchText.innerHTML = `Size Changed`
    output.innerHTML = this.value
    arrayVal = this.value
    arr = []
    for (let i = 1; i <= this.value; i++) {
        let temp = Math.floor(Math.random() * (350 - 20) + 20)
        arr.push(temp)
    }
    while (body.firstChild) {
        body.removeChild(body.firstChild)
    }
    for (let i = 0; i < this.value; i++) {
        let div = document.createElement('div')
        div.className = 'bars'
        div.innerHTML = `${arr[i]}`
        div.style.height = `${arr[i]}px`
        div.style.width = `${(96 / this.value)}vw`
        body.appendChild(div)
    }

}

// Generayte new array button
// const generate = document.querySelector('#generate')
generate.addEventListener('click', () => {
    //delte previous bars
    var mouseclick = new Audio('Mouseclick.mp3')
    mouseclick.play()
    enableSortingBtn();
    enableSizeSlider();
    searchText.innerHTML = `New Array Generated`
    const description = document.querySelector('#description')
    description.style.display = 'none'
    const section = document.querySelector('#fullbody')
    section.style.height = `100vh`

    searchedVal.value = ''
    const step = document.querySelector('.step')
    step.innerHTML = ``

    const index = document.querySelector('.index')
    index.innerHTML = ``

    count=0

    while (body.firstChild) {
        body.removeChild(body.firstChild)
    }
    // creating arr
    arr = []
    for (let i = 1; i <= arrayVal; i++) {
        let temp = Math.floor(Math.random() * (350 - 20) + 20)
        arr.push(temp)
    }
    console.log(arr)
    // creating array bars
    for (let i = 0; i < arrayVal; i++) {
        let div = document.createElement('div')
        div.className = 'bars'
        div.style.height = `${arr[i]}px`
        div.innerHTML = `${arr[i]}`
        div.style.width = `${96 / arrayVal}vw`
        body.appendChild(div)
    }
})

// array speed slider


// let count the delay
function waitcount(milisec) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('')
        }, milisec)
    })
}


// const speedSlider = document.querySelector('#speed_slider')
// const speedOutput = document.querySelector('#speed_value')
speedOutput.innerHTML = speedSlider.value

let delay = 260;
speedSlider.oninput = function () {
    searchText.innerHTML=`Speed Changed`
    speedOutput.innerHTML = this.value
    delay = 760 - (100*this.value);
    console.log(delay);
}


// select display type 


// const select = document.querySelector('.select')
// const icon = document.querySelector('.icon')
// const menu = document.querySelector('.menu')
// const options = document.querySelectorAll('.menu li')
// const selected = document.querySelector('.selected')

menu.classList.toggle('close')

select.addEventListener('click', () => {
    // select.classList.add('.icon-rotate')
    menu.classList.toggle('close')
    icon.classList.toggle('icon-rotate')
})
options.forEach(option => {
    option.addEventListener('click', () => {
        selected.innerText = option.innerText
        menu.classList.toggle('close')
        icon.classList.toggle('icon-rotate')

    })
});


// loader
// const preloader = document.querySelector('.preloader')
window.addEventListener('load', () => {
    // preloader.style.display = 'none'
})






const val = document.querySelector('#searchingVal')



