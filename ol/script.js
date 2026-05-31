// PAGE VIEW ROUTING ENGINE
function navigateTo(targetViewId) {
    // Hide all view panels completely
    document.getElementById('view-home').classList.remove('active-view');
    document.getElementById('view-contact').classList.remove('active-view');
    document.getElementById('view-aimode').classList.remove('active-view');

    // Remove active styles from navigation links
    document.getElementById('btn-home').classList.remove('active-btn');
    document.getElementById('btn-contact').classList.remove('active-btn');
    document.getElementById('btn-aimode').classList.remove('active-btn');

    // Show the active targeted panel and active button state
    document.getElementById('view-' + targetViewId).classList.add('active-view');
    document.getElementById('btn-' + targetViewId).classList.add('active-btn');
    
    // Jump viewport back to page top
    window.scrollTo(0,0);
}

// AI ENGINE PROCESSING LOGIC
function runAiCore() {
    const field = document.getElementById('queryInput');
    const prompt = field.value.trim();
    if (!prompt) return;

    // Output the user's inquiry query onto the screen tray
    postLog(prompt, 'user-msg');
    field.value = '';

    // Delayed processing simulation to mimic human AI response
    setTimeout(() => {
        const check = prompt.toLowerCase();
        let output = "I do not recognize that specific profile metric. Please use the quick selection pill buttons to ask about his background, lineage, or legal team.";

        if (check.includes('born') || check.includes('birth') || check.includes('place') || check.includes('dhalootaa')) {
            output = "Lawyer Olyad Gadisa Abdi was born in <strong>Ada'aa Berga</strong>.";
        } 
        else if (check.includes('father') || check.includes('abbaa') || check.includes('gadisa')) {
            output = "His full father's name is <strong>Gadisa Abdi</strong>.";
        } 
        else if (check.includes('mother') || check.includes('haadhaa') || check.includes('kebeda')) {
            output = "His mother's name is <strong>Gadise Kebeda</strong>.";
        } 
        else if (check.includes('wife') || check.includes('spouse') || check.includes('warraa') || check.includes('lens')) {
            output = "The name of his wife is <strong>Lens Tesfaye</strong>.";
        } 
        else if (check.includes('work') || check.includes('practice') || check.includes('gojjii') || check.includes('job') || check.includes('lawyer') || check.includes('court')) {
            output = "He is an active <strong>Federal Court Attorney</strong> representing large enterprise firms and various institutions across the national landscape in major complex litigation cases.";
        } 
        else if (check.includes('colleague') || check.includes('partner') || check.includes('friend') || check.includes('associate') || check.includes('hiriyyoonni') || check.includes('booressaa') || check.includes('tesfaye')) {
            output = "Lawyer Olyad's professional legal colleagues and close working associates are <strong>Obbo Booressaa Bayyanaa</strong> and <strong>Obbo Tesfaye Lemma</strong>.";
        }

        // Print response text back to chatbot bubble log
        postLog(output, 'ai-msg');
    }, 300);
}

// Append Chat Message Templates to UI Container
function postLog(msg, typeClass) {
    const tray = document.getElementById('chatContainer');
    const frame = document.createElement('div');
    frame.className = `bubble ${typeClass}`;
    frame.innerHTML = msg;
    tray.appendChild(frame);
    tray.scrollTop = tray.scrollHeight;
}

// Pill Prompt Injection Function
function injectPill(phrase) {
    document.getElementById('queryInput').value = phrase;
    runAiCore();
}

// Catch Enter key return on textbox submission
function catchReturn(e) {
    if (e.key === 'Enter') runAiCore();
}
