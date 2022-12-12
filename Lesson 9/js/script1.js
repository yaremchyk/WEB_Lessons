
let hours = +prompt('hours');
let minutes = +prompt('minutes');
let seconds = +prompt('seconds');

let Time = {
    hours: hours,
    minutes: minutes,
    seconds: seconds
};

function alertTime(Time){
    let sec = String(Time.seconds);
    if(sec.length == 1) {sec = "0" + sec}
    let min = String(Time.minutes);
    if(min.length == 1) {min = "0" + min}
    let hour = String(Time.hours);
    if(hour.length == 1) {hour = "0" + hour}

    alert(`${hour}:${min}:${sec}`);
}

function PlusSecond(Time){
    Time.seconds++;
    if(Time.seconds == 60) {Time.seconds = 0; Time.minutes++;}
    if(Time.minutes == 60) {Time.minutes = 0; Time.hours++;}
    if(Time.hours == 24) {Time.hours = 0;}
}

function MinusSrcond(Time){
    Time.seconds--;
    if(Time.seconds < 0) {Time.seconds = 59; Time.minutes--;}
    if(Time.minutes < 0) {Time.minutes = 59; Time.hours--;}
    if(Time.hours < 0) {Time.hours = 23;}
}

function TimeChange(Time, secsToChange){
    if (secsToChange == 0) {return;}
    if (secsToChange < 0)
    {
        for (let sec = 0; sec > secsToChange; sec--) {
            MinusSecond(Time);
        }
    }
    if (secsToChange > 0)
    {
        for (let sec = 0; sec < secsToChange; sec++) {
            PlusSecond(Time);
        }
    }
    alertTime(Time);
}

TimeChange(Time, 10);