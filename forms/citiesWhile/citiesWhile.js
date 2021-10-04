

cities = []
while (cities=" ") {
    location = prompt("Do you have a city to enter: ")
    if (location == "yes") {
    city = prompt("enter a city ")
    cities.push(city)
}   else {
console.log(cities)
    }
    }
count = 0
while(cities.length !== count) {
    let citiesLower = cities[count]
    console.log(citeiesLower.toLowerCase())
    count++
}
console.log(cities)
