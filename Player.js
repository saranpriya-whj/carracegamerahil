class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank =null;
     



    }

    getcount(){
        var playerCountref = database.ref("playercount");
        playerCountref.on("value",function(data){
            playercount = data.val();
        });
    }

    updatecount(count){
        database.ref("/").update({
            playercount:count
        })
    }

    update(){
        var playerindex = "players/player"+ this.index;
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance,
            rank : this.rank
            
        })

    }


    static getplayerinfo(){
        var playerinforef = database.ref("players");
        playerinforef.on("value",(data)=>{
            allplayers = data.val();
        })
    }
    getplayerRank() {
        database.ref('playerRank').on("value",(data)=>{
          this.rank = data.val();
        })
      }
    
      static updateplayerRank(rank) {
        database.ref('/').update({
          playerRank:rank
        })
      }

    



}