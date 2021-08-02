import React, { useState, useEffect } from 'react';
import './App.css';
// Import Components
import Form from './Form';
import TodoList from './TodoList';

function App() {
	// state Stuff
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filterTodos, setFilterTodos] = useState([]);

	// Run Once
	useEffect(() => {
		getLocalTodos();
	}, []);

	// USE EFFECT
	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, status]);

	// Function
	const filterHandler = () => {
		switch (status) {
			case 'completed':
				setFilterTodos(todos.filter((todo) => todo.completed === true));
				break;
			case 'uncompleted':
				setFilterTodos(todos.filter((todo) => todo.completed === false));
				break;
			// case 'uncompleted':
			// 	setFilterTodos(todos.filter((todo) => todo.completed === false));
			// 	break;
			default:
				setFilterTodos(todos);
				break;
		}
	};

	const saveLocalTodos = () => {
		localStorage.setItem('todos', JSON.stringify(todos));
	};

	const getLocalTodos = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem('todos'));
			setTodos(todoLocal);
		}
	};
	return (
		<div className='app'>
			<header>
				<h1>React Todo</h1>
			</header>
			<div className='body-background'></div>
			<Form
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
				setStatus={setStatus}
			/>
			<TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
		</div>
	);
}

export default App;
