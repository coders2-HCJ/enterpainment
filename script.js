(function() {
    // icon
    const link = document.createElement("link");
    link.setAttribute("rel", "icon");
    link.setAttribute("href", "../favicon.png");
    // navigator
    const nav = document.createElement("nav");
    const pages = ['<img src="../logo.png">', "COMICS", "MUSIC", "GAMES", "ABOUT"];
    pages.forEach(function(page, index) {
        const a = document.createElement("a");
        a.innerHTML = page;
        switch (page) {
            case '<img src="../logo.png">':
                a.setAttribute("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                break;
            case "COMICS":
                a.setAttribute("href", "../comics");
                break;
            case "MUSIC":
                a.setAttribute("href", "../music");
                break;
            case "GAMES":
                a.setAttribute("href", "https://www.khanacademy.org/profile/coders2/projects");
                break;
            case "ABOUT":
                a.setAttribute("href", "../about");
                break;
        }
        nav.appendChild(a);
        if (index < pages.length - 1) nav.appendChild(document.createElement("hr"));
    });
    // append icon & navigator
    document.head.appendChild(link);
    document.body.appendChild(nav);
    let id = Number(new URLSearchParams(location.search).get("id"));
    let length;
    const main = document.createElement("main");
    // comics
    if (location.href.includes("/comics")) {
        const h1 = document.createElement("h1");
        const img = new Image;
		const article = document.createElement("article");
        const div = document.createElement("div");
        fetch("db.json").then(res => res.json()).then(function(data) {
            length = data.length;
            if (!id || id > length) location.search = "?id=" + length;
            const res = data[id - 1];
            const main = document.querySelector("main");
            h1.textContent = res.title;
            img.setAttribute("src", res.image + ".png");
			article.innerHTML = res.description;
        });
        ["begin", "prev", "random", "next", "end"].forEach(function(purpose) {
            const button = document.createElement("img");
            button.setAttribute("src", "../" + purpose + ".png");
            switch (purpose) {
                case "begin":
                    button.addEventListener("click", () => location.search = "?id=1");
                break;
                case "prev":
                    button.addEventListener("click", () => location.search = "?id=" + (id - 1));
                break;
                case "random":
                    button.addEventListener("click", () => location.search = "?id=" + (Math.ceil(Math.random() * length)));
                break;
                case "next":
                    button.addEventListener("click", () => location.search = "?id=" + (id + 1));
                break;
                case "end":
                    button.addEventListener("click", () => location.search = "?id=" + length);
                break;
            }
            div.appendChild(button);
        });
        main.appendChild(h1);
        main.appendChild(img);
		main.appendChild(article);
        main.appendChild(div);
    }
    // music
	if (location.href.includes("/music")) {
        const h1 = document.createElement("h1");
        const audio = new Audio;
		audio.setAttribute("controls", true);
		const article = document.createElement("article");
        const div = document.createElement("div");
        fetch("db.json").then(res => res.json()).then(function(data) {
            length = data.length;
            if (!id || id > length) location.search = "?id=" + length;
            const res = data[id - 1];
            const main = document.querySelector("main");
            h1.textContent = res.title;
            audio.setAttribute("src", res.audio + ".mp3");
			article.innerHTML = res.description;
        });
        ["begin", "prev", "random", "next", "end"].forEach(function(purpose) {
            const button = document.createElement("img");
            button.setAttribute("src", "../" + purpose + ".png");
            switch (purpose) {
                case "begin":
                    button.addEventListener("click", () => location.search = "?id=1");
                break;
                case "prev":
                    button.addEventListener("click", () => location.search = "?id=" + (id - 1));
                break;
                case "random":
                    button.addEventListener("click", () => location.search = "?id=" + (Math.ceil(Math.random() * length)));
                break;
                case "next":
                    button.addEventListener("click", () => location.search = "?id=" + (id + 1));
                break;
                case "end":
                    button.addEventListener("click", () => location.search = "?id=" + length);
                break;
            }
            div.appendChild(button);
        });
        main.appendChild(h1);
        main.appendChild(audio);
		main.appendChild(article);
        main.appendChild(div);
    }
    // about
    if (location.href.includes("/about")) main.innerHTML = "<b>Hi! I'm LTX, the creator of this webcomic.</b><br><br>My brother, LTS, made this website for me to post comics (thanks so much). I'm a Earthling living on the planet Earth in the Solar System, Milky Way Galaxy, in the Local Group. I make comics about my daily pains for other people to laugh. Then I'll be happy if you enjoyed. Wonderful transition of energy, eh?<br><br>Anyways, I'll try my best to post something every day. Speaking of posts, every Monday, there will be a meme post every Monday, so it's called Memeday. Alliteration. 👍 Perfect to keep workers motivated on Monday.<br><br>I'll also put my email: ltx_octopedia@outlook.com. This way, any of you can ask me any kind of question and I'll use a spinning wheel to choose one to make a comic about every last day of the month!<br><br>If you don't see me posting anything, it's that: <br><br>A) I'm procrastinating<br><br>B) I can't think of anything (creativity comes in BURSTS.)<br><br>C) I don't have an electronic device but I'm working on the comics on a piece of paper<br><br>D) I'm sick and / or crying<br><br>E) All of the above<br><br>Or E: I got abducted by either aliens or creeps. Anyways, good luck surviving my hell-ridden world of insanity and burning, searing pain without bursting of laughter...";
    document.body.appendChild(main);
})();