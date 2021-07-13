 const btn = document.getElementById('btn');
 const output = document.getElementById('outputtext');
 const outputCount = document.getElementById('outputcount')

let county = 1

const number = Math.floor(Math.random() * 100);

 btn.addEventListener('click', function(){
    const input = Number(document.getElementById('userInput').value); //Number() işlevi nesne bağımsız değişkenini nesnenin değerini temsil eden bir sayıya dönüştürür.
     if (Number.isFinite(input)){   //Number.isFinite()Belirli bir değerin tipi olmasıdır, bu kontrol - yöntem iletilen değer sonlu sayı olup olmadığını belirler
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
     if(input > 100 ){
        output.innerHTML = "Enter a number of 100 or less."
     }
 }
 else{
    alert("Please Enter Only Number")}
})