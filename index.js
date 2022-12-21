const xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.ipify.org");
xhr.send();
xhr.onload = function() {
	if (xhr.status === 200) {
   	 	data = xhr.responseText;
	    document.write('Hi '+data+'!');
	}
}