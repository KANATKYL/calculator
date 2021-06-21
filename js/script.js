let sum = '0'

let output = document.createElement('input')
output.value = sum
output.classList.add('out')
output.disabled = true
document.body.append(output)

let arr = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','.','AC','C']

let getNum = (event) => {
    let num = event.target.value

    if (num == 'C'){
        sum = sum.substring(0, sum.length - 1)
            
    }
    else if (num == 'AC') {
        sum = '0'
        
    }
    else if (num == '='){
        sum = eval(sum)
    }
    else {
        if (sum == '0'){
            sum = ''
        }
        sum = sum + num
    }




    output.value = sum
}

    

arr.forEach((el, index) =>{
    let btn = document.createElement('input')
    btn.type = 'button'
    btn.value = el
    btn.classList.add('input')
    if (index % 3 ==0){
        document.body.append(document.createElement('br'))
    }

    btn.addEventListener('click', getNum)

    document.body.append(btn)

})

