
(function(w){
    w.pedesis = {};
    w.pedesis.transfromCss = function (node, type, val) {
        if (typeof node === "object" && typeof node["transform"] === "undefined") {
            node["transform"] = {}
        }
        //arguments传入的参数
        if (arguments.length >= 3) {
            var text = "";
            node["transform"][type] = val;
            for (item in node["transform"]) {
                if (node["transform"].hasOwnProperty(item)) {
                    //判断是否是自己的不是原型链上的
                    switch (item) {
                        case "translateX":
                        case "translateY":
                            text += item + "(" + node["transform"][item] + "px)";
                            break;
                        case "scale":
                            text += item + "(" + node["transform"][item] + ")";
                            break;
                        case "rotate":
                            text += item + "(" + node["transform"][item] + "deg)";
                            break;
                    }
                }

            }
            node.style.transform = node.style.webitTransform = text;
        } else if (arguments.length == 2) {
            val = node["transform"][type];
            if (typeof val === "undefined") {
                switch (type) {
                    case "translateX":
                    case "translateY":
                    case "rotate":
                        val = 0;
                        break;
                    case "scale":
                        val = 1;
                        break;

                }
            }
            //console.log(val);
            return val;
        }

    }
    w.pedesis.carouselimg=function(arr){
        var  pointsLength=arr.length;
            //创建ul骨架
            var carouselDiv = document.querySelector(".carousel-wrap");
            if (carouselDiv) {
                var needCarousel=carouselDiv.getAttribute("needCarousel");
                
                needCarousel= needCarousel==null?false:true;
               
                if(needCarousel){
                   
                    arr=arr.concat(arr);
                }
        

                //var carouselDiv=document.querySelector(".carousel-wrap");
                var styleNode = document.createElement("style");
                var ulNode = document.createElement("ul");
                for (var i = 0; i < arr.length; i++) {
                    ulNode.innerHTML += "<li><a href='javascript:;'><img src='images/" + arr[i] + "'></a></li>"
                }
                styleNode.innerHTML = ".carousel-wrap>ul{width: " + arr.length + "00%;}.carousel-wrap>ul>li{width: " + (1 / arr.length) * 100 + "%;}"
                carouselDiv.appendChild(ulNode);
                document.head.appendChild(styleNode);

                var imgNodes = document.querySelector(".carousel-wrap > ul > li > a >img");
                setTimeout(function () {
                    carouselDiv.style.height = imgNodes.offsetHeight + "px";
                }, 100)
            }
            //圆点

            var carouselpoint = document.querySelector(".carousel-wrap>.carousel-point");
            if (carouselpoint) {
                for (var i = 0; i < pointsLength; i++) {
                    if (i == 0) {
                        carouselpoint.innerHTML += "<span class='active'></span>"
                    } else {
                        carouselpoint.innerHTML += "<span></span>"
                    }

                }

            }
            //滑动
            var startX = 0;
            var stremX = 0;
            var index=0;
            var startY=0;
            

            var isX=true;
            var isFirst=true;
            var ulList = document.querySelector(".carousel-wrap>ul");
            carouselDiv.addEventListener("touchstart", function (e) {
                e = e || event;
                clearInterval(timer);
                //无缝
                if(needCarousel){
                    if(index==0){
                    index=-pointsLength;
                }else if(-index==arr.length-1){
                    index=-(pointsLength-1);
                }
                ulList.style.transform= pedesis.transfromCss(ulList,"translateX",index * document.documentElement.clientWidth);
                }
                
                startX = e.changedTouches[0].clientX;
                startY=e.changedTouches[0].clientY;
                stremX = pedesis.transfromCss(ulList,"translateX");
                ulList.style.transition = "none";
                isX=true;
                 isFirst=true;
                //console.log(start,stremX);
            })
            carouselDiv.addEventListener("touchmove", function (e) {
                e = e || event;
                if(!isX){
                    return;
                }


                var nowX = e.changedTouches[0].clientX;
               var  nowY = e.changedTouches[0].clientY;
                var distX = nowX - startX;
                var distY=nowY-startY;
                //防抖动
                if(isFirst){
                    isFirst=false;
                    if(Math.abs(distY)>Math.abs(distX)){
                        isX=false;
                        return;
                    }
    
                }
                
                
                ulList.style.transform =pedesis.transfromCss(ulList,"translateX",distX+stremX)
                //ulList.style.left=distX+stremX+"px";
                //console.log(ulList.style.left,distX,stremX);

            })
            carouselDiv.addEventListener("touchend", function () {
                 index = pedesis.transfromCss(ulList,"translateX") /document.documentElement.clientWidth;
                index = Math.round(index);
                if (index > 0) {
                    index = 0
                } else if (index < 1 - arr.length) {
                    index = 1 - arr.length;
                }
                dots(index);
                ulList.style.transition = ".5s transform";
                //translateX=index * document.documentElement.clientWidth;
                ulList.style.transform= pedesis.transfromCss(ulList,"translateX",index * document.documentElement.clientWidth);
                //ulList.style.left = index * carouselDiv.clientWidth + "px";
                if(needMove){
                move();
            }
            })


            var timer=0;
            var flag=0;
            var needMove=carouselDiv.getAttribute("needMove");
            needMove=needMove==null?false:true;
            if(needMove){
                move();
            }
            
            function move(){
            clearInterval(timer);
            timer=setInterval(function(){
                //5图片,最后一张和第一张会不流畅
                if(arr.length==pointsLength){
                    if(index==1-arr.length){
                    ulList.style.transition="none";
                    index=0
                    ulList.style.transform= pedesis.transfromCss(ulList,"translateX",index * document.documentElement.clientWidth);
                }
                //10图片
                }else if(arr.length>pointsLength){
                    if(index==1-arr.length){
                    ulList.style.transition="none";
                    index=1-pointsLength;
                    ulList.style.transform= pedesis.transfromCss(ulList,"translateX",index * document.documentElement.clientWidth);
                }
                }
               
                console.log(index);
                setTimeout(function(){
                    index--
                    ulList.style.transition="1s transform";
                    dots(index);
                ulList.style.transform= pedesis.transfromCss(ulList,"translateX",index * document.documentElement.clientWidth);
                
                },50)
              
            },1000)
            }
            function dots(index){
                if(!carouselpoint){
                    return;
                }
                var carouselspan = document.querySelectorAll(".carousel-wrap>.carousel-point>span")
                for (var i = 0; i < pointsLength; i++) {
                    carouselspan[i].className = "";
                }
                carouselspan[-index%pointsLength].classList.add("active");
            }
            
    }
    w.pedesis.addClass=function(node,className){
        var reg=new RegExp("\\b"+className+"\\b");
		if(!reg.test(node.className)){
			node.className +=(" "+className); 
		}
    }
    w.pedesis.removeClass=function(node,className){
		if(node.className){
			var reg=new RegExp("\\b"+className+"\\b");
			var classes = node.className;
			node.className=classes.replace(reg,"");
			if(/^\s*$/g.test(node.className)){
				node.removeAttribute("class");
			}
		}else{
			node.removeAttribute("class");
		}
    }
    w.pedesis.dragMoveY=function(navDiv,callBack){
      
            listUl=navDiv.children[0];
            
            var start={x:0,y:0};
            var trY=0;
            
            var lastTime=0;
            var lastPoint=0;
            var pointDis=0,timeDis=1;
            var minY=navDiv.clientHeight-listUl.offsetHeight;

            //即点即停
           var clear=0;
           var Tween = {
			    Linear: function(t,b,c,d){ return c*t/d + b; },
			    back: function(t,b,c,d,s){
	            if (s == undefined) s = 1.70158;
	            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        	   }
		}
            var isFirst=true;
            var isY=true;
           // console.log(minY);
            navDiv.addEventListener("touchstart",function(e){
                e=e||event;
                minY=navDiv.clientHeight-listUl.offsetHeight;
               //console.log(document.documentElement.clientHeight,listUl.offsetHeight)
                listUl.style.transition="none";
                start.x=e.changedTouches[0].clientX;
                start.y=e.changedTouches[0].clientY;
                trY=pedesis.transfromCss(listUl,"translateY");
               
                lastTime=new Date().getTime();
                lastPoint=e.changedTouches[0].clientY;
                pointDis=0;
                listUl.handMove=false;

                isFirst=true;
                isY=true;
                clearInterval(clear);
                //滑动条
                if(callBack && typeof callBack["start"]=="function"){
                    callBack["start"].call(listUl);
                    
                }
            })
            navDiv.addEventListener("touchmove",function(e){
                if(!isY){
                    return;
                }
                e=e||event;
                 var now={x:0,y:0};
                now.y=e.changedTouches[0].clientY;
                now.x=e.changedTouches[0].clientX;
                var distY=now.y-start.y;
                 
                var distX=now.x-start.x;
                    if(isFirst){
                        isFirst=false;
                        if(Math.abs(distX)>Math.abs(distY)){
                        isY=false;
                        return;
                       }

                    }
                    var  translateY=trY+distY;  
                 

                var nowTime=new Date().getTime();
                var nowPoint=e.changedTouches[0].clientY;
                pointDis=nowPoint-lastPoint;
                timeDis=nowTime-lastTime;
                
                lastPoint=nowPoint;
                lastTime=nowTime;
            
                //console.log(listUl.offsetWidth)

                if(translateY>0){
                    listUl.handMove=true;
                    var scale=document.documentElement.clientHeight/((document.documentElement.clientHeight+translateY)*1.5);
                    translateY=pedesis.transfromCss(listUl,"translateY")+pointDis*scale;
                }else if(translateY<minY){
                    listUl.handMove=true;
                    var over=document.documentElement.clientHeight/((document.documentElement.clientHeight+minY-translateY)*1.5);
                    translateY=pedesis.transfromCss(listUl,"translateY")+pointDis*over;
                }
                pedesis.transfromCss(listUl,"translateY",translateY);
                
                if(callBack && typeof callBack["move"]=="function"){
                    callBack["move"].call(listUl);
                    
                }

            })
            navDiv.addEventListener("touchend",function(){
                translateY=pedesis.transfromCss(listUl,"translateY");
               // console.log(!listUl.handMove);
                if(!listUl.handMove){
                    //var bsr="";
                    var  speed=pointDis/timeDis;
                speed=Math.abs(speed)<0.5?0:speed;
                var target=translateY+speed*200;
                var time=Math.abs(speed)*0.2;

                time=time<0.8?0.8:time;
                time=time>2?2:time;
                type="Linear";
                touchTostop(type,target,time);
                if(target>0){
                    target=0;
                    type="back";
                    touchTostop(type,target,time);
                  //  bsr="cubic-bezier(.02,.84,.7,1.53)";
                }else if(target<minY){
                    target=minY;
                    type="back";
                  //  bsr="cubic-bezier(.02,.84,.7,1.53)";
                  touchTostop(type,target,time);
                }
                //listUl.style.transition="10s "+bsr+" transform";
                //listUl.style.transition=time+"s "+bsr+" transform";
               // pedesis.transfromCss(listUl,"translateY",target);
                
                }else{
                    listUl.style.transition="1s transform";
                    if(translateY>0){
                        translateY=0;
                }else if(translateY<minY){
                    translateY=minY;
                    
                }
                pedesis.transfromCss(listUl,"translateY",translateY);
                if(callBack && typeof callBack["end"]=="function"){
                    callBack["end"].call(listUl);
                    
                }
               
                }

            })
            function touchTostop(type,target,time){
                clearInterval(clear);
                    var t=0;
                    var b=pedesis.transfromCss(listUl,"translateY");
                    var c=target-b;
                    var d=time*1000/(1000/60)
                clear=setInterval(function(){
                    t++;
                    		/*
                            t:当前是哪一次
                            b:初始位置
                            c:最终位置与初始位置之间的差值
                            d:总次数
                            */
                if(callBack && typeof callBack["move"]=="function"){
                    callBack["move"].call(listUl);
                    
                }

                    if(t>d){
                        clearInterval(clear);
                        if(callBack && typeof callBack["end"]=="function"){
                    callBack["end"].call(listUl);
                    
                }
                    }
                   var point=Tween[type](t,b,c,d);
                    pedesis.transfromCss(listUl,"translateY",point);
                },1000/60)
            }
        }
        //同上，测试
w.pedesis.dragTwo=function(navDiv){
       
        
            listUl=navDiv.children[0];
            var start={};
            var trY=0;
            var translateY=0;
            var lastTime=0;
            var lastPoint=0;
            var pointDis=0,timeDis=1;
            var minY=document.documentElement.clientHeight-listUl.offsetHeight;
            console.log(minY);
            //即点即停
           var clear=0;
           var Tween = {
			    Linear: function(t,b,c,d){ return c*t/d + b; },
			    back: function(t,b,c,d,s){
	            if (s == undefined) s = 1.70158;
	            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        	   }
		}
            var isFirst=true;
            var isY=true;
           // console.log(minY);
            navDiv.addEventListener("touchstart",function(e){
                e=e||event;
                minY=document.documentElement.clientHeight-listUl.offsetHeight;
                console.log(minY);
                listUl.style.transition="none";
                var touchC=e.changedTouches[0]
                start.x=touchC.clientX;
                start.y=touchC.clientY;
                trY=pedesis.transfromCss(listUl,"translateY");
               
                lastTime=new Date().getTime();
                lastPoint=start.y;
                pointDis=0;
                listUl.handMove=false;

                isFirst=true;
                isY=true;
                clearInterval(clear);
                //滑动条
                if(callBack && typeof callBack["start"]=="function"){
                    callBack["start"].call(listUl);
                    
                }
            })
            navDiv.addEventListener("touchmove",function(e){
                if(!isY){
                    return;
                }
                e=e||event;
                var now={};
                var touchC=e.changedTouches[0]
                now.x=touchC.clientX;
                now.y=touchC.clientY;
                var distY=now.y-start.y;
                  var  translateY=trY+distY;
                var distX=now.x-start.x;
                    if(isFirst){
                        isFirst=false;
                        if(Math.abs(distX)>Math.abs(distY)){
                        isY=false;
                        return;
                       }

                    }
                    


                var nowTime=new Date().getTime();
                var nowPoint=now.y;
                pointDis=nowPoint-lastPoint;
                timeDis=nowTime-lastTime;
                
                lastPoint=nowPoint;
                lastTime=nowTime;
            
                //console.log(listUl.offsetWidth)

                if(translateY>0){
                    listUl.handMove=true;
                    var scale=document.documentElement.clientHeight/((document.documentElement.clientHeight+translateY)*1.5);
                    translateY=pedesis.transfromCss(listUl,"translateY")+pointDis*scale;
                }else if(translateY<minY){
                    listUl.handMove=true;
                    var over=document.documentElement.clientHeight/((document.documentElement.clientHeight+minY-translateY)*1.5);
                    translateY=pedesis.transfromCss(listUl,"translateY")+pointDis*over;
                }
                pedesis.transfromCss(listUl,"translateY",translateY);
                if(callBack && typeof callBack["move"]=="function"){
                    callBack["move"].call(listUl);
                    
                }

            })
            navDiv.addEventListener("touchend",function(){
                translateY=pedesis.transfromCss(listUl,"translateY");
               // console.log(!listUl.handMove);
                if(!listUl.handMove){
                    //var bsr="";
                    var  speed=pointDis/timeDis;
                speed=Math.abs(speed)<0.5?0:speed;
                var target=translateY+speed*200;
                var time=Math.abs(speed)*0.2;

                time=time<0.8?0.8:time;
                time=time>2?2:time;
                type="Linear";
                touchTostop(type,target,time);
                if(target>0){
                    target=0;
                    type="back";
                    touchTostop(type,target,time);
                  //  bsr="cubic-bezier(.02,.84,.7,1.53)";
                }else if(target<minY){
                    target=minY;
                    type="back";
                  //  bsr="cubic-bezier(.02,.84,.7,1.53)";
                  touchTostop(type,target,time);
                }
                //listUl.style.transition="10s "+bsr+" transform";
                //listUl.style.transition=time+"s "+bsr+" transform";
               // pedesis.transfromCss(listUl,"translateY",target);
                
                }else{
                    listUl.style.transition="1s transform";
                    if(translateY>0){
                        translateY=0;
                }else if(translateY<minY){
                    translateY=minY;
                    
                }
                pedesis.transfromCss(listUl,"translateY",translateY);
                if(callBack && typeof callBack["end"]=="function"){
                    callBack["end"].call(listUl);
                    
                }
               
                }

            })
            function touchTostop(type,target,time){
                clearInterval(clear);
                    var t=0;
                    var b=pedesis.transfromCss(listUl,"translateY");
                    var c=target-b;
                    var d=time*1000/(1000/60)
                clear=setInterval(function(){
                    t++;
                    		/*
                            t:当前是哪一次
                            b:初始位置
                            c:最终位置与初始位置之间的差值
                            d:总次数
                            */
                if(callBack && typeof callBack["move"]=="function"){
                    callBack["move"].call(listUl);
                    
                }

                    if(t>d){
                        clearInterval(clear);
                        if(callBack && typeof callBack["end"]=="function"){
                    callBack["end"].call(listUl);
                    
                }
                    }
                   var point=Tween[type](t,b,c,d);
                    pedesis.transfromCss(listUl,"translateY",point);
                },1000/60)
            
        }
}
})(window)