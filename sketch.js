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
  h=createElement('h1','Selection Sort');
  h.style("background-color","purple");
  h.style("width","500px");
  h.style("text-align","center");
  h.style("font-size","60px");
  h.position(750,150);
  for(var i=0;i<25;i++)
  {
  	l[i]=random(300,700);
  }
}
function myfun()
{
  flag=1;
}
var i=0;
var j=i+1;
var x=0;
var temp;
function draw() {
  background(230,230,230);
  if(flag==1)
  {
  
    
    if(l[i]>l[j])
    {
      temp=l[i];
      l[i]=l[j];
      l[j]=temp;
    }
   
    if(x>l.length)
    {
      x=0;
    }
    if(j<=l.length)
    {
      j++;
    }
    else if(j>l.length && i<l.length)
    {
      i++;
      j=i+1;
    }
    else
    {
      noLoop();
    }
  
    }
    var x=350;
	for(var k=0;k<=l.length;k++)
	{
		fill(99,153,241);
    noStroke();
		rect(x,0,30,l[k]);
		x=x+40;
    
	}
}