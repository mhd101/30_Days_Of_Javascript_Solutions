

























const technologies = document.querySelector('.technologies')

const generateColors = () => {
    let alphanums = '0123456789abcdef'
    let arr = ['#'];
    for(let i =0; i < 6; i++){
        let random = Math.floor(Math.random() * alphanums.length)
        arr.push(alphanums[random])
    }
    return arr.join('');
}

setInterval(() => {
    technologies.style.fontSize = '3em'
    technologies.style.fontWeight = '600'
    technologies.style.color = generateColors()
}, 1000);