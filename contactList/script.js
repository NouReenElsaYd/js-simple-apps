document.addEventListener('DOMContentLoaded',() => {

    let form = document.getElementById('contactForm')
    contactsTable = document.getElementById('contactsTable')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let name = document.getElementById('name').value.trim(''),
        phone = document.getElementById('phone').value.trim(''),
        email = document.getElementById('email').value.trim('');

    let table = `
    <tr>
        <td>${name}</td>
        <td>${phone}</td>
        <td>${email}</td>
    </tr>
    `
contactsTable.innerHTML+=table;
form.reset();
});
});