
module.exports = {
    Car:  function(name, model, type)  {
        if (!name) {
            this.name = 'General'
        } else {
            this.name = name
        }
        
        if (!model) {
            this.model = 'GM'
        } else {
            this.model = model
        }
                
        if ((this.name ==='Porshe') || (this.name === 'Koenigsegg')) {
            this.numOfDoors = 2
        } else {
            this.numOfDoors = 4
        }
        
        this.type = type;
        
        if(this.type != 'trailer'){
            this.numOfWheels = 4;
            this.isSaloon = true;
        } else{
            this.numOfWheels = 8;
            this.isSaloon = false;
        }
        
        
        this.speed = '0 km/h'
        
        this.drive = function (speed) {
            if(this.type === 'trailer'){    
                this.speed = '77 km/h';
            } else {
                this.speed = '250 km/h'
            }
            return this;
        }
    }
