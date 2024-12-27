

        // choice events
        let oldEvent = null;
        let choice = document.querySelector(".choice");
        choice.addEventListener("mouseup", (event)=>{
            if(oldEvent == null){
                event.target.style.border =  "1px solid #000";
                oldEvent = event.target;
            }else{
                oldEvent.style.border = "0";
                event.target.style.border =  "1px solid #000";
                oldEvent = event.target;
            }
        });

        //color selection input 1
        let data1;
        let input1 = document.getElementById("color1");
        input1.addEventListener("input", ()=>{
            input1.style.backgroundColor = input1.value;
            data1 = input1.value;
        });

        //color selection input 2
        let data2;
        let input2 = document.getElementById("color2");
        input2.addEventListener("input", ()=>{
            input2.style.backgroundColor = input2.value;
            data2 = input2.value;
        });

        //Gradient generation
        let finalData = document.querySelector(".final-data");
        let Generate = document.querySelector(".b3");
        let old = document.querySelector(".old");

        Generate.addEventListener("click", ()=>{

            //create html element and it's variable
            let data = document.createElement("h3");
            
            data.innerText = `background-image: linear-gradient(to top right , ${data1} , ${data2});`;            
            finalData.replaceChild(data, old);
            old = data;
        });
