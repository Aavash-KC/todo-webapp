//Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);



//Functions
function addTodo(event){
	//prevent form from subbmitting
	event.preventDefault();
	//todo div
	const todoDiv = document.createElement('div');
	todoDiv.classList.add("todo");

	//create li
	const newTodo = document.createElement('li');
	newTodo.innerText = todoInput.value;
	newTodo.classList.add('todo-item');

	todoDiv.appendChild(newTodo);

	//Check mark button
	const completedBtn = document.createElement('button');
	completedBtn.innerHTML='<i class="fas fa-check"></i>';
	completedBtn.classList.add("complete-btn");

	todoDiv.appendChild(completedBtn);

	//Delete button
	const deleteBtn = document.createElement('button');
	deleteBtn.innerHTML='<i class="fas fa-trash"></i>';
	deleteBtn.classList.add("trash-btn");
	todoDiv.appendChild(deleteBtn);


	//Append to list
	todoList.appendChild(todoDiv);

	//clear input 
	todoInput.value="";
}


function deleteCheck(e){
	const item = e.target;


	if(item.classList[0]=="trash-btn"){
		const todo =item.parentElement;
		todo.remove();
	}


	if(item.classList[0]=="complete-btn"){
		const todo =item.parentElement;
		todo.classList.toggle('completed');
	}

}