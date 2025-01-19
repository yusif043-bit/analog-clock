const secondbox = document.querySelector('.seconds');
const secondnum = document.querySelectorAll('.sec');
const minutebox = document.querySelector('.minutes');
const minutenum = document.querySelectorAll('.min');
const hourbox = document.querySelector('.hours');
const hournum = document.querySelectorAll('.hour');
const daynumber = document.querySelector('.daynumber');
const month = document.querySelector('.date');

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const stopwatch_start = document.querySelector('.start-stopwatch');
const stopwatch_stop = document.querySelector('.stop-stopwatch');
const stopwatch_reset = document.querySelector('.reset-stopwatch');
const stopwatch_text = document.querySelector('.text');
const stopwatch_line = document.querySelector('.st-line');

const day_line = document.querySelector('.day-line');

const checkDay = (currentDay)=>{
    if(currentDay == 1){return 51.4}
    if(currentDay == 2){return 102.8}
    if(currentDay == 3){return 154.2}
    if(currentDay == 4){return 205.6}
    if(currentDay == 5){return 257}
    if(currentDay == 6){return 308.4}
    if(currentDay == 7){return 0}
};

const updateTime = ()=>{
    let currentSecond = new Date().getSeconds();
    let currentMinute = new Date().getMinutes();
    let currentHour = new Date().getHours();
    let currentDay = new Date().getDay();
    let currentDayNumber = new Date().getDate();
    let currentMonth = new Date().getMonth();
    console.log(currentMonth)
    // console.log(currentDate);
    
    // secondnum.forEach((item, index)=>{
    //     // // item.style.transform = `rotate(eval(90deg + 6deg * ${index + 1} - ${currentSecond * 6}deg)`;
    //     // item.style = `background:red;`

    //     item.style = `--sec : ${(currentSecond + index) % 60};`
    //     console.log(currentSecond);
        
    // });

    for(let i = secondnum.length-1; i>=0; --i){
        secondnum[secondnum.length-1 - i].style = `--sec : ${(currentSecond + i) % 60};`;
        // console.log(currentSecond);
    }
    for(let i = minutenum.length-1; i>=0; --i){
        minutenum[minutenum.length-1 - i].style = `--min : ${(currentMinute + i) % 60};`;
        // console.log(currentMinute);
    }
    for(let i = hournum.length-1; i>=0; --i){
        hournum[hournum.length-1 - i].style = `--hour : ${(currentHour + i) % 12};`;
        // console.log(currentMinute);
    }
    // day_line.style = `--day: calc(180deg + ${checkDay(currentDay)}deg)`;
    day_line.style.rotate = `calc(180deg + ${checkDay(currentDay)}deg)`;

    // month.style.strokeDashoffset = 260 - (260 * (currentDay))/30;
    daynumber.innerHTML = currentDayNumber;
    month.innerHTML = `${months[currentMonth]}`;
    console.log(currentMonth);
    
};


let count = 0;
stopwatch_start.onclick = ()=>{
    stopwatch_start.disabled = true;
    let stopwatch_interval = setInterval(()=>{
        count+=1;
        stopwatch_line.style.rotate = `calc(-90deg + ${count *6}deg)`;
        stopwatch_text.innerHTML = count;
    },1000);
    stopwatch_stop.onclick = ()=>{
        clearInterval(stopwatch_interval);
        stopwatch_start.disabled = false;
    };
    stopwatch_reset.onclick = ()=>{
        clearInterval(stopwatch_interval);
        stopwatch_line.style.rotate = `-90deg`;
        stopwatch_text.innerHTML = '';
        count = 0;
        stopwatch_start.disabled = false;
    };
};

setInterval(updateTime, 1000);