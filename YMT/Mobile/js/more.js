$(function(){
			$(".btnshow").toggle(function(){
				//alert();
				$(this).parents(".aboutpush").find(".texthide").slideDown();
				$(this).html("收起")
			},function(){
				//alert(1);
				$(this).parents(".aboutpush").find(".texthide").slideUp();
				$(this).html("更多")
			});
		})