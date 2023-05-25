function botConversation() {
  const userInput = prompt("Parle au bot :");

  if (userInput === "") {
    console.log("t'es en PLS ?");
  } else if (userInput.endsWith("?")) {
    console.log("Ouais Ouais...");
  } else if (userInput === userInput.toUpperCase()) {
    console.log("Pwa, calme-toi...");
  } else if (userInput.includes("Fortnite")) {
    console.log("on s'fait une partie soum-soum ?");
  } else {
    console.log("balek.");
  }
}

botConversation();
