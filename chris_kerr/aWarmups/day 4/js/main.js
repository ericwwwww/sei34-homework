// Warmup - Serge Says
//
// Examples
//
// Serge answers 'Sure.' if you ask him a question.
//
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
//
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// Create a function that takes an input and returns Serge's response.

let question;

function serge(question) {
  if (question == false) {
    return "Fine. Be that way!";
  } else if (question.endsWith("?") == true) {
      return "Sure.";
    }
    else if (question === question.toUpperCase()) {
      return "Woah, chill out!";
    }
    else {
      return "Whatever.";
    }
  }

console.log(serge("Hello?"));
