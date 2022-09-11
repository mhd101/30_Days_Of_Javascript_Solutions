// Creating function that generate Random hex Number

let hexGenerator = () => {
    let alphaNum = 'abcdef0123456789abcdef'
    let arr = ['#']
    for( let i = 0; i < 6; i++){

        let random = Math.floor(Math.random() * alphaNum.length)
        arr.push(alphaNum[random]);
    }
    return arr.join('')
}

// Changing Background at interval of 2 seconds
setInterval(() => {
    document.body.style.backgroundColor = hexGenerator()
}, 2000)

// Creating Wrapper Div
const wrapper = document.createElement('div')
document.body.appendChild(wrapper)
wrapper.className = 'wrapper'

// Default text
const text = '30 DAYS OF JAVASCRIPT 2020';
const textArray = text.split('')

// Creating P tag
const p = document.createElement('p')
wrapper.appendChild(p)
p.style.fontSize = '10em'
p.style.textAlign = 'center'
p.style.fontFamily = 'Roboto'
p.style.fontWeight = '600'
p.style.textShadow = '1px 1px 20px gray'

// Looping through textArray
textArray.forEach(x =>  {
    // Creating span tag
    const span = document.createElement('span')
    p.appendChild(span)
    span.textContent = x

    setInterval(() => {
        span.style.color = hexGenerator()
    }, 1000)

})


