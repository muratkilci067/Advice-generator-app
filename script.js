    
    const advice = document.getElementById("advice");
    const adviceId = document.getElementById("advice-ID");
    const diceBtn = document.getElementById("dice-btn");
    diceBtn.addEventListener("click", ()=>{
      fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
    console.log(data.slip.advice);
    advice.textContent = `"${data.slip.advice}"`;
    adviceId.textContent = `ADVICE # ${data.slip.id}`;
    })
    .catch(error => console.error("Hata", error));

     
    })