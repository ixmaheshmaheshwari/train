function color_change(){
    const select = document.getElementById("theme").value;

    let buttonList= Array.from(document.getElementsByTagName("button"));
   
    console.log(buttonList,select);
    

    switch (select) {
        case "Red":
            buttonList.forEach(button => {
                console.log(button)
                button.style.backgroundColor = "red"; 
            });
            break;
        case "Blue":
            buttonList.forEach(button => {
                button.style.backgroundColor = "blue"; 
            });
            break;
        case "Green":
            buttonList.forEach(button => {
                button.style.backgroundColor = "green"; 
            });
            break;
       
    }
}
