document.addEventListener('DOMContentLoaded',()=>{
    let form = document.querySelector('form'),
    name = document.getElementById('name'),
    email = document.getElementById('email'),
    dateBody = document.getElementById('dateBody');


    form.addEventListener('submit',(e)=>{
        e.preventDefault()

        name = name.value.trim('')
        email = email.value.trim('')
        let password = generatePassword(name,email)
        addRow(name,email,password)
        form.reset()

    })
    const generatePassword = (name,email)=> {
        part1 = name.slice(0,3).lowerCase()
        part2 = emailname.slice(0,3).lowerCase()
        randomNum = Math.floor(100+Math.random() *900)
    }
    const addRow = (name,email,password) => {
        const tr = document.getElementById(tr)
        tr.textContent = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>
        `
        dateBody.appendChild(tr)
    } 
})