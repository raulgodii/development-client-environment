class cat{
    constructor(){
        this.tiredness = 0;
        this.hunger = 0;
        this.lonliness = 0;
        this.happiness = 0;
    }

    feed(){
        if(this.hunger+5 > 10){
            this.hunger = 10;
        }else{
            this.hunger += 5;
        }
    }

    sleep(){
        if(this.tiredness+5 > 10){
            this.tiredness = 10;
        }else{
            this.tiredness += 5;
        }
    }

    pet(){
        if(this.happiness+5 > 10){
            this.happiness = 10;
        }else{
            this.happiness += 5;
        }
        if(this.lonliness+5 > 10){
            this.lonliness = 10;
        }else{
            this.lonliness += 5;
        }
    }

    status(){
        if(this.tiredness<=5){
            console.log("The cat is really tired");
        }
        if(this.hunger<=5){
            console.log("The cat is really hungry");
        }
        if(this.lonliness<=5){
            console.log("The cat is really lonly");
        }
        if(this.happiness<=5){
            console.log("The cat is really sad");
        }

        console.log("STATUS:");
        console.log("Tiredness: " + this.tiredness + "/10");
        console.log("Hunger: " + this.hunger + "/10");
        console.log("Lonlliness: " + this.lonliness + "/10");
        console.log("Happiness: " + this.happiness + "/10");
    }
}