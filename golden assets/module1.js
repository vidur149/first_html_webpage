var scrollInPage=(function()
{
	function scrollWhenClicked(e)
	{
		e.preventDefault();
		function position(ele)
		{
			for(var h=0;ele!=null;h += ele.offsetTop,ele=ele.offsetParent);
			return{
					y:h
				};
		}
		var pos,href,myInterval;
		href=this.getAttribute("href");
		var id=href.substring(1);
		var ele=document.getElementById(id);
		pos=position(ele);
		function scroll()
		{
			if(window.scrollY<(pos.y+10) && window.scrollY > (pos.y -10))
				window.clearInterval(myInterval);
			else if(window.scrollY>pos.y)
			{
				window.scrollTo(0,window.scrollY-10);
			}
			else if(window.scrollY<pos.y)
			{				
				window.scrollTo(0,window.scrollY+10);
			}	
		}
		myInterval=setInterval(scroll,1);
	}
	return({
			init:function(q)
				{
					var match=document.querySelectorAll(q);
					for(var i=0;i<match.length;i++)
					{
						match[i].addEventListener('click',scrollWhenClicked);
					}
					
				}		
		});

})();
