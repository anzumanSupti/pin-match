
//create random number

document.querySelector("#randomNumber").addEventListener("click", function() {
    const randomNumber = Math.floor( 1000 + Math.random() * 9000);
    document.querySelector("#random-display").value = randomNumber;
})

//value match function

function inputValue(number) {
   let userInput = document.getElementById("number-display");
    userInput.value +=  number;
}
    let rongNumber = 3;

    document.getElementById("submit").addEventListener("click", function(){
        const random = document.getElementById("random-display").value;
        const userValue = document.getElementById("number-display").value;
            if (random  == ""){ 
                document.getElementById("not-match").style.display = "block"
                setTimeout(() => {
                    document.getElementById("not-match").style.display = "none"
                }, 5000);
                rongNumber--;
            }
           else if(random == userValue){
                document.getElementById("match").style.display = "block"; 
                setTimeout(() => {
                    document.getElementById("match").style.display = "none";
                }, 5000); 
            }
            else{ 
                document.getElementById("not-match").style.display = "block"
                setTimeout(() => {
                    document.getElementById("not-match").style.display = "none"
                }, 5000); 
                rongNumber--;
            }
            document.getElementById("number-display").value = '';
            if(rongNumber == 0){
                document.getElementById("rongtext").innerHTML = "0 try left"
                document.getElementById("submit").disabled = true;
            }
            if(rongNumber == 1){
                document.getElementById("rongtext").innerHTML = "1 try left"
            }
            if(rongNumber == 2){
                document.getElementById("rongtext").innerHTML = "2 try left"
            }
    })



    //value clear function

    document.getElementById("clear").addEventListener("click",function(){
        document.getElementById("number-display").value = '';
    })

    //last charcter remove

    document.getElementById("lastCharcterRemove").addEventListener("click", function(){
        var strng = document.getElementById("number-display").value;
        document.getElementById("number-display").value = strng.substring(0,strng.length-1)
    })