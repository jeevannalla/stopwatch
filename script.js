        let [m, s, ms] = [0,0,0];
        let displayTime = document.getElementById("Time");
        let time = null;

        function stopwatch(){
            ms++;
            if(ms == 100){
                ms=0;
                s++;
                if(s==60){
                    s=0;
                    m++;
                }
            }
            let min = m < 10 ? "0" + m : m;
            let sec = s < 10 ? "0" + s : s;
            let mss = ms < 10 ? "0" + ms : ms;

            displayTime.innerHTML = min +":"+ sec +":"+ mss;
        }
        function startTime(){
            if(time !== null){
                clearInterval(time);
            }
            time= setInterval(stopwatch, 0.001);
        }

        function stopTime(){
            clearInterval(time);
        }

        function resetTime(){
            clearInterval(time);
            [m, s, ms] = [0,0,0];
            displayTime.innerHTML = "00:00:00"
        }