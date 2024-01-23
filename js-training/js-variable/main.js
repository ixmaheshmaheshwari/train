console.log("hello");

function check_interest(){
    let interest=document.getElementById("interest").value;
    console.log( typeof interest);

    console.log(typeof  interest)
    if (isNaN(interest)){
        document.getElementById("label-interest").style.display="flex";
        document.getElementById("label-interest").innerText="Please enter numeric value";
    }
    else{
        document.getElementById("label-interest").style.display="none";
        document.getElementById("label-interest").innerText = ""; // Clear any previous error message
    }

}
function check_time(){
    let time=document.getElementById("time").value;
   
    console.log(time);
    if (isNaN(time)){
        document.getElementById("label-time").style.display="flex";
        document.getElementById("label-time").innerText="Please enter numeric value";
    }
    else{
        document.getElementById("label-time").style.display="none";
        document.getElementById("label-time").innerText = ""; // Clear any previous error message
    }
}

function check_amount(){
    let amount=document.getElementById("amount").value;
    
    console.log(amount);
    
    console.log(typeof  amount)
    if (isNaN(amount)){
        document.getElementById("label-amount").style.display="flex";
        document.getElementById("label-amount").innerText="Please enter numeric value";
    }
    else{
        document.getElementById("label-amount").style.display="none";
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
    else if (isNaN(result)){
        document.getElementById("label-result").innerText="Invalid Result";

    }
       
    
    else{
    document.getElementById("label-result").innerText="The Total Interest is :"+result;
}
}
document.getElementById("interest").addEventListener("input",check_interest);
document.getElementById("time").addEventListener("input",check_time);
document.getElementById("amount").addEventListener("keyup",check_amount);