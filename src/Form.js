import React from 'react';

// Import Props
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
	// Write JS code
	const inputTextHandler = (e) => {
		console.log(e.target.value);
		setInputText(e.target.value);
	};

	// Handle Submit
	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
		setInputText('');
	};

	const setStatusHandler = (e) => {
		console.log(e.target.value);
		setStatus(e.target.value);
	};

	return (
		<div className='form'>
			<form>
				<input value={inputText} onChange={inputTextHandler} type='text' className='todo-input' />
				<button onClick={submitTodoHandler} className='todo-button' type='submit'>
					<i className='far fa-plus-square'></i>
				</button>
				<div className='select'>
					<select onChange={setStatusHandler} name='todos' className='filter-todo'>
						<option value='all'>All</option>
						<option value='completed'>Completed</option>
						<option value='uncompleted'>Uncompleted</option>
					</select>
				</div>
			</form>
		</div>
	);
};

export default Form;
