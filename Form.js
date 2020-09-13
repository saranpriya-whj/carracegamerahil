class Form{
    constructor(){
       this.input = createInput("name");

       this.button = createButton("play");

       this.greeting = createElement("h2");

       this.reset = createButton("Restart");
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");

        title.position(displayWidth/2 -50,0);

        this.input.position(displayWidth/2 -50,displayHeight/2);

        this.button.position(displayWidth/2 -50,displayHeight/2 -30);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playercount+=1;
            player.index = playercount;
            player.update();
            player.updatecount(playercount);
            this.greeting.html("Welcome "+ player.name);
            this.greeting.position(130,160);
        }) 

     }

     restart(){

        this.reset.position(displayWidth/2,displayHeight/4);

        this.reset.mousePressed(()=>{

       player.updatecount(0);
       game.update(0);
       database.ref("players/").remove();
       database.ref("playerrank/").remove();
   })
}

  
}