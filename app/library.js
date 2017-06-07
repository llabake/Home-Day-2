//module.exports = {
//    Car:  function()  {
//    name : 'General';
//    model: 'GM';
//    numOfDoors: 4;
//    numOfWheels:4;
//    type:'type'
//
//    drive : function (speed) {
//      return 'driving a ' + this.name + ' at speed ' + this.speed
//    }
//  }
//
//
//
//  var honda = new Car ('Honda');
//
//
//  var toyota = new Car ('Toyota')
//  this.name = 'Toyota'
//  this.model = 'Corolla'
//
//  var porshe = new Car ('Porshe')
//  this.numOfDoors = 2
//  this.speed = '250km/h'
//
//  var koenigsegg = new Car ('Koenigsegg')
//  this.numOfDoors = 2
//
//
//
//  if (this.name === Porshe) || (this.name === 'Koenigsegg') {
//    this.numOfDoors == 'numOfDoors'
//  }
//
//
//  var man = new Car ('MAN')
//  this.numOfWheels = 8
//  this.type = 'trailer';
//  this.speed = '0km/h';
//  man.drive = 77
//
//  var isSaloon == true;
//  if (this.type === 'trailer'){
//    isSaloon == false;
//  }
//    
//}  

module.exports = {

    reverseString: function (str) {
        new_str = [];

        if (str.length === 0) {
            return null;
        } else if (typeof (str) != 'string') {
            return null;
        } else {
            for (var i = 0; i < str.length; i++) {
                new_str.unshift(str[i]);
            }
            new_str = new_str.join('');
            if (new_str === str) {
                return true;
            } else {
                return new_str;
            }
        }
    }
}
