import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super();
		    this.state = {newTask:"", clase1:"",count:3,
		    tasks: [{ id: 1, name: "Sacar la ropa", done: false },
				    { id: 2, name: "Hacer la cama", done: false },
				    { id: 3, name: "Leer un rato", done: false }]}

			}

    updateTask(event) {
    this.setState({newTask: event.target.value});
    }
   //al dar click a cualquier li
    toggleTask(id,event){ 
   //actualizando atributo done en la tarea o li seleccionado
    let newTask1 = this.state.tasks.map(task=>{
											    if (task.id === id)
											    {task.done = !task.done 
											    return task}
											   	return task
											    })
   //actualizando el arreglo tasks con los cambios en la tarea o li seleccionado
	this.setState({tasks:newTask1}); 

	// this.state.tasks.map((task)=>(task.id===id)?alert(id):null) //encuentra el id donde se hace click
	// alert(this.state.tasks.findIndex(task => task.name="Leer un rato")); //encontrar una tarea con nombre específico
    // alert((this.state.tasks.map((task, index) =>task.id))); //muestra todos los id
	}
   
    //al oprimir enter
	addTask(event) { 
	event.preventDefault();
	// guardando arreglo original task
	 let oldTask = this.state.tasks; 
	//guardando en un arreglo con atributo name lo que se escriba en el input
	 let newTask2 ={name:this.state.newTask}; 
	//condicional si está vacio el input agregarle la clase "error" al input
	 if (newTask2.name ===""){this.setState({clase1:'error'});} 
	//Agrega tareas
	 else{
	//actualiza count de manera global count
	 this.setState({count:this.state.count+1}); 
	//creación de tarea con tods los atributos; id actualizado global también, name, done
	 let newTask3 ={id:this.state.count+1,name:this.state.newTask,done:false};
	//concatena en el arreglo task la nueva tarea, se reseta newTask, clase1
	 this.setState({tasks:[...oldTask,newTask3], newTask:"",clase1:""});
		}
	}

  render() {
    return (

      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) =>
             <li className={(task.done===true)?'done':''}
              onClick={this.toggleTask.bind(this,task.id)}
               key={task.id}>{task.name}</li>)}
          </ul>
          <form onSubmit={this.addTask.bind(this)}>
            <input className={this.state.clase1}  type="text" id="new-task"placeholder="Ingresa una tarea y oprime Enter" 
              value={this.state.newTask} onChange={this.updateTask.bind(this)} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
