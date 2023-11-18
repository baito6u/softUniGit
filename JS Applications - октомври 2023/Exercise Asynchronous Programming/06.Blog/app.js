async function attachEvents() {
    const baseURI = "http://localhost:3030/jsonstore/blog/";
    const postsEndpoint = "posts/";
    const commentsEndPoints = "comments";

    document.getElementById("btnLoadPosts").addEventListener("click", createOptions);
    document.getElementById("btnViewPost").addEventListener("click", loadPostData);
    const selectBtnRef = document.getElementById("posts");
    const titleRef = document.getElementById("post-title");
    const descriptionRef = document.getElementById("post-body");
    const postCommentsRef = document.getElementById("post-comments");
    let allRecords = {};

    async function createOptions(e) {
        selectBtnRef.innerHTML = "";
        const posts = await getAllPosts();
        allRecords = posts;
        Object.entries(posts).forEach(el => {
            const optionEl = generateDomElement("option", el[1].title, el[1].id);
            selectBtnRef.appendChild(optionEl);
        })

    }

    async function loadPostData(e) {
        const postId = selectBtnRef.value;
        const post = Object.values(allRecords).filter(el => el.id === postId)
        titleRef.textContent = post[0].title;
        descriptionRef.textContent = post[0].body;
        loadComments(postId);
    }

    async function loadComments(postId) {
        postCommentsRef.innerHTML = "";
        const comments = await getAllComments();
        const currentComments = Object.values(comments).filter(x => x.postId === postId)
        currentComments.forEach(comment => {
            const li = generateDomElement("li", comment.text);
            postCommentsRef.appendChild(li);

        })
    }

    async function getAllComments() {
        const response = await fetch(baseURI + commentsEndPoints);
        const data = await response.json();
        return data;
    }

    async function getPostById(id) {
        const response = await fetch(baseURI + postsEndpoint + id);
        const data = await response.json();
        return data;
    }

    async function getAllPosts() {
        const response = await fetch(baseURI + postsEndpoint);
        const data = await response.json();
        return data;
    }


    function generateDomElement(type, content, id, classes, style) {
        const el = document.createElement(type);
        if (type === "input" || type === "textarea") {
            el.value = content;
        } else if (type === "option") {
            el.value = id;
            el.textContent = content;
        } else {
            el.textContent = content;
        }

        return el;
    }
}

attachEvents();