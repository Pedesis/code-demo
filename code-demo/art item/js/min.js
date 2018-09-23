window.onload=function(){
    //hedaer
    headClick()
    function headClick(){
        var liNodes=document.querySelectorAll(".wrap nav>ul li");
        
        for(var i=0;i<liNodes.length;i++){
            liNodes[i].onclick=function(){
                for(var i=0;i<liNodes.length;i++){
                    liNodes[i].children[0].classList.remove("active");
                }
                this.children[0].classList.add("active");
            }
        }
    }
    //Slideshow
    slideshow()
    function slideshow(){
            var itemNodes=document.querySelectorAll(".middle-content .item");
            var leftIcon=document.querySelector(".left-icon");
            var rightIcon=document.querySelector(".right-icon");
            var ulNode=document.querySelector(".middle-content>ul");
            var contentNode=document.querySelector(".content");
            ulNode.style.width=itemNodes.length*(contentNode.offsetWidth-itemNodes[0].offsetWidth)/2+itemNodes[0].offsetWidth*itemNodes.length+"px";
            var index=0;
            function nextpage(){
                index++;
                if(index=itemNodes.length-1){
                    index=0;
                }
                ulNode.style.left=-(itemNodes[0].offsetWidth*index)+"px";
            }
            function prvepage(){
                index--;
                if(index<0){
                    index=0;
                }
                ulNode.style.left=-(itemNodes[0].offsetWidth*index)+"px";
            }
            console.log(itemNodes[0].offsetWidth);
            leftIcon.onclick=function(){
                prvepage();
            }
            rightIcon.onclick=function(){
                
                nextpage();
            }

    }

}