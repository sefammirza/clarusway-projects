 let btn = document.getElementById('btn');
 let output = document.getElementById('outputtext');
 let outputCount = document.getElementById('outputcount')

var county = 1

 let number = Math.floor(Math.random() * 100)+1;

 btn.addEventListener('click', function(){
     let input = Number(document.getElementById('userInput').value);
     if (Number.isFinite(input)){
     if(input == number){
         output.innerHTML = `You guess right, your number was ${number}`
         outputCount.innerHTML = ` Number of Attempts : ${county}`;
     }
     else if (input < number){
         output.innerHTML = "You guess too low!"
         outputCount.innerHTML = ` Number of Attempts : ${county}`;
         county++;
     }
     if(input > number){
         output.innerHTML = "You guessed too high!"
         outputCount.innerHTML = `Number of Attempts : ${county}`;
         county++;
     }
 }
 else{
    alert("Please Enter Only Number")}
})