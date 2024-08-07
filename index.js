let todoList=[{items:'Work', dueDate:'2024-07-22'},{items:'Go to college',dueDate:'2024-07-22'}];
displayItems();

function add(){
    let valueofinput=document.querySelector('#input-todo');
    let todoDate=document.querySelector('#todo-date');
    let list=valueofinput.value;
    let date=todoDate.value;
    todoList.push({items:list,dueDate:date});
    valueofinput.value='';
    todoDate.value='';
    displayItems();

}

function displayItems()
{
    let displayList=document.querySelector('.add-items');
    displayList.innerText='';
    let codehtml='';
    for(let i=0; i<todoList.length; i++)
    {
        let {items,dueDate}=todoList[i];

        codehtml+=`
          <p>  ${items}</p>
          <p class="dates">  ${dueDate}</p>
          <button id="delete-button" onclick="todoList.splice(${i},1); displayItems();">Delete</button>
    `;
        
        displayList.innerText=displayList.innerText+"\n"+todoList[i];
    }displayList.innerHTML=codehtml;


}