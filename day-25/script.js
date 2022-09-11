// 1

// Filtering Data
let data = Object.values(countries_data).map(x => ({ name: x.name, population: x.population })).sort((a, b) => {
    if (a.population < b.population) return 1;
    if (a.population > b.population) return -1;
    return 0;
}).splice(0, 10)

data[2].name = 'USA'
data[8].name = 'Russia'

// Adding World object in the previous data
let populationCount = Object.values(countries_data).map(x => ({ name: x.name, population: x.population })).reduce((pop, count) => {
    pop = pop + count.population;
    return pop;
}, 0)

let finalData = data.map(x => {
    let percent = (x.population / populationCount) * 100
    return ({ name: x.name, percent: `${Math.ceil(percent)}%`, population: x.population })
})

finalData.unshift({
    name: 'World',
    percent: '100%',
    population: populationCount
})

// Manipulating Dom for Countries Button

const mainContainer = document.querySelector('.main-container')
const info = document.createElement('p')
mainContainer.appendChild(info)
info.classList = 'info'
info.style.display = 'none'
info.textContent = '10 most populated countries in the world'
info.style.textAlign = 'center'
info.style.marginBottom = '20px'
info.style.fontSize = '16px'

const dataDiv = document.createElement('div')
mainContainer.appendChild(dataDiv)
dataDiv.className = 'data'
dataDiv.style.backgroundColor = '#efefee'
dataDiv.style.display = 'none'
dataDiv.style.flexDirection = 'column'
dataDiv.style.rowGap = '2px'
dataDiv.style.padding = '10px 20px'


finalData.forEach(x => {
    const div = document.createElement('div')
    dataDiv.appendChild(div)
    div.style.display = 'flex'
    div.style.columnGap = '30px'
    div.style.margin = '2px 20px'

    const countryName = document.createElement('p')
    const barDiv = document.createElement('div')
    const bar = document.createElement('div')
    const countryPopulation = document.createElement('p')

    div.appendChild(countryName)
    barDiv.appendChild(bar)
    div.appendChild(barDiv)
    div.appendChild(countryPopulation)

    countryName.textContent = x.name
    countryName.style.width = '150px'
    countryName.style.fontSize = '24px'

    bar.style.backgroundColor = '#f2a93b';
    bar.style.height = '30px'
    bar.style.width = x.percent
    bar.style.borderRadius = '2px'

    barDiv.style.width = '100%'

    countryPopulation.textContent = x.population
    countryPopulation.style.width = '100px'
    countryPopulation.style.margin = 'auto'
})


// 2

// Filtering Data
const mostSpoken = Object.entries(countries_data.reduce((lang, obj) => {
    obj.languages.forEach(x => lang.push(x));
    return lang;
},[]).reduce((count, lang) => {
    count[lang] = (count[lang]||0) +1;
    return count;
}, {})).sort((a,b) => b[1]-a[1]).splice(0,10);


const finalData2 = mostSpoken.map(x => {
    let percent = x[1]/123 * 100
    return ({name: x[0], percent: `${Math.ceil(percent)}%`, count: x[1]})
})

// Manipulating DOM for Languages Button

const mainContainer2 = document.querySelector('.main-container')

const info2 = document.createElement('p')
mainContainer2.appendChild(info2)

info2.classList = 'info2'
info2.style.display = 'none'
info2.textContent = '10 most popular languages in the world'
info2.style.textAlign = 'center'
info2.style.marginBottom = '20px'
info2.style.fontSize = '16px'

const dataDiv2 = document.createElement('div')
mainContainer2.appendChild(dataDiv2)
dataDiv2.className = 'data2'
dataDiv2.style.backgroundColor = '#efefee'
dataDiv2.style.display = 'none'
dataDiv2.style.flexDirection = 'column'
dataDiv2.style.rowGap = '2px'
dataDiv2.style.padding = '10px 20px'

finalData2.forEach(x => {
    const div = document.createElement('div')
    dataDiv2.appendChild(div)
    div.style.display = 'flex'
    div.style.columnGap = '30px'
    div.style.margin = '2px 20px'

    const countryName = document.createElement('p')
    const barDiv = document.createElement('div')
    const bar = document.createElement('div')
    const languages = document.createElement('p')

    div.appendChild(countryName)
    barDiv.appendChild(bar)
    div.appendChild(barDiv)
    div.appendChild(languages)

    countryName.textContent = x.name
    countryName.style.width = '150px'
    countryName.style.fontSize = '24px'

    bar.style.backgroundColor = '#f2a93b';
    bar.style.height = '30px'
    bar.style.width = x.percent
    bar.style.borderRadius = '2px'

    barDiv.style.width = '100%'

    languages.textContent = x.count
    languages.style.width = '100px'
    languages.style.textAlign = 'center'
    languages.style.margin = 'auto'
})


// Population Button
const populationButton = document.querySelector('.button-population')
populationButton.addEventListener('click', () => {
    const dataDiv = document.querySelector('.data')
    const info = document.querySelector('.info')

    const dataDiv2 = document.querySelector('.data2')
    const info2 = document.querySelector('.info2')
    dataDiv2.style.display = 'none'
    info2.style.display = 'none'

    if (dataDiv.style.display == 'none' && info.style.display == 'none') {
        dataDiv.style.display = 'flex'
        info.style.display = 'block'
    } else {
        dataDiv.style.display = 'none'
        info.style.display = 'none'
    }
})

// Languages Button
const languagesButton = document.querySelector('.button-languages')
languagesButton.addEventListener('click', () => {
    const dataDiv2 = document.querySelector('.data2')
    const info2 = document.querySelector('.info2')
    
    const dataDiv = document.querySelector('.data')
    const info = document.querySelector('.info')
    dataDiv.style.display = 'none'
    info.style.display = 'none'

    if (dataDiv2.style.display == 'none' && info2.style.display == 'none') {
        dataDiv2.style.display = 'flex'
        info2.style.display = 'block'
    } else {
        dataDiv2.style.display = 'none'
        info2.style.display = 'none'
    }
})











