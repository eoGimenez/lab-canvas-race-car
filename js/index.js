window.addEventListener ("load", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  document.getElementById('start-button').addEventListener ("click", () => {
    startGame();
  });
  
  function startGame() {
    let carretera = document.createElement("img");
    carretera.src = "images/road.png";
    ctx.drawImage(carretera, 0, 0, 500, 650);
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
        this. y = 0;
        this.width = 200;
        this.height = 30;
      }
    }
    
    let objetoSelected = [];
    let player = new Autito;
    
    let update = ()=>{
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(carretera, 0, 0, 500, 650);
      player.reprint()
      ctx.fillStyle = "yellow"
      objetoSelected.forEach((bloque) => {
        ctx.fillRect(bloque.x, bloque.y, bloque.width, bloque.height)
        bloque.y += 5
      })
      if (dif > 2000 && dif < 3200) {
        repeat+= 2
      } else if (dif > 3200)
        repeat++
      if (repeat >= 185) {
        repeat = 0;
        let obj = new Obstaculo;
        objetoSelected.push(obj);
      }
      console.log(repeat)
      
    } 
    let repeat = 0;
    let dif = 0;
    setInterval (() => {
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
  
  //ctx.fillStyle = "black";
    //ctx.font = "16px Arial";
    //ctx.fillText(`Score: ${puntos}`,150, 150);
   // ctx.drawImage(auto, player.x, 500, 70, 125);
  