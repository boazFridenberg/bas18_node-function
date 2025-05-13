function time() {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      function Squares(containerId, count) {
        const container = document.getElementById(containerId);
        container.innerHTML = "";
        for (let i = 0; i < count; i++) {
          const square = document.createElement("div");
          square.classList.add("unit-square");
          container.appendChild(square); 
        }
      }

      Squares("hours", hours);
      Squares("minutes", minutes);
      Squares("seconds", seconds);
    }

    setInterval(time, 1000);