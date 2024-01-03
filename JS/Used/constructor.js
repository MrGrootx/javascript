function bike(modal, versions, offroad, color, year, price) {
   this.modal = modal;
   this.versions = versions;
   this.offroad = offroad;
   this.color = color;
   this.year = year;
   this.price = price;
   this.drive = function(){console.log(`You drived ${this.modal}`);}
 }
 
 const bikesDatabase = new bike("Chevrolet", 2, false, "red", 2014, 10000);
 const bikesDatabase1 = new bike("Mustang", 1, false, "black", 1903, 1000000);
 console.log(bikesDatabase);
 console.log(bikesDatabase1);
 