document.addEventListener('DOMContentLoaded',()=>{
    let form = document.getElementById('mass')
        result = document.getElementById('result');

    form.addEventListener('submit',(e)=>{
        e.preventDefault()

        let weight= parseFloat(document.getElementById('weight').value)
            hight = parseFloat(document.getElementById('hight').value)/100

    let bmi = (weight/(hight * hight)).toFixed(2)
    let category = ''
    
    if(bmi<18.5)
        category = 'thin'
    else if(bmi >=18.0 && bmi <25)
        category = 'perfect'
    else if(bmi >=25 && bmi<30)
        category = 'fat'
    else
    category = 'obese'

    result.innerHTML = `
    Your mass is ${bmi}
    </br>
    category is ${category}
    `

    form.reset()
    })    

})