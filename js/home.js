

function card(label = "", description = "", anchor = "", target) {
    const anchorEl = document.createElement("a");
    anchorEl.href = anchor;
    const div = document.createElement("div");
    const p = document.createElement("p");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");

    div.setAttribute("class", "card")

    p.textContent = description; 
    h3.textContent = label;


    anchorEl.appendChild(div);
    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p);
    document.getElementById(target).appendChild(anchorEl);
}

function renderCards() {
    const target = document.getElementById('target');
    target.innerHTML = '';
    const lang = document.getElementById('language').value.toLowerCase();
    const linkC = './' + lang + '_learn';

    card('Learn', 'Continue your learning path', linkC, 'target');
    card('Community', 'Join our vibrant community', '', 'target');
    card('Settings', 'Customize the app to suit your needs', '', 'target');
    card('About', 'About the app and the developers', '', 'target');
    card('Exit', 'Exit the app', '', 'target');
}

renderCards();

window.onload = () => {
    
    let loading_progress = 10;
    
    a = setInterval(() => {
        loading_progress += Math.abs(Math.sin(loading_progress) * (Math.floor(Math.random() * 5)) + 1)
        document.getElementById("loading_bar").value = loading_progress;
        
        if (loading_progress >= 120) {
            document.getElementById("body").setAttribute("style", "display: block");
            document.getElementById("loading").style.display = "none";
            clearInterval(a);
        }
        
    }, 100);
}