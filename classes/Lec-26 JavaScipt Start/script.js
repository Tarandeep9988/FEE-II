const firstNum = document.getElementById('first_num');
const secondNum = document.getElementById('second_num');
const ans = document.getElementById('ans');

document.getElementById('add').addEventListener('click', () => {
    const answer = Number(firstNum.value) + Number(secondNum.value);
    ans.innerHTML = answer;
})
document.getElementById('sub').addEventListener('click', () => {
    const answer = Number(firstNum.value) - Number(secondNum.value);
    ans.innerHTML = answer;
})
document.getElementById('multi').addEventListener('click', () => {
    const answer = Number(firstNum.value) * Number(secondNum.value);
    ans.innerHTML = answer;
})
document.getElementById('divide').addEventListener('click', () => {
    const answer = Number(firstNum.value) / Number(secondNum.value);
    ans.innerHTML = answer;  
})