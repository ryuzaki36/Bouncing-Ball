function Pipe(){
  this.top = random((height-1)/2);
  this.bottom = random((height-1)/2);
  this.x = width;
  this.w = 100;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(bird){
    if (bird.y < this.top || bird.y > height - this.bottom){
      if (bird.x > this.x && bird.x < this.x+this.w){
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function(){
    fill(102,204,0);
    if (this.highlight){
      fill(255,153,153);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function(){
    this.x -= this.speed;
  }
}
