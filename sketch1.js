var l=[];
var flag=0;
function setup() {
  c=createCanvas(1700, 700);
  background(0);
  c.position(140,300);
  b=createButton("Sort it!");
  b.style("font-size","50px");
  b.style("background-color","#093a4c");
  b.style("border-radius","5px");
  b.position(900,300);
  b.mousePressed(myfun);
  h=createElement('h1','Bubble Sort');
  h.style("background-color","purple");
  h.style("width","500px");
  h.style("text-align","center");
  h.style("font-size","60px");
  h.position(750,150);
  for(var k=0;k<25;k++)
  {
    l[k]=int(random(100,500));
  }
}
function myfun()
{
  flag=1;
}
var i=0;
var j=0;
var x=100;
var temp;
var q=0;
function draw() {
  background(230,230,230);
  if(flag==1)
  {
  
    
    if(l[j]>l[j+1])
    {
      temp=l[j];
      l[j]=l[j+1];
      l[j+1]=temp;
    }
   
    if(x>l.length)
    {
      x=0;
    }
    if(j<=l.length)
    {
      j++;
    }
    else if( i<=l.length)
    {
      i++;
      j=0;
    }
    else
    {
      noLoop();
      final();
    }
  
    }
    var x=100;
    var y=105;
	for(var k=0;k<=l.length;k++)
	{
    
    fill(99,153,241);
    noStroke();
    rect(x,0,50,l[k]);
    x=x+60;
    textSize(25);
    fill(255,0,0);
    text(l[k],y,l[k]-3);
    y=y+60;
    
	}
}
function final()
{
  var x=100;
  var y=105;
  for(var k=0;k<=l.length;k++)
  {
    
    fill(0);
    noStroke();
    rect(x,0,50,l[k]);
    x=x+60;
    textSize(25);
    fill(255,0,0);
    text(l[k],y,l[k]-3);
    y=y+60;
    
  }
}