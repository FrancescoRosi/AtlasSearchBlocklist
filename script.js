fetch("list.json")
    .then(response => response.json())
    .then(json => {
        for (const message of json) {
            const messageElement = document.createElement("div");
            messageElement.className = "message";
            messageElement.innerText = message;
            messageElement.dataset.message = message.toLowerCase();
            document.querySelector("#messages").appendChild(messageElement);
        };
    });

document.querySelector("input").addEventListener("input", e => {
    const search = new DOMParser().parseFromString(e.target.value.toLowerCase(), "text/html").documentElement.innerText;
    document.querySelector("#search").innerText = search ? `.message:not([data-message*="${search}"]) { display: none; }` : "";
});