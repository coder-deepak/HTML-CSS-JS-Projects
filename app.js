const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);
recognition.lang = "en-US"

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
    recognition.start();
    //Convert text to voice
    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    }

    function handleCommands(command) {
        if (command.includes("open youtube")) {
            speak("Opening Youtube...");
            window.open("https://www.youtube.com", "_blank");
        } else if (command.includes("open facebook")) {
            speak("Opening Facebook...");
            window.open("https://www.facebook.com", "_blank");
        }
        else if (command.includes("open twitter")) {
            speak("Opening Twitter...");
            window.open("https://www.twitter.com", "_blank");
        }
        else if (command.includes("open instagram")) {
            speak("Opening instagram...");
            window.open("https://www.instagram.com", "_blank");
        }
        else if (command.includes("open whatsapp")) {
            speak("Opening whatsapp...");
            window.open("https://web.whatsapp.com", "_blank");
        }
        else {
            speak("Search on google..");
            window.open(`https://www.google.com/search?q=${command}`, "_blank");
        }

    }

    speak("how can i help you");

    // setTimeout(() => {
    //     btn.innerHTML = "Listening...";
    //     btn.style.backgroundColor = "red";
    //     // recognition.start();
    // }, 2000);

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        handleCommands(command);
        // console.log(event);
    };

    recognition.onend = () => {
        btn.innerHTML = "Start Listening";
        btn.style.backgroundColor = "#585866be";
    }
});
