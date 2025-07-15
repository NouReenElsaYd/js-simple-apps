let counterDisplay=document.getElementById('counterDisplay'),
    increaseBtn=document.getElementById('increaseBtn'),
    resetBtn=document.getElementById('resetBtn');

var count=0;
increaseBtn.addEventListener('click',function(){
    count+=2;
    update();
}); 

resetBtn.addEventListener('click',function(){
    count=0;
    update();
});

let update = () => {
    counterDisplay.innerText = count;
}