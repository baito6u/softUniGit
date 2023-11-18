window.addEventListener("load", solve);

function solve() {
 
  const firstNameInput = document.getElementById('first-name')
  const lastNameInput = document.getElementById('last-name')
  const ageInput = document.getElementById('age')
  const storyTitleInput = document.getElementById('story-title')
  const genreInput = document.getElementById('genre')
  const storyInput = document.getElementById('story')
 
  const ulPreview = document.getElementById('preview-list')
  const mainDiv = document.getElementById('main')
 
  const publishBtn = document.getElementById('form-btn')
  publishBtn.addEventListener('click', pubF)
 
  function pubF() {
    if (firstNameInput.value == "" || lastNameInput.value == ""
      || ageInput.value == "" || storyTitleInput.value == ""
      || genreInput.value == "" || storyInput.value == "") {
      return
    }
    publishBtn.disabled = true
 
    const li = document.createElement('li')
    li.className = 'story-info'
 
    const article = document.createElement('article')
    const name = document.createElement('h4')
    const age = document.createElement('p')
    const title = document.createElement('p')
    const genre = document.createElement('p')
    const story = document.createElement('p')
 
    const saveBtn = document.createElement('button')
    saveBtn.className = 'save-btn'
    saveBtn.textContent = "Save story"
    saveBtn.addEventListener('click', saveF)
 
    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-btn'
    deleteBtn.textContent = "Delete story"
    deleteBtn.addEventListener('click', deleteF)
 
    const editBtn = document.createElement('button')
    editBtn.className = 'edit-btn'
    editBtn.textContent = "Edit story"
    editBtn.addEventListener('click', editF)
 
    name.textContent = `Name: ${firstNameInput.value} ${lastNameInput.value}`
    age.textContent = `Age: ${ageInput.value}`
    title.textContent = `Title: ${storyTitleInput.value}`
    genre.textContent = `Genre: ${genreInput.value}`
    story.textContent = storyInput.value
 
    firstNameInput.value = ""
    lastNameInput.value = ""
    ageInput.value = ""
    storyTitleInput.value = ""
    genreInput.value = ""
    storyInput.value = ""
 
    article.appendChild(name)
    article.appendChild(age)
    article.appendChild(title)
    article.appendChild(genre)
    article.appendChild(story)
 
    li.appendChild(article)
    li.appendChild(saveBtn)
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)
 
    ulPreview.appendChild(li)
 
    function editF() {
      publishBtn.disabled = false
 
      firstNameInput.value = name.textContent.slice(5).split(" ")[1]
      lastNameInput.value = name.textContent.slice(5).split(" ")[2]
      ageInput.value = age.textContent.split("Age: ").slice(1)
      storyTitleInput.value = title.textContent.split("Title: ").slice(1)
      genreInput.value = genre.textContent.split("Genre: ").slice(1)
      storyInput.value = story.textContent
 
      ulPreview.remove()
    }
 
    function saveF() {
 
      const h1 = document.createElement('h1')
      h1.textContent = "Your scary story is saved!"
 
      mainDiv.replaceChildren(h1)
    }
 
    function deleteF() {
 
      publishBtn.disabled = false
      ulPreview.remove()
 
    }
 
  }
}
