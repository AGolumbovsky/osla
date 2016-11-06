/*

function grammar() {

	var word = document.getElementById("word").value;

	var partSp = document.getElementById("partSp").value;

	// identify and transform the nouns
	if(partSp === "noun") {

		if(word.sub)

	}	


}

*/ 



function transform() {

	var word = document.getElementById("word").value;

	var lastLetter = word.charAt(word.length-1);

	var lastTwoLetters = word.substr(word.length-2);

	var partSp = document.getElementById("partSp").value;

	var content = document.getElementById("text-area").value;

	if(partSp === "noun") {

		if(lastLetter === "a") {

			content = word;

		}

		else {

			content = word + "a";

		}

	}

	else if(partSp === "verb") {

		if(lastTwoLetters === "al") {

			content = word;

		}

		else {

			content = word + "al";

		}

	}


	return content;

}
