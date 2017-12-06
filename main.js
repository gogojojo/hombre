$(function() {
	var hash = window.location.hash;
	var page = 0;
	var pageLimit = $(".page").length;


	TweenMax.set($(".page"), {autoAlpha: 0});
	TweenMax.set($(".back"), {autoAlpha: 0});
	TweenMax.to($("#page0"), 1, {autoAlpha: 1});

	function imgSize() {
		var innerHeight = window.innerHeight;
		var innerWidth = window.innerWidth;

		if (innerWidth > innerHeight){
			TweenMax.set($(".page"), {height: ((innerHeight * .85) + "px"), width: "auto"})
			TweenMax.set($(".arrow"), {height: ((innerHeight * .09) + "px"), width: "auto"})
		} else {
			TweenMax.set($(".page"), {width: ((innerWidth * .85) + "px"), height: "auto"})
			TweenMax.set($(".arrow"), {width: ((innerWidth * .09) + "px"), height: "auto"})
		}
	}
	imgSize();

	$(".forward").click(function(){
		if (page == 0){
			TweenMax.to($(".back"), 1, {autoAlpha: 1});
		}
		if ((page + 1) === pageLimit - 1){
			TweenMax.to($(".forward"), 1, {autoAlpha: 0});
		}
		page += 1;
		TweenMax.to($("#page"+(page - 1)), 1, {autoAlpha: 0, onComplete: function(){
			TweenMax.to($("#page"+page), 1, {autoAlpha: 1});
		}});
	});
	$(".back").click(function(){
		if (page - 1 == 0){
			TweenMax.to($(".back"), 1, {autoAlpha: 0});
		}
		if ((page - 1) < pageLimit){
			TweenMax.to($(".forward"), 1, {autoAlpha: 1});
		}
		page -= 1;
		TweenMax.to($("#page"+(page+1)), 1, {autoAlpha: 0, onComplete: function(){
			TweenMax.to($("#page"+page), 1, {autoAlpha: 1});
		}});
	});
	$(window).resize(function(){
		imgSize();
	})
});