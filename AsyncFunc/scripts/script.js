const url = "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,borders"

async function getDataFromFetch(url) {

    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

async function getAllCountries(url) {
    try {
        let countries = await getDataFromFetch(url);
        let filtered = countries.map(country => country.name.common + "-" + country.capital + "-" + country.population)
        console.log(filtered)
    } catch (error) {
        console.log(error)
    }
}

getAllCountries(url)

async function getMacedonia(url) {
    try {
        let countries = await getDataFromFetch(url);
        let macedonia = countries.filter(country => country.name.common.includes("North Macedonia"))
        console.log(macedonia)
    } catch (error) {
        console.log(error)
    }
}

getMacedonia(url)

async function getNeighboursFromCountry(url) {
    try {
        let countries = await getDataFromFetch(url);
        let france = countries.find(country => country.name.common.includes("France"))
        let bordersOfCountry = france.borders.join(",")
        let neighboursUrl = `https://restcountries.com/v3.1/alpha?codes=${bordersOfCountry}`

        let neighbours = await getDataFromFetch(neighboursUrl)
        console.log(neighbours)
    } catch (error) {
        console.log(error)
    }

}
getNeighboursFromCountry(url)