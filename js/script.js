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