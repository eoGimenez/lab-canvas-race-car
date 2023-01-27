window.addEventListener ("load", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  document.getElementById('start-button').addEventListener ("click", () => {
    startGame();
  });
  
  function startGame() {
    let carretera = document.createElement("img");
    carretera.src = "images/road.png";
    ctx.drawImage(carretera, 0, 0, 500, 700);
    let auto = document.createElement("img");
    auto.src = "images/car.png";
    ctx.fillStyle = "yellow"

    class Autito {
      constructor () {
        this.x = 215;
        this.velocidad = 25;
      }
      reprint () {
        ctx.drawImage(auto, this.x, 500, 70, 125)
      }
    }
    class Obstaculo {
      constructor () {
        this.x = Math.floor(Math.random() * 300);
        this. y = -30;
        this.width = Math.floor(Math.random() *200)+150;
        this.height = 30;
      }
      print (ctx) {
        ctx.fillRect(bloque.x, bloque.y, bloque.width, bloque.height)
      }
    }
    let score = 0;
    let points = () => {
      objetoSelected.forEach((bloque) => {
        if (!(player.x + player.w < bloque.x || player.x > bloque.x + bloque.w || player.y + player.h < bloque.y || player.y > bloque.h + bloque.y)) {
          score++
        } else clearInterval(test);
        
      })
    }
    
    let objetoSelected = [];
    let player = new Autito;
    
    let update = ()=>{
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.clearRect(0, 600, 500, 500);
      ctx.drawImage(carretera, 0, 0, 500, 700);
      player.reprint()
      ctx.fillStyle = "yellow"
      points()
      objetoSelected.forEach((bloque) => {
        ctx.fillRect(bloque.x, bloque.y, bloque.width, bloque.height)
        bloque.y += 5
      })
      if (dif > 2000 && dif < 3200) {
        repeat+= 2;
        score++;
      } else if (dif > 3200) {
      repeat++;
      score +=5;
      }
      if (repeat >= 185) {
        repeat = 0;
        let obj = new Obstaculo;
        objetoSelected.push(obj);
      }
      //ctx.fillStyle = "black";
      ctx.font = "25px Arial";
      ctx.fillText(`Score: ${score}`,65, 50);
      //ctx.drawImage(auto, player.x, 500, 50, 50); 
    } 
    let repeat = 0;
    let dif = 0;
    let test = setInterval (() => {
      repeat++
      dif++
      update()
    }, 20)
      
    document.getElementsByTagName("body")[0].addEventListener ("keydown", (flecha) => {
      switch(flecha.key) {
        case "ArrowLeft" : 
        player.x -= player.velocidad
        if(player.x < 0) player.x = 0;
        break;
        case "ArrowRight" : 
        player.x += player.velocidad
        if(player.x > 430) player.x = 430;
        break;
        default:
          break;
        }
      })
    }
  });
  


  