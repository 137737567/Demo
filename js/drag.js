function Drag(id){
			var _this=this;
			this.disX=0;
			this.disY=0;
			this.oDiv=document.getElementById(id);
			this.oDiv.onmousedown =function () {
				_this.fnMouseDn();
				return false;
			}
		}
		Drag.prototype.fnMouseDn= function(ev){
			var eve=ev || event;
			var _this=this;
			this.disX=eve.clientX-this.oDiv.offsetLeft;
			this.disY=eve.clientY-this.oDiv.offsetTop;
			document.onmousemove=function () {
				_this.fnMouseMove();
			}
			document.onmouseup=function () {
				_this.fnMouseUp();
			}
		}
		
		Drag.prototype.fnMouseMove=	function(ev){
			var eve=ev || event;
			this.oDiv.style.left=eve.clientX-this.disX+'px';
			this.oDiv.style.top=eve.clientY-this.disY+'px';
			
		}
		Drag.prototype.fnMouseUp= function(){
			document.onmouseup=document.onmousemove=null;
		}