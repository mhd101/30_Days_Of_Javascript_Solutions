
const mass = document.querySelector('.mass')
const planets = document.querySelector('#planets')
const button = document.querySelector('.btn')

const planetObject = {
    sun: 27.01,
    mercury: 0.38,
    venus: 0.91,
    earth: 1,
    moon: 0.166,
    mars: 0.38,
    jupiter: 2.34,
    saturn: 1.06,
    uranus: 0.92,
    neptune: 1.19,
    pluto: 0.06,
}

const planetArray = Object.entries(planetObject)

const calculateWeight = (mass, planetName) => {
    for (let i = 0; i < planetArray.length; i++) {
        if (planetArray[i][0] == planetName) {
            let weight = mass * planetArray[i][1]
            return weight.toFixed(2)
        }
    }
}

button.addEventListener('click', () => {
    const planetName = planets.value
    const massValue = parseInt(mass.value)
    const mainContainer = document.querySelector('.main-container')
    const planet = document.createElement('div')
    mainContainer.appendChild(planet)
    planet.classList.add('planets')
    const error = document.createElement('p')
    planet.appendChild(error)
    error.classList.add('error')

    if (mass.value == '' || planetName == '--Select the planet--') {
        const error = document.querySelector('.error')
        error.textContent = 'Mass and Planet name is Required'
        error.style.color = 'white'
        error.style.backgroundColor = 'gray'
        error.style.opacity = '70%'
        error.style.fontSize = '28px'
        error.style.padding = '20px 200px'
    } else {
        const error = document.querySelector('.planets p')
        if (error.classList.contains('error')) {
            const planet = document.querySelector('.planets')
            planet.removeChild(error)

        }
        const div = document.createElement('div')
        planet.appendChild(div)
        div.classList.add('div')
        const image = document.createElement('img')
        const p = document.createElement('p')
        div.appendChild(image)
        div.appendChild(p)

        div.style.backgroundColor = 'gray'
        div.style.opacity = '70%'
        div.style.padding = '40px 300px'
        div.style.display = 'flex'
        div.style.flexDirection = 'column'
        div.style.justifyContent = 'center'
        div.style.alignItems = 'center'

        image.src = `images/${planetName}.png`
        p.textContent = `The weight of the object on ${planetName}: ${calculateWeight(massValue, planetName)} N`
        p.style.color = 'white'
        p.style.fontSize = '35px'

        planets.addEventListener('change', () => {
            const planetName = planets.value
            const massValue = parseInt(mass.value)
            const image = document.querySelector('.div img')
            const p = document.querySelector('.div p')
            image.src = `images/${planetName}.png`
            p.textContent = `The weight of the object on ${planetName}: ${calculateWeight(massValue, planetName)} N`
            p.style.color = 'white'
            p.style.fontSize = '35px'
        })
    }

})



