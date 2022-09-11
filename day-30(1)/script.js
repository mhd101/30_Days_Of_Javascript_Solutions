// Calling Wrapper Div
const wrapper = document.querySelector('.wrapper')

// Creating & Appending Countries Display
const countriesDisplay = document.createElement('div')
wrapper.appendChild(countriesDisplay)
countriesDisplay.className = "countries-display"
countriesDisplay.style.backgroundColor = '#f0f0f0'
countriesDisplay.style.marginTop = '20px'

// Creating & Appending Countries Div
const countriesDiv = document.createElement('div')
countriesDisplay.appendChild(countriesDiv)
countriesDiv.className = 'countries'
countriesDiv.style.padding = '40px'
countriesDiv.style.width = '80%'
countriesDiv.style.margin = 'auto'

// Styling all countries div
countriesDiv.style.display = 'grid'
countriesDiv.style.gridTemplateColumns = 'auto auto auto auto auto auto'
countriesDiv.style.justifyContent = 'center'
countriesDiv.style.rowGap = '40px'
countriesDiv.style.columnGap = '40px'


// Showing all default countries
countries.forEach(x => {

    const div = document.createElement('div')
    countriesDiv.appendChild(div)
    div.className = 'cont'

    const template =
        `
    <div class="template-cont1">
        <img src="${x.flag}">
        <p>${x.name}</p>
    </div>
    <div class="template-cont2">
        <p>Capital: ${x.capital}</p>
        <p>Languages: ${x.languages}</p>
        <p>Population: ${x.population.toLocaleString()}</p>
    <div>
    `

    div.innerHTML = template
    div.style.width = '200px'
    div.style.boxShadow = '1px 1px 20px rgba(13, 28, 77, 0.2)'
    div.style.padding = '10px'
    div.style.backgroundColor = 'white'
    div.style.borderRadius = '2px'
})

// Search Functionality
const input = document.querySelector('input')

input.addEventListener('keyup', (e) => {

    const allCountriesDiv = Array.from(document.querySelectorAll('.cont'))

    allCountriesDiv.map(x => {
        const searchString = e.target.value.toLowerCase()

        if ((x.textContent.toLowerCase()).includes(searchString)) {
            x.style.display = 'block'
        } else {
            x.style.display = 'none'
        }
    })
})

// Name Button Functionality
const nameButton = document.querySelector('.name')

const nameDiv = document.createElement('div')

let flag = false

nameButton.addEventListener('click', () => {


    if (flag == false) {
        
        countriesDiv.style.display = 'none'

        nameButton.innerText = 'NAME ⬇️'

        countriesDisplay.appendChild(nameDiv)
        nameDiv.className = 'countries'
        nameDiv.style.padding = '40px'
        nameDiv.style.width = '80%'
        nameDiv.style.margin = 'auto'

        // Styling all countries div
        nameDiv.style.display = 'grid'
        nameDiv.style.gridTemplateColumns = 'auto auto auto auto auto auto'
        nameDiv.style.justifyContent = 'center'
        nameDiv.style.rowGap = '40px'
        nameDiv.style.columnGap = '40px'


        const sortedCountriesByName = countries.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        })

        sortedCountriesByName.forEach(x => {
            const div = document.createElement('div')
            nameDiv.appendChild(div)
            div.className = 'cont'

            const template =
                `
    <div class="template-cont1">
        <img src="${x.flag}">
        <p>${x.name}</p>
    </div>
    <div class="template-cont2">
        <p>Capital: ${x.capital}</p>
        <p>Languages: ${x.languages}</p>
        <p>Population: ${x.population.toLocaleString()}</p>
    <div>
    `

            div.innerHTML = template
            div.style.width = '200px'
            div.style.boxShadow = '1px 1px 20px rgba(13, 28, 77, 0.2)'
            div.style.padding = '10px'
            div.style.backgroundColor = 'white'
            div.style.borderRadius = '2px'
        })
        flag = true;
    } else {
        nameDiv.style.display = 'none'
        nameButton.innerText = 'NAME'
        countriesDiv.style.display = 'grid'
    }

})


// Capital Button Functionality
const capitalButton = document.querySelector('.capital')

const capitalDiv = document.createElement('div')

let flag2 = false

capitalButton.addEventListener('click', () => {


    if (flag2 == false) {
        
        countriesDiv.style.display = 'none'

        capitalButton.innerText = 'CAPITAL ⬇️'

        countriesDisplay.appendChild(capitalDiv)
        capitalDiv.className = 'countries'
        capitalDiv.style.padding = '40px'
        capitalDiv.style.width = '80%'
        capitalDiv.style.margin = 'auto'

        // Styling all countries div
        capitalDiv.style.display = 'grid'
        capitalDiv.style.gridTemplateColumns = 'auto auto auto auto auto auto'
        capitalDiv.style.justifyContent = 'center'
        capitalDiv.style.rowGap = '40px'
        capitalDiv.style.columnGap = '40px'


        const sortedCountriesByCapital = countries.sort((a, b) => {
            if (a.capital > b.capital) return 1;
            if (a.capital < b.capital) return -1;
            return 0;
        })

        sortedCountriesByCapital.forEach(x => {
            const div = document.createElement('div')
            capitalDiv.appendChild(div)
            div.className = 'cont'

            const template =
                `
    <div class="template-cont1">
        <img src="${x.flag}">
        <p>${x.name}</p>
    </div>
    <div class="template-cont2">
        <p>Capital: ${x.capital}</p>
        <p>Languages: ${x.languages}</p>
        <p>Population: ${x.population.toLocaleString()}</p>
    <div>
    `

            div.innerHTML = template
            div.style.width = '200px'
            div.style.boxShadow = '1px 1px 20px rgba(13, 28, 77, 0.2)'
            div.style.padding = '10px'
            div.style.backgroundColor = 'white'
            div.style.borderRadius = '2px'
        })
        flag2 = true;
    } else {
        capitalDiv.style.display = 'none'
        capitalButton.innerText = 'CAPITAL'
        countriesDiv.style.display = 'grid'
    }

})


// Population Button Functionality
const populationButton = document.querySelector('.population')

const populationDiv = document.createElement('div')

let flag3 = false

populationButton.addEventListener('click', () => {


    if (flag3 == false) {
        
        countriesDiv.style.display = 'none'

        populationButton.innerText = 'POPULATION ⬇️'

        countriesDisplay.appendChild(populationDiv)
        populationDiv.className = 'countries'
        populationDiv.style.padding = '40px'
        populationDiv.style.width = '80%'
        populationDiv.style.margin = 'auto'

        // Styling all countries div
        populationDiv.style.display = 'grid'
        populationDiv.style.gridTemplateColumns = 'auto auto auto auto auto auto'
        populationDiv.style.justifyContent = 'center'
        populationDiv.style.rowGap = '40px'
        populationDiv.style.columnGap = '40px'


        const sortedCountriesByPopulation = countries.sort((a, b) => {
            if (a.population > b.population) return 1;
            if (a.population < b.population) return -1;
            return 0;
        })

        sortedCountriesByPopulation.forEach(x => {
            const div = document.createElement('div')
            populationDiv.appendChild(div)
            div.className = 'cont'

            const template =
                `
    <div class="template-cont1">
        <img src="${x.flag}">
        <p>${x.name}</p>
    </div>
    <div class="template-cont2">
        <p>Capital: ${x.capital}</p>
        <p>Languages: ${x.languages}</p>
        <p>Population: ${x.population.toLocaleString()}</p>
    <div>
    `

            div.innerHTML = template
            div.style.width = '200px'
            div.style.boxShadow = '1px 1px 20px rgba(13, 28, 77, 0.2)'
            div.style.padding = '10px'
            div.style.backgroundColor = 'white'
            div.style.borderRadius = '2px'
        })
        flag3 = true;
    } else {
        populationDiv.style.display = 'none'
        populationButton.innerText = 'POPULATION'
        countriesDiv.style.display = 'grid'
    }

})
