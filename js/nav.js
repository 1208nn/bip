function getElementViewTop(element){ 
    　　var actualTop = element.offsetTop; 
    　　var current = element.offsetParent; 
    　　while (current !== null){ 
            actualTop += current.offsetTop; 
            current = current.offsetParent; 
    　　} 
        var elementScrollTop=0; 
    　　if (document.compatMode == "BackCompat"){ 
            elementScrollTop=document.body.scrollTop; 
    　　} else { 
            elementScrollTop=document.documentElement.scrollTop;  
    　　} 
        return actualTop; 
    　//　return actualTop-elementScrollTop; 
    } 
    function getScroll() 
    { 
        var top, left, width, height; 
      
        if (document.documentElement && document.documentElement.scrollTop) { 
            top = document.documentElement.scrollTop; 
            left = document.documentElement.scrollLeft; 
            width = document.documentElement.scrollWidth; 
            height = document.documentElement.scrollHeight; 
        } else if (document.body) { 
            top = document.body.scrollTop; 
            left = document.body.scrollLeft; 
            width = document.body.scrollWidth; 
            height = document.body.scrollHeight; 
        } 
        return { 'top': top, 'left': left, 'width': width, 'height': height }; 
    } 
    var nav = document.getElementById('nav');    
    var posTop = getElementViewTop(nav); 
    window.addEventListener('scroll',function(event){ 
        var scrollTop = getScroll().top; 
        if(posTop> 0 && posTop-scrollTop < 0)  
            nav.className = 'nav fixed'; 
        else nav.className = 'nav'; 
    },false); 