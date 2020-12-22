const newYear = '21 mar 2021'

function countdown() {
    const newYearsDate = new Date(newYear)
    const currentDate = new Date()
    var totalSeconds = Math.floor(newYearsDate - currentDate) / 1000
    var minutes = Math.floor(totalSeconds / 60)
    var hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    totalSeconds = totalSeconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

    console.log(days, hours, minutes, totalSeconds)
}
countdown();

// setInterval(countdown, 1000)