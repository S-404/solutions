//convert seconds to HH:MM:SS

const pad = (val, len) => String(val).padStart(len,"0")

function convertSecondsTo_HHMMSS (s) {
    let d = new Date()
    d.setHours(0)
    d.setMinutes(0)
    d.setSeconds(s)

    let hh = d.getHours()
    let mm = d.getMinutes()
    let ss = d.getSeconds()

    return `${pad(hh,2)}:${pad(mm,2)}:${pad(ss,2)}`
}

function convertSecondsTo_HHMMSS_ (s) {
    let hh = Math.floor (s / 60 / 60) 
    let mm = Math.floor ((s / 60) % 60) 
    let ss = s % 60
    
    return `${pad(hh,2)}:${pad(mm,2)}:${pad(ss,2)}`
}

console.log(convertSecondsTo_HHMMSS(12061))
console.log(convertSecondsTo_HHMMSS_(12061))
