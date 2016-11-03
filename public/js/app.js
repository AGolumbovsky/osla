function demoer () {

	var word = document.getElementById("word").value;

	var partSp = document.getElementById("partSp").value;

	console.log("word is: " + word);
	console.log("word type of: " + partSp);

	// alert("the word is ", word , "and it is a", partSp);

	var textArea = document.getElementById("text-area");
	textArea.value = word + "\n" + partSp;

}