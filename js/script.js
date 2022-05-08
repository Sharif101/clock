function time(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();


    if(hour=="12")
    {
        var hr = 12;
    }
    else if(hour=="24")
    {
        var hr = 0;
    }
    else
    {
        var hr = hour%12;
    }

    if(hr<10){
        hr="0"+hr;
    }
    if(min<10){
        min="0"+min;
    }
    if(sec<10){
        sec="0"+sec;
    }

    var ampm=hour<12?"AM":"PM";
    var time=hr+":"+min+":"+sec+" "+ampm;
    document.getElementById('clock').innerHTML = time;

}

setInterval(time,1000);




// ...................for stopwatch

let second = 00;
let ten = 00;
let min = 00;
let getSecond = document.querySelector('.seconds');
let getTen = document.querySelector('.tens');
let getMin = document.querySelector('.mins');
let btnstart = document.querySelector('.btn-start');
let btnstop = document.querySelector('.btn-stop');
let btnreset = document.querySelector('.btn-reset');
let x;

btnstart.addEventListener('click', () =>{
    x = setInterval(startTime, 10);
})

btnstop.addEventListener('click', () => {
    clearInterval(x);
})

btnreset.addEventListener('click', () =>{
    clearInterval(x);
    ten = '00';
    second = '00';
    min = '00';
    getSecond.innerHTML = second;
    getTen.innerHTML = ten;
    getMin.innerHTML = min;
})


function startTime(){
    ten++;
    if(ten <= 9){
        getTen.innerHTML = '0' + ten;
    }
    if(ten > 9){
        getTen.innerHTML = ten;
    }
    if(ten > 99){
        second++;
        getSecond.innerHTML = '0' + second;
        ten = 0;
        getTen.innerHTML = '0' + 0;
    }
    if (second > 9){
        getSecond.innerHTML = second;
    }

    if(second > 59){
        min++;
        getMin.innerHTML = '0' + min;
        second = 0;
        getSecond.innerHTML = '0' + 0;
    }
    if(min > 9){
        getSecond.innerHTML = min;
    }
}
