let answer = document.querySelector('p:empty')
let tab = new Array()
const marks = new Array('0','1','2','3','4','5','6','7','8','9','+','-','*','/','√','abs','cc','.','=')
document.addEventListener('click', (e) => {if(marks.includes(e.target.children[0].textContent)) {addToDisplay(e.target.children[0].textContent)}})
function addToDisplay(value)
{
    switch (value)
    {
        case 'abs': {tab = [Math.abs(tab.join(''))]}
        break
        case '√': {tab = [Math.sqrt(tab.join(''))]}
        break
        case 'cc': {tab = []}
        break
        case '=': {tab = [eval(tab.join(''))]}
        break
        default: {tab.push(value)}
        break
    }
    answer.textContent = tab.join('')
}