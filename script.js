var colCount = 0;
var colWidth = 0;
var margin = 20;
var windowWidth = 0;
var colHeights = [];
var totalWidth = 0;
var leftspace = 0;

//On the event window resize, call setVariables
$(function(){
	$(window).resize(setVariables);
});


function setVariables(){
	windowWidth = $(window).width();
	colWidth = $('.block').outerWidth();
	colCount = Math.floor(windowWidth/(colWidth+margin));
	//calculate the  total width of the remaining empty window and divide it in half.
	totalWidth = windowWidth-((colCount*(colWidth+margin))+margin);
	leftspace = totalWidth/2;
	console.log(leftspace);
	// for the number of columns that fit on a page, store 
	//the starting height of each column which for now is all the same, the margin
	for(i=0;i<colCount;i++){
		colHeights[i]=margin;
	}
	positionBlocks();
}


function positionBlocks(){
	//append each block to the shortest block height
	$('.block').each(function(){
		//find the shortest block in the colHeights array
		var min = Array.min(colHeights);	
		//find the index of this shortest column in the colHeights array
		var index = $.inArray(min,colHeights);
		//establish the position of this block
		var leftPos = leftspace+(index*(colWidth+margin));
		//position this block using .css left and top
		$(this).css({
			'left':leftPos+'px',
			'top':min+'px'
		});
		//add the height of the block to the shortest height in the colHeights array
		colHeights[index]+=$(this).outerHeight()+margin;
	});
}


// Function to get the Min value in Array
Array.min = function(array){
	return Math.min.apply(Math,array);
}
