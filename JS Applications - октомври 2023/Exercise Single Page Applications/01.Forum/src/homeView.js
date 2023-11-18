import { showDetails } from "./details.js";

const URI = "http://localhost:3030/jsonstore/collections/myboard/posts";

const main = document.querySelector("main");
const topicContent = document.querySelector("div.topic-title");
const section = document.querySelector("div.new-topic-border");
const form = section.querySelector("form");
const cancelBtn = document.querySelector(".cancel");

cancelBtn.addEventListener("click", clearForm);
form.addEventListener("submit", onSubmit);

section.remove();

export async function showHome(event) {
  event?.event.preventDefault(); // event && event.preventDefault();

  topicContent.innerHTML = "";

  const topics = await getAllTopics();
  Object.values(topics).forEach((topic) => {
    const template = createTopicTemplate(topic);
    topicContent.appendChild(template);
  });

  topicContent.querySelector("a").addEventListener("click", showDetails);

  main.replaceChildren(section);
  main.appendChild(topicContent);
}

function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const topicName = formData.get("topicName");
  const userName = formData.get("userName");
  const postText = formData.get("postText");
  const createDate = new Date().getTime();

  createTopic({ topicName, userName, postText, createDate });
}

async function getAllTopics() {
  const response = await fetch(URI);
  const data = await response.json();
  return data;
}

async function createTopic(data) {
  const response = await fetch(URI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  clearForm();
  showHome();
}

function clearForm(event) {
  event?.preventDefault();
  form.reset();
}

function createTopicTemplate(topic) {
    const div = document.createElement("div");
    div.classList.add("topic-container");

  div.innerHTML = `
    <div class="topic-name-wrapper">
        <div class="topic-name">
            <a href="#" class="normal" data-id=${topic._id}>
                <h2>${topic.topicName}</h2>
            </a>
            <div class="columns">
                <div>
                    <p>Date: <time>${new Date(
                      topic.createDate
                    ).toISOString()}</time></p>
                    <div class="nick-name">
                        <p>Username: <span>${topic.userName}</span></p>
                    </div>
                </div>


            </div>
        </div>
    </div>
    `;
    return div;
}
