console.log("hello");

function check_interest(){
    let interest=document.getElementById("interest").value;
    let intinterest;
    console.log(interest);
    if(!isNaN(interest)){
        intinterest=parseInt(interest);
    }
    console.log(typeof  intinterest)
    if (typeof intinterest !== "number"){
        document.getElementById("label-interset").style.display="flex";
        document.getElementById("label-interset").innerText="Please enter numeric value";
    }
    else{
        document.getElementById("label-interset").innerText = ""; // Clear any previous error message
    }
}
function check_time(){
    let time=document.getElementById("time").value;
    let inttime;
    console.log(time);
    if(!isNaN(time)){
        inttime=parseInt(time);
    }
    console.log(typeof  inttime)
    if (typeof inttime !== "number"){
        document.getElementById("label-time").style.display="flex";
        document.getElementById("label-time").innerText="Please enter numeric value";
    }
    else{
        document.getElementById("label-time").innerText = ""; // Clear any previous error message
    }
}
function check_amount(){
    let amount=document.getElementById("amount").value;
    let intamount;
    console.log(amount);
    if(!isNaN(amount)){
        intamount=parseInt(amount);
    }
    console.log(typeof  intamount)
    if (typeof intamount !== "number"){
        document.getElementById("label-amount").style.display="flex";
        document.getElementById("label-amount").innerText="Please enter numeric value";
    }
    else{
        document.getElementById("label-amount").innerText = ""; // Clear any previous error message
    }
}

function calculate_fine(){
    let interest=document.getElementById("interest").value;
    let time=document.getElementById("time").value;
    let amount=document.getElementById("amount").value;
    let result=(time*interest*amount)/100;
    if(interest=="" || time=="" || amount==""){
        document.getElementById("label-result").innerText="Please enter all values";

    }
    else{
    document.getElementById("label-result").innerText="The Total Interest is :"+result;
}
}
document.getElementById("interest").addEventListener("input",check_interest);
document.getElementById("time").addEventListener("input",check_time);
document.getElementById("amount").addEventListener("input",check_amount);