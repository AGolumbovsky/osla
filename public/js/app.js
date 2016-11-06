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

	var content = document.getElementById("text-area");

	if(partSp === "noun") {

		if(lastLetter === "a") {

			content.value = word;

		}

		else {

			content.value = word + "a";

		}

	}

	else if(partSp === "verb") {

		if(lastTwoLetters === "al") {

			content.value = word;

		}

		else {

			content.value = word + "al";

		}

	}

	else if(partSp === "adjective") {

			if(lastTwoLetters === "iv") {

				content.value = word;

			}

			else {

				content.value = word + "iv";

			}

	}

	else if(partSp === "pronoun") {

		if(lastTwoLetters === "o") {

			content.value = word;

		}

		else {

			content.value = word + "o";

		}

	}




	return content;

}
