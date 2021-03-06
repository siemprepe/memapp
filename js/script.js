/*
$(document).on( "pageinit", "[data-role='page'].demo-page", function() {
    var page = "#" + $( this ).attr( "id" ),
        // Get the filename of the next page that we stored in the data-next attribute
        next = $( this ).jqmData( "next" ),
        // Get the filename of the previous page that we stored in the data-prev attribute
        prev = $( this ).jqmData( "prev" );
    // Check if we did set the data-next attribute
    if ( next ) {
        // Prefetch the next page
        $.mobile.loadPage( next + ".html" );
        // Navigate to next page on swipe left
        $( document ).on( "swipeleft", page, function() {
            $.mobile.changePage( next + ".html", { transition: "slide" });
        });
        // Navigate to next page when the "next" button is clicked
        $( ".control .next", page ).on( "click", function() {
            $.mobile.changePage( next + ".html", { transition: "slide" } );
        });
    }
    // Disable the "next" button if there is no next page
    else {
        $( ".control .next", page ).addClass( "ui-disabled" );
    }
    // The same for the previous page (we set data-dom-cache="true" so there is no need to prefetch)
    if ( prev ) {
        $( document ).on( "swiperight", page, function() {
            $.mobile.changePage( prev + ".html", { transition: "slide", reverse: true } );
        });
        $( ".control .prev", page ).on( "click", function() {
            $.mobile.changePage( prev + ".html", { transition: "slide", reverse: true } );
        });
    }
    else {
        $( ".control .prev", page ).addClass( "ui-disabled" );
    }
});
*/

$(document).on("ready", function(){ 
	$('div.ui-page').on("swipeleft", function(){
		var nextpage = $(this).next('div[data-role="page"]');
		if (nextpage.length > 0) {
			$.mobile.changePage(nextpage, {transition: "slide"}, true, true);
		}
	});
	$('div.ui-page').on("swiperight", function(){
		var prevpage = $(this).prev('div[data-role="page"]');
		if (prevpage.length > 0) {
		$.mobile.changePage(prevpage, {transition: "slide",
		reverse: true}, true, true);
		}
	});
    $('a.next').on( "click", function() {
        var next = $( this ).jqmData( "next" )
        if (next.length > 0) {
            $.mobile.changePage($('#'+next), {transition: "slide"}, true, true);
        }
    });
    $('a.prev').on( "click", function() {
        var prev = $( this ).jqmData( "prev" )
        if (prev.length > 0) {
            $.mobile.changePage($('#'+prev), {transition: "slide", reverse: true}, true, true);
        }
    });
});
