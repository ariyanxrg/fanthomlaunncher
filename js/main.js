(function() {
    const submitBtn = document.getElementById('submitBugBtn');

    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const title = document.getElementById('bugTitle').value;
            const category = document.getElementById('bugCategory').value;
            const priority = document.getElementById('bugPriority').value;
            const description = document.getElementById('bugDescription').value;

            if (!title || !description) {
                return alert('Please fill in the issue title and description.');
            }

            alert(`✅ Bug report submitted!\n\nTitle: ${title}\nCategory: ${category}\nPriority: ${priority}\n\nThank you for helping us improve Fanthom Launcher!`);

            // Reset form
            document.getElementById('bugTitle').value = '';
            document.getElementById('bugDescription').value = '';
            document.getElementById('bugEmail').checked = false;
        });
    }
})();