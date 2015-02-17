var JEFF = JEFF || {};

$('.galleryPhotos').hide();
$('.closePhotos').hide();

JEFF.morePhotos = function(e) {
	e.preventDefault();

	var $el = $(e.target)
	var photos= $el.closest('.galleryBox').find('.galleryPhotos');
	var openLink = $el.closest('.galleryBox').find('.openPhotos');
	var closeLink = $el.closest('.galleryBox').find('.closePhotos');
	
	if (photos.is(":visible")){
			photos.slideUp();
			openLink.text("View Photos");
			closeLink.hide();
	}else{
			photos.slideDown();
			$el.text("Close");
			closeLink.show();
		}	
}

$(document).ready(function() {
		$('.morePhotos').bind('click', JEFF.morePhotos);
});





  
