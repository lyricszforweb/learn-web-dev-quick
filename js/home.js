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

