function limitDrag(id){
	//继承属性
	Drag.call(this,id);
}

//原型链继承方法
for(var i in Drag.prototype){
	limitDrag.prototype[i]=Drag.prototype[i]; 
	
}
//方法重写
limitDrag.prototype.fnMouseMove=	function(ev){
	var eve=ev || event;
	var l=eve.clientX-this.disX;
	var t=eve.clientY-this.disY;
	if(l<0){
		l=0;
	}else if(l>document.documentElement.clientWidth -this.oDiv.offsetWidth){
		l=document.documentElement.clientWidth -this.oDiv.offsetWidth;
	}
	if(t<0){
		t=0;
	}else if(t>document.documentElement.clientHeight -this.oDiv.offsetHeight){
		t=document.documentElement.clientHeight -this.oDiv.offsetHeight;
	}
	this.oDiv.style.left=l+'px';
	this.oDiv.style.top=t+'px';
	
}
