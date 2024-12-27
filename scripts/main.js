const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const navLinks = document.querySelectorAll('.nav-link[data-command]');
const timeDisplay = document.querySelector('.nav-link.time');
//    <p>Other: [Portfolio Website or other contact methods]</p>

const commands = {
    whoami: `
        <p>Name: Marwa Chbeir</p>
        <p>Location: Dearborn, Mi</p>
        <p>Pronouns: She/Her</p>
    `,
    contact: `
    <p>Email: <a href="mailto:mzchbeir@gmail.com">mzchbeir@gmail.com</a></p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/marwa-chbeir" target="_blank">https://www.linkedin.com/in/marwa-chbeir</a></p>
    <p>GitHub: <a href="https://github.com/marweenie" target="_blank">https://github.com/marweenie</a></p>
`,
about: `
    <div class="about-section">
        <p>"<strong>The biggest risk is not taking any risk...</strong>" - Mark Zuckerberg</p>
        <p>👩‍💻 <strong>Hello!</strong> I'm a <strong>Software Developer</strong> passionate about building cutting-edge <strong>Android apps</strong> and full-stack systems that solve real-world problems.</p>
        <p>🚀 With a knack for <strong>creative problem-solving</strong>, I specialize in combining <strong>data processing</strong> with impactful applications.</p>
        <p>📚 I'm always growing. My current areas of focus: <strong>Android development</strong>, <strong>computer vision</strong>, and <strong>IoT systems</strong>.</p>
        <p>🌱 Beyond tech, I thrive on <strong>teaching</strong> and contributing to <strong>community projects</strong>.</p>
    </div>
`,

job: `
    <p>Current Role: Software Engineering Intern</p>
    <p>Company: Cleveland Cliffs</p>
    <p>Responsibilities: Full-stack development, optimizing systems, and contributing to impactful projects.</p>
`,
    help: `
        <p class="help-title">Looking for assistance? Here are a few commands to help you out:</p>
        <div class="help-commands">
            <div class="help-command">
                <span class="command-name">whoami</span><span class="command-separator">-</span><span class="command-description">Displays information about the user.</span>
            </div>
            <div class="help-command">
                <span class="command-name">contact</span><span class="command-separator">-</span><span class="command-description">Shows contact information.</span>
            </div>
            <div class="help-command">
                <span class="command-name">about</span><span class="command-separator">-</span><span class="command-description">Provides a brief about me.</span>
            </div>
            <div class="help-command">
                <span class="command-name">projects</span><span class="command-separator">-</span><span class="command-description">Displays projects.</span>
            </div>
            <div class="help-command">
                <span class="command-name">job</span><span class="command-separator">-</span><span class="command-description">Displays current job information.</span>
            </div>
            <div class="help-command">
                <span class="command-name">time</span><span class="command-separator">-</span><span class="command-description">Shows the current time.</span>
            </div>
            <div class="help-command">
                <span class="command-name">clear</span><span class="command-separator">-</span><span class="command-description">Clears the terminal output.</span>
            </div>
            <div class="help-command">
                <span class="command-name">help</span><span class="command-separator">-</span><span class="command-description">Displays this help message.</span>
            </div>
              <div class="help-command">
                <span class="command-name">portrait</span><span class="command-separator">-</span><span class="command-description">Displays an ASCII portrait.</span>
            </div>
        </div>
    `,
    projects: `
        <p>Here are some of my projects:</p>
        <ul>
            <li>
                <strong><a href="https://github.com/marweenie/CarDetect" target="_blank">SpeedEye Android Project</a></strong>: Developing application in Java to track vehicle speeds (at any angle) with OpenCV for real-time data processing and pixel calculations by perspective transformation and focal length distance calculation. This supports identification of unsafe areas in Dearborn, providing valuable insights to the City Department of Health. Technologies used: Android App Development Java, OpenCV, YoloV3, and PyTorch. 
            </li>
            <li>
                <strong><a href="https://github.com/marweenie/Fitness-Wellness" target="_blank">Fitness & Wellness Website</a></strong>: A full-stack web application for tracking fitness progress, including meal logging, workout tracking, and caloric balance calculations. This includes login & registration with encrypted passcodes. Technologies used: PHP, JavaScript, HTML, CSS, MySQL, and Apache.
            </li>
             <li>
                <strong><a href="https://github.com/marweenie/md-game" target="_blank">3D Block Game</a></strong>: A 3D rendering block game with 60 FPS created with pure C/C++, with the utilization of raylib. Technologies used: C++/C
            </li>
            <li>
                <strong><a href="https://github.com/marweenie/donutshop" target="_blank">Donut Shop Website Data Retriever</a></strong>: Developed a full-stack web application for managing a donut shop. Implemented features for client-side product display and an admin panel (CRUD operations). Technologies used: Node.js, React, Apache, MySQL, PHP, HTML, CSS, JavaScript.
            </li>
            <li>
                <strong><a href="https://github.com/marweenie/cryptoRetriever" target="_blank">Cryptocurrency Retrieval Website</a></strong>: Developed a tool using the Fetch API to retrieve and display real-time cryptocurrency data, including price fluctuations and trends, combining skills in API interaction and web development. Technologies used: Fetch JavaScript API, HTML, CSS
            </li>
        </ul>
    `,
   /*   <li>
                <strong><a href="" target="_blank">3D Block Game from Scratch</a></strong>: [Project 2 Short Description]. Technologies used: [Tech 1, Tech 2, etc.]
            </li>

   portrait: () => {
        return fetch('assets/p2.txt')
            .then(response => response.text())
            .then(asciiArt => {
                return new Promise(resolve => {
                    let output = "";
                    let index = 0;
    
                    const portraitContainer = document.createElement('p');
                    portraitContainer.className = "response";
                    const preElement = document.createElement('pre');
                    preElement.className = "ascii-portrait";
                    portraitContainer.appendChild(preElement);
                    terminalOutput.appendChild(portraitContainer);
    
                    const intervalId = setInterval(() => {
                        if (index < asciiArt.length) {
                            output += asciiArt[index]; // Add one character
                            preElement.textContent = output;
                            terminalOutput.scrollTop = terminalOutput.scrollHeight;
                            index++;
                        } else {
                            clearInterval(intervalId);
                            resolve();
                        }
                    }, .000001); // Adjust delay for typing speed. Lower is faster.
                });
            })
            .catch(error => `<p class="response">Error loading portrait: ${error}</p>`);
    },*/
    portrait: () => {
        return fetch('assets/p2.txt') // Path to your ASCII art file
            .then(response => response.text())
            .then(asciiArt => `<pre class="ascii-portrait has-background">${asciiArt}</pre>`)
            .catch(error => `<p class="response">Error loading portrait: ${error}</p>`);
    },
    clear: () => {
        terminalOutput.innerHTML = "<p>></p>";
        return "";
    },
    time: () => {
        const now = new Date();
        return now.toLocaleTimeString();
    },
};

function processCommand(command) {
    if (command === '?') {
        processCommand('help');
        return;
    }
    
    if (commands.hasOwnProperty(command)) {
        const cmd = commands[command];
        if (typeof cmd === 'function') {
            const response = cmd();
            if (response instanceof Promise) {
                response.then(output => {
                    terminalOutput.innerHTML += `<p class="response">${output}</p>`;
                    terminalOutput.scrollTop = terminalOutput.scrollHeight;
                }).catch(error => {
                    terminalOutput.innerHTML += `<p class="response">Error: ${error}</p>`;
                    terminalOutput.scrollTop = terminalOutput.scrollHeight;
                });
                return; // Very important: Exit the function here!
            } else {
                terminalOutput.innerHTML += `<p class="response">${response}</p>`;
            }
        } else if (typeof cmd === 'string'){
            terminalOutput.innerHTML += `<p class="response">${cmd}</p>`;
        }
        else {
            terminalOutput.innerHTML += `<p class="response">Unexpected command type for ${command}</p>`;
        }
    } else if (command.trim() !== "") {
        terminalOutput.innerHTML += `<p class="response">Command not found: ${command}. Type "help" for a list of commands.</p>`;
    }
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}
terminalInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const command = terminalInput.textContent.trim();
        terminalOutput.innerHTML += `<p class="command-line"><span class="prompt">&gt;</span> ${command}</p>`;
        terminalInput.textContent = '';
        processCommand(command);
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const command = link.dataset.command;
        terminalOutput.innerHTML += `<p class="command-line"><span class="prompt">&gt;</span> ${command}</p>`;
        processCommand(command);
    });
});

terminalInput.addEventListener("click", () => {
    terminalInput.focus();
});

function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function updateTime() {
    timeDisplay.textContent = getCurrentTime();
}

const welcomeMessage = "Welcome to Marwa's Portfolio!";
const helpMessage = "Type 'help' to explore available commands or 'projects' to view my top work.";
let index = 0;

function typeMessage() {
    if (index < welcomeMessage.length) {
        terminalOutput.innerHTML += welcomeMessage[index];
        index++;
        setTimeout(typeMessage, 50); // Adjust speed here
    } else if (index === welcomeMessage.length) {
        terminalOutput.innerHTML += "<br>" + helpMessage;
    }
}function createMatrixBackground() {
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix';
    document.body.appendChild(matrixContainer);

    const createFallingCharacter = () => {
        const char = document.createElement('span');
        
        char.style.color = `rgb(0, ${Math.random() * 255}, 0)`; // Random green shades
        char.textContent = Math.random() > 0.5 ? '0' : '1'; // Random binary
        //char.textContent = String.fromCharCode(33 + Math.random() * 94); // Random ASCII character

        char.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        char.style.animationDelay = Math.random() * -5 + 's'; // Random delay
        char.style.animationDuration = Math.random() * 5 + 3 + 's'; // Random duration
        matrixContainer.appendChild(char);

        setTimeout(() => char.remove(), 8000); // Remove after animation
    };

    setInterval(() => {
        for (let i = 0; i < 10; i++) { // Adjust number of characters for density
            createFallingCharacter();
        }
    }, 500); // Add new characters every 500ms
}

createMatrixBackground(); // Call this function on page load


typeMessage();


updateTime();
setInterval(updateTime, 1000);