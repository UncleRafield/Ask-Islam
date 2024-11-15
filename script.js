document.getElementById("send-btn").addEventListener("click", handleUserInput);
document
  .getElementById("user-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") handleUserInput();
  });

function handleUserInput() {
  const userInput = document.getElementById("user-input").value.trim();
  if (userInput) {
    displayMessage(userInput, "user");
    processBotResponse(userInput.toLowerCase());
    document.getElementById("user-input").value = "";
  }
}

function displayMessage(message, sender) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function processBotResponse(input) {
  const responses = {
    help: () => listAllPhrases(),
    "what is islam?":
      "Islam is a monotheistic religion teaching that there is only one God (Allah) and that Muhammad (peace be upon him) is His messenger.",
    "what are the five pillars of islam?":
      "The Five Pillars of Islam are: Shahada (Faith), Salah (Prayer), Zakat (Charity), Sawm (Fasting), and Hajj (Pilgrimage).",
    "who is prophet muhammad?":
      "Prophet Muhammad (peace be upon him) is the last prophet of Islam, sent to guide humanity to the right path.",
    "what is the quran?":
      "The Quran is the holy book of Islam, believed to be the word of Allah as revealed to Prophet Muhammad (peace be upon him).",
    "assalamu alaikum": "Wa Alaikum Assalam! How can I assist you today?",
    "how to pray salah?":
      "Salah consists of a series of physical movements and recitations of Quranic verses and supplications. Start with making Wudu (ablution) and face the Qibla.",
    "what is zakat?":
      "Zakat is a form of charity that is obligatory for all eligible Muslims. It helps the poor and purifies wealth.",
    "what is sawm?":
      "Sawm refers to fasting during the month of Ramadan, where Muslims refrain from food, drink, and sinful behavior from dawn to sunset."
  };

  const response =
    responses[input] ||
    "I'm sorry, I don't have an answer for that. Please try asking something else or type 'help' for a list of available questions.";

  if (typeof response === "function") {
    response(); // Execute the "help" function
  } else {
    displayMessage(response, "bot");
  }
}

function listAllPhrases() {
  const phrases = [
    "What is Islam?",
    "What are the Five Pillars of Islam?",
    "Who is Prophet Muhammad?",
    "What is the Quran?",
    "Assalamu Alaikum",
    "How to pray Salah?",
    "What is Zakat?",
    "What is Sawm?"
  ];

  const helpMessage = `Here are the phrases you can ask me:\n\n${phrases
    .map((p) => `• ${p}`)
    .join("\n")}`;
  displayMessage(helpMessage, "bot");
}