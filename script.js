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

        //gradient selector 
        let selector = "top right";
        let i1 = document.querySelector(".i1");
        let i2 = document.querySelector(".i2");
        let i3 = document.querySelector(".i3");
        let i4 = document.querySelector(".i4");
        let i5 = document.querySelector(".i5");
        let i6 = document.querySelector(".i6");
        let i7 = document.querySelector(".i7");
        let i8 = document.querySelector(".i8");
        let i9 = document.querySelector(".i9");

        i1.addEventListener("click", ()=>{
            selector = "top right";
            console.log(selector);
        });
        
        i2.addEventListener("click", ()=>{
            selector = "right";
            console.log(selector);
        });

        i3.addEventListener("click", ()=>{
            selector = "right bottom";
            console.log(selector);
        });
        
        i4.addEventListener("click", ()=>{
            selector = "bottom";
            console.log(selector);
        });
        
        i5.addEventListener("click", ()=>{
            selector = "left bottom";
            console.log(selector);
        });
        
        i6.addEventListener("click", ()=>{
            selector = "left";
            console.log(selector);
        });
        
        i7.addEventListener("click", ()=>{
            selector = "left top";
            console.log(selector);
        });
        
        i8.addEventListener("click", ()=>{
            selector = "top";
            console.log(selector);
        });
        
        i9.addEventListener("click", ()=>{
            selector = "circle";
            console.log(selector);
        });

        //Gradient generation
        let finalData = document.querySelector(".final-data");
        let Generate = document.querySelector(".b3");
        let old = document.querySelector(".old");
        let body = document.querySelector("body");

        Generate.addEventListener("click", ()=>{

            if(!data1 || !data2){
                alert("Please select both colors!");
                return;
            }
            //create html element and it's variable
            let data = document.createElement("h3");

            //syntax variable
            let syntax = "";

            if(selector !== "circle"){   
                syntax = `linear-gradient(to ${selector} , ${data1} , ${data2})`;
                data.innerText = `background-image: ${syntax}`;
            }
            else{
                syntax = `radial-gradient(circle, ${data1} , ${data2})`;
                data.innerText = `background-image: ${syntax}`;
            }

            //replace data with old once
            finalData.replaceChild(data, old);
            old = data;

            //changing body gradient to created once
            body.style.backgroundImage = syntax;
        });
