// COMPONENTS
class Bird{
  // create object
  constructor(){
  this.top = Math.round((500 - 50) *Math.random());
  this.left = Math.round((500 - 50)*Math.random());
  this.color = 'red';
  this.speed = Math.round(Math.random()*4 +1)
  }
  // renders to html
  render(){
            this.div =  document.createElement('div');
            this.div.setAttribute('class', `bird ${this.color}`);
            this.div.style.top = this.top + 'px';
            this.div.style.left = this.left + 'px';
            document.body.firstElementChild.appendChild(this.div);
  }
  fly(){
    var self = this;
    setInterval(function(){
      if(self.left > (250 + Math.random()*200)  || self.left  < Math.random()*200){
        self.speed *= -1;
        if(Math.abs(self.speed) < 2){
          self.speed *= 1.5;
        }
      }
      self.left+=self.speed;
      self.div.style.top = self.top + 'px';
      self.div.style.left = self.left + 'px';
    },10);
  }



}

//при помоши position left top right добиться того чтобы птица двигалась
