function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#BFCBC2")
}

function drawFlower(clr1,clr2,size=1){
push()
	 fill(clr1)
	 ellipse(0, 0, 50, 50);
	 ellipseMode(CORNER)   // 設定以左上角為座標點上的座標
	 //fill("#A5CBC3")
	fill(clr2)
	for(var i=0;i<16;i=i+1){//設迴圈讓他重複16次
		ellipse(30, -20, 100*size, 30);  // 設定以左上角為座標點，做一個花瓣
		line(30,-5,120*size,-5)
		rotate(PI/8) //180度產生八片，360度產生16片
	}
	pop()
    
  
    
}


function draw() {
	background("#BFCBC2")
	for(var x=0;x<width;x=x+150)
	{
		for(var y=0;y<height;y=y+150)
		{
			push()
				translate(x,y);
				rotate(frameCount/50)
				drawFlower("#FF934F","#8FB8ED",map(mouseX,0,width,0,1.5))
			pop()
		}
	}
}