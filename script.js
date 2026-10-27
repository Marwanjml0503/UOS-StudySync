const uploadModal = document.getElementById('uploadModal');
        const uploadBtn   = document.getElementById('uploadBtn');
        const closeBtn    = document.getElementById('closeModal');
        const cancelBtn   = document.getElementById('cancelBtn');
        const uploadForm  = document.getElementById('uploadForm');

        function openModal() {
            uploadModal.style.display = 'flex';
        }

        function closeModal() {
            uploadModal.style.display = 'none';
            uploadForm.reset();
        }

        uploadBtn.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);
        cancelBtn.addEventListener('click', closeModal);

        // Close when clicking outside the modal box
        uploadModal.addEventListener('click', (e) => {
            if (e.target === uploadModal) closeModal();
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });

        // Handle form submit
        uploadForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(uploadForm);
            const note = Object.fromEntries(formData.entries());
            console.log('New note:', note);

            // Append the new note to the text area (above the buttons row)
            const textArea = document.querySelector('.text-area');
            const bottomRow = textArea.querySelector('.text-area-bottom');

            if (note.title) {
                const h3 = document.createElement('h3');
                h3.textContent = note.title;
                textArea.insertBefore(h3, bottomRow);
            }

            if (note.content) {
                const p = document.createElement('p');
                p.textContent = note.content;
                textArea.insertBefore(p, bottomRow);
            }

            alert('Note saved!');
            closeModal();
        });