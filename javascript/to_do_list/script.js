const input = document.querySelector('input');
const btn = document.querySelector('.addtask > button');

btn.addEventListener('click', addList);
input.addEventListener('keyup', (element) =>{
    /* (e.keyCode === 13 ? addList(e): null); */
    if(element.keyCode ===13) {
        addList(element)
    }
})

function addList(e){
    const notCompleted = document.querySelector('.notCompleted');
    const Completed = document.querySelector('.Completed');


    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    const delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';


    if(input.value !== ''){
        newLi.textContent = input.value;   // textContentÖzellik Node arayüzü düğümü ve onun soyundan metin içeriğini temsil eder.
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.style.textTransform  = "capitalize";     //onclick="myVar = setTimeout(myFunction, 3000)"
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }

  checkBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
        Completed.appendChild(parent);
        checkBtn.style.display = 'none';
    });
    delBtn.addEventListener('click', function(){
        const parent = this.parentNode;
        parent.remove();
    });

}

