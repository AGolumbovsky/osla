
function clearTextBox () {

	var theBox = document.getElementById("word");
	theBox.value = "";

}

function transform() {

	var word = document.getElementById("word").value;

	var lastLetter = word.charAt(word.length-1);

	var lastTwoLetters = word.substr(word.length-2);

	var partSp = document.getElementById("partSp").value;

	var content = document.getElementById("content");


	// first test of RegEx
	// needs to be separated into own module
	
	var c = /c|ck/g; // "ck" results in "kk"

	word = word.replace(c, "k");


	// change the word's ending according to its part of speech

	// if noun
	if(partSp === "noun") {

		if(lastLetter === "a") {

			content.innerHTML = word;
			// clearTextBox();

		}

		else {

			content.innerHTML = word + "a";
			// clearTextBox();

		}

	}

	// if verb
	else if(partSp === "verb") {

		if(lastTwoLetters === "al") {

			content.innerHTML = word;
			// clearTextBox();

		}

		else {

			content.innerHTML = word + "al";
			// clearTextBox();


		}

	}

	// if adjective
	else if(partSp === "adjective") {

			if(lastTwoLetters === "iv") {

				content.innerHTML = word;
				// clearTextBox();


			}

			else {

				content.innerHTML = word + "iv";
				// clearTextBox();


			}

	}

	// if adverb
	else if(partSp === "adverb") {

		if(lastTwoLetters === "o") {

			content.innerHTML = word;
			// clearTextBox();


		}

		else {

			content.innerHTML = word + "o";
			// clearTextBox();


		}

	}

	return clearTextBox();

}

