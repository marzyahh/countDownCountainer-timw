const newYear = '21 march 2021'

function countdown() {
    const newYearsDate = new Date(newYear)
    const currentDate = new Date();
    console.log(newYearsDate - currentDate)
    console.log(currentDate)
}
countdown();