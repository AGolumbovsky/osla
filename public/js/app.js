
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

	// change the word's ending according to its part of speech
	if(partSp === "noun") {

		if(lastLetter === "a") {

			content.innerHTML = word;
			clearTextBox();

		}

		else {

			content.innerHTML = word + "a";
			clearTextBox();

		}

	}

	else if(partSp === "verb") {

		if(lastTwoLetters === "al") {

			content.innerHTML = word;
			clearTextBox();

		}

		else {

			content.innerHTML = word + "al";
			clearTextBox();


		}

	}

	else if(partSp === "adjective") {

			if(lastTwoLetters === "iv") {

				content.innerHTML = word;
				clearTextBox();


			}

			else {

				content.innerHTML = word + "iv";
				clearTextBox();


			}

	}

	else if(partSp === "adverb") {

		if(lastTwoLetters === "o") {

			content.innerHTML = word;
			clearTextBox();


		}

		else {

			content.innerHTML = word + "o";
			clearTextBox();


		}

	}




	return content;

}
