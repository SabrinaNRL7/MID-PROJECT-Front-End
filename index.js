const btnAdd = document.querySelector('#button1');
const form = document.querySelector('#add_student');
form.style.display = 'none';
btnAdd.addEventListener('click', () => {    
    if(form.style.display === 'none')
    {
        form.style.display = 'block';
        btnAdd.textContent = 'Hide Form Add Student'
    }
    else
    {
        form.style.display = 'none';
        btnAdd.textContent = 'Show Form Add Student';
    }
}) 