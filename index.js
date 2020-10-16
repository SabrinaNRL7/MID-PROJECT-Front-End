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
form.addEventListener('submit', (a) => {
    a.preventDefault();
    const input = document.querySelector('[name = "id"]');
    const input1 = document.querySelector('[name = "fullname"]');
    const gender = [document.querySelector('.g1'),document.querySelector('.g2')]
  let male_female = gender.reduce(gd=>{
    if (gd.checked) {
      return gd.value;
    }
  })
    const faculty = document.querySelector('.select');    
    const btnadd = document.querySelector('.tombol');
    // btnadd.addEventListener('click', (b) => {
   // })
 

   const element = document.createElement('tr');
   const element1 = document.createElement('td');
   const element2 = document.createElement('td');
   const element3 = document.createElement('td');
   const el = document.querySelector('#students');
   element1.appendChild(input);
   element2.appendChild(input1);
   element3.appendChild(male_female);
   element.appendChild(element1);
   element.appendChild(element2);
   element.appendChild(element3);
   el.appendChild(element);
   







   console.log(input.value);
   console.log(input1.value);
   

})