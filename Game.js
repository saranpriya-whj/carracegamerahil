class Game{
    constructor(){

    }

    getstate(){
       var gamestateref = database.ref("Gamestate");
       gamestateref.on("value",function(data){
           Gamestate = data.val();
       })
    }

    update(state){
        database.ref("/").update({
            Gamestate:state
        })
    }

   async start(){
        if(Gamestate===0){
            player = new Player();
            var playercountref = await database.ref("playercount").once("value");
            if (playercountref.exists()){
               playercount = playercountref.val();
               player.getcount();
            }
            
          
           form = new Form();
           form.display();
           
        }

        car1 = createSprite(100,200);
        car1.addImage("car1",car1img);

        car2 = createSprite(300,200);
        car2.addImage("car2",car2img);

        car3 = createSprite(500,200);
        car3.addImage("car3",car3img);

        car4 = createSprite(700,200);
        car4.addImage("car4",car4img);

        cars = [car1,car2,car3,car4];
    }
    
    

    play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
       player.getplayerRank();
        Player.getplayerinfo();
        if(allplayers!=undefined){
            
            background(ground);
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);

            var index = 0;
            var x = 200;
            var y;

            for(var i in allplayers){
              //add 1 to index before every loop
                index+=1;
             //position of car 200 pixels away from each other 
                x+=200;
             //increment the y position using distance from database   
                y = displayHeight-allplayers[i].distance;

                cars [index-1].x = x;
                cars[index-1].y = y;

                if(index === player.index){
                    stroke(5);
                    fill("red");
                    ellipse(x,y,60,60);
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                    
                }

            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance+=50;
            
            
            player.update();
        }

        if(player.distance>3800){
            Gamestate = 2;
        
            player.rank =player.rank+1;
        
        Player.updateplayerRank(player.rank)
        
           
            
        }
        drawSprites();
    }

    end(){
       

        console.log("game ended");
        console.log(player.rank);
        form.restart();
    }
}



