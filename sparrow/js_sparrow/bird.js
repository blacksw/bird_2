// COMPONENTS
class Bird{
  // create object
  constructor(){
  this.top = Math.round((500 - 50) *Math.random());
  this.left = Math.round((500 - 50)*Math.random());
  this.color = 'red';
  this.speed = Math.round(Math.random()*4 +1);
    this.speed_1 = Math.round(Math.random()*4 +1)
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
      if(self.left > (500-50)  || self.left  < 0){
        self.speed *= -1;
        if(Math.abs(self.speed) < 2){
          self.speed *= 1.5;
        }
      }
      else if(self.top > (500 -50) || self.top < 0){
          self.speed_1 *= -1;
          if(Math.abs(self.speed_1) < 2){
            self.speed_1 *= 1.5;
          }
      }
      self.left+=self.speed;
      self.top+= self.speed_1;
      self.div.style.top = self.top + 'px';
      self.div.style.left = self.left + 'px';
    },10);
  }
  die(){
    this.div.classList.add('dying');
    var self_1 = this;
    clearInterval(this.timer);
    setTimeout(function(){
      self_1.div.parentElement.removeChild(self_1.div);
    },500);
  }

}

//при помоши position left top right добиться того чтобы птица двигалась
