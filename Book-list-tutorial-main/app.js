window.addEventListener('DOMContentLoaded',(listener=()=>{
const title=document.querySelector(selectors='#title'),
      author=document.querySelector(selectors='#author'),
      year=document.querySelector(selectors='#year'),
      btn=document.querySelector(selectors='.btn'),
      bookList=document.querySelector(selector='#book-list');
   
//    addbook knopkasiga sobitiya qoshish
btn.addEventListener('click',(listener=(event= Event)=>{
    event.preventDefault();

    if(title.value == '' && author.value ==  '' && year.value == ''){
        alert('пожалуйста, нпишите информацию');
    }else{
        const newRow = document.createElement('tr');
  //    title qator uchun
const newTitle = document.createElement('th');
newTitle.innerHTML= title.value;
newRow.appendChild(newTitle);

// author qator
const newAuthor = document.createElement('th');
newAuthor.innerHTML= author.value;
newRow.appendChild(newAuthor);

// year qator
const newYear = document.createElement('th');
newYear.innerHTML= year.value;
newRow.appendChild(newYear);

bookList.appendChild(newRow);

    }
})
);
})
);