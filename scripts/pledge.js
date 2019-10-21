let containerElm = document.createElement("div");
containerElm.classList.add("pledge-link");

let link = document.createElement("a");
link.setAttribute("href", "https://www.gospeakyourmind.org/home#pledge");

let imgDiv = document.createElement("div");
imgDiv.classList.add("image");

let type = document.createElement("p");
type.innerText = "Pledge to Speak you mind";

link.appendChild(imgDiv);
link.appendChild(type);

containerElm.appendChild(link);

document.body.appendChild(containerElm);

<div class="pledge-link">
  <a href="https://www.gospeakyourmind.org/home#pledge">
    <div class="image"></div>
    <p>Pledge to Speak your mind</p>
  </a>
</div>;
