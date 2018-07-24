var main = function () {
	"use strict";

	var addCommentFromInputField = function () {
		var $new_comment, comment_text = $(".comment-input input").val();
		if (comment_text !== "") {
			$new_comment = $("<p>").text(comment_text);
			$new_comment.hide();
			$(".comments").append($new_comment);
			$new_comment.fadeIn();
			$(".comment-input input").val("");
		}
	}

	$(".comment-input button").on("click", function (event) {
		addCommentFromInputField();
	});

	$(".comment-input input").on("keypress", function (event) {
		if (event.keyCode === 13) {
			addCommentFromInputField();
		}
	});
};

$(document).ready(main);