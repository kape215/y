document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("reveal-btn");
    const message = document.getElementById("message");
    const candleSection = document.getElementById("candle-section");
    const flame = document.getElementById("flame");
    const firstMsg = document.getElementById("first-msg");
    const bgMusic = document.getElementById("bg-music");
  
    let holdTimer;
    let messageShown = false;
  
    button.addEventListener("mousedown", () => {
      holdTimer = setTimeout(() => {
        if (!messageShown) {
          message.classList.remove("hidden");
          message.classList.add("show");
  
          candleSection.classList.remove("hidden");
  
          bgMusic.volume = 0.4;
          bgMusic.play().catch(() => {});
          messageShown = true;
          button.textContent = ">-<";
          burstBalloons(); 
        }
      }, 3000);
    });
  
    button.addEventListener("mouseup", () => clearTimeout(holdTimer));
    button.addEventListener("mouseleave", () => clearTimeout(holdTimer));
  
    flame.addEventListener("click", () => {
      const blowSound = document.getElementById("blow-sound");
      blowSound.volume = 0.7;
      blowSound.play().catch(() => {});
    
      flame.classList.add("blown-out");
      candleSection.classList.add("hidden");
      firstMsg.classList.remove("hidden");
      holdTimer = setTimeout(() => {
      document.getElementById("first-question").classList.remove("hidden");
    }, 5000);
  
    });
  });
  
  function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDuration = `${8 + Math.random() * 6}s`;
    
    balloon.addEventListener("animationend", () => {
        balloon.remove();
      });
      
    document.body.appendChild(balloon); 
    }      
  
    document.addEventListener("DOMContentLoaded", () => {
      const yesBtn = document.getElementById("yes-btn");
      const noBtn = document.getElementById("no-btn");
      const response = document.getElementById("response");
      const responseText = document.getElementById("response-text");
      const retryText = document.getElementById("retry-text");
      const questionBox = document.getElementById("cool-question");
    
      function hideButtons() {
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
      }
  
      yesBtn.addEventListener("click", () => {
        hideButtons();
        responseText.textContent = "Nice joke.";
        response.classList.remove("hidden");
        retryText.classList.remove("hidden");
    
        document.body.classList.add("flash");
        setTimeout(() => {
          document.body.classList.remove("flash");
          retryText.classList.add("hidden");
          response.classList.add("hidden");
          yesBtn.style.display = "inline-block";
          noBtn.style.display = "inline-block";
        }, 2000);
      });
    
      noBtn.addEventListener("click", () => {
        yesBtn.style.display = "none";
        responseText.textContent = "Yeah obviously. If you ever miss me just text me:)";
        response.classList.remove("hidden");
        retryText.classList.add("hidden");
      });
    });
    

    function burstBalloons() {
        for (let i = 0; i < 20; i++) {
          setTimeout(() => {
            createBalloon();
          }, i * 150);
        }
      }
      