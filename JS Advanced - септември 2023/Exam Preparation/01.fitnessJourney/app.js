window.addEventListener("load", solve);

function solve() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const contactInput = document.getElementById('contact-number');
  const classInput = document.getElementById('class-type');
  const timeInput = document.getElementById('class-time');
  const previewSection = document.getElementById('preview-section');
  const classInfo = document.querySelector('.class-info');
  const nextBtn = document.getElementById('next-btn');

  nextBtn.addEventListener('click', () => {
      const name = nameInput.value;
      const email = emailInput.value;
      const contact = contactInput.value;
      const preferredClass = classInput.value;
      const classTime = timeInput.value;

      if (name && email && contact && preferredClass && classTime) {
          const listItem = document.createElement('li');
          const articleItem = document.createElement("article");
          const nameItem = document.createElement("p");
          const emailItem = document.createElement("p");
          const numberItem = document.createElement("p");
          const classItem = document.createElement("p");
          const timeItem = document.createElement("p");
          
          listItem.className = "continue-info"
          articleItem.className = "personal-info"
          nameItem.textContent = `${name}`
          emailItem.textContent = `${email}`
          numberItem.textContent = `${contact}`
          classItem.textContent = `${preferredClass}`
          timeItem.textContent = `${classTime}`
          
          articleItem.appendChild(nameItem);
          articleItem.appendChild(emailItem);
          articleItem.appendChild(numberItem);
          articleItem.appendChild(classItem);
          articleItem.appendChild(timeItem);
          listItem.appendChild(articleItem)
          
          classInfo.appendChild(listItem);
          
          nameInput.value = '';
          emailInput.value = '';
          contactInput.value = '';
          classInput.value = '';
          timeInput.value = '';
          nextBtn.disabled = true;

          const editBtn = document.createElement('button');
          editBtn.textContent = 'Edit';
          editBtn.addEventListener('click', () => {
              nameInput.value = name;
              emailInput.value = email;
              contactInput.value = contact;
              classInput.value = preferredClass;
              timeInput.value = classTime;
              nextBtn.disabled = false;
              classInfo.removeChild(listItem);
          });

          const continueBtn = document.createElement('button');
          continueBtn.textContent = 'Continue';
          continueBtn.addEventListener('click', () => {
              const confirmClass = document.querySelector('.confirm-class');
              const continueItem = listItem.cloneNode(true);
              continueItem.classList.add('continue-info');
              confirmClass.innerHTML = '';
              confirmClass.appendChild(continueItem);

              const cancelBtn = document.createElement('button');
              cancelBtn.textContent = 'Cancel';
              cancelBtn.classList.add('cancel-btn');
              cancelBtn.addEventListener('click', () => {
                  confirmClass.innerHTML = '';
                  nextBtn.disabled = false;
              });

              const confirmBtn = document.createElement('button');
              confirmBtn.textContent = 'Confirm';
              confirmBtn.classList.add('confirm-btn');
              confirmBtn.addEventListener('click', () => {
                  const main = document.getElementById('main');
                  main.remove();

                  const thankYou = document.createElement('h1');
                  thankYou.id = 'thank-you';
                  thankYou.textContent = 'Thank you for scheduling your appointment, we look forward to seeing you!';

                  const doneBtn = document.createElement('button');
                  doneBtn.id = 'done-btn';
                  doneBtn.textContent = 'Done';
                  doneBtn.addEventListener('click', () => {
                      location.reload();
                  });

                  document.body.appendChild(thankYou);
                  document.body.appendChild(doneBtn);
              });

              classInfo.removeChild(listItem);
              previewSection.appendChild(editBtn);
              previewSection.appendChild(continueBtn);
              previewSection.appendChild(cancelBtn);
              previewSection.appendChild(confirmBtn);
          });

          previewSection.innerHTML = '';
          previewSection.appendChild(listItem);
          previewSection.appendChild(editBtn);
          previewSection.appendChild(continueBtn);
      }
  });
}
