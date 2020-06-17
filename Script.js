setInterval(updateClock,1000)

// QuerySelector ??
const hourHand = document.querySelector('[data-hour]')
const minuteHand = document.querySelector('[data-minute]')
const secondHand = document.querySelector('[data-second]')


function updateClock(){
    const curDate = new Date()
    const seconds = curDate.getSeconds()
    const hours = curDate.getHours()
    const minutes = curDate.getMinutes()
    
    const secondRot = seconds/60
    const minuteRot = (minutes + secondRot)/60 
    const hourRot = (hours + minuteRot)/12 

    rotateHands(hourHand,hourRot)
    rotateHands(minuteHand,minuteRot)
    rotateHands(secondHand,secondRot)

}

function rotateHands(element, rot){
    element.style.setProperty('--rotation',rot*360)
}

updateClock()