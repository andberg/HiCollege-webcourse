/*  Best practice to always have JavaScript in a 
	self-executing function. 
	JavaScript variables has function scope.  */

var instagram = {};

(function (instagram) {

	instagram.addNewPost = function () {

		// Get input as variables. 
		var src = document.getElementById('image-url').value;
		var altText = document.getElementById('image-alt').value;
		var statusText = document.getElementById('status-text').value;

		// Create container for new Instagram post 
		var container = document.createElement("div");
		container.setAttribute("class", "insta-post");

		// Create img-element with src and alt-text
		var image = document.createElement("img");
		image.setAttribute("src", src);
		image.setAttribute("alt", altText);

		// Create p-element with text from inputfield 
		var status = document.createElement("p");
		status.innerText = statusText;

		// Append image and statustext in container
		container.appendChild(image);
		container.appendChild(status);

		// Append containd to DOM (Document object model)
		document.getElementById('content-area').appendChild(container);

	};


})(instagram);