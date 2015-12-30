var closeButton = document.querySelector(".post-alert > .close, .alert > .close");

closeButton.click(function() {
	$(this).parent().fadeOut();
});