import React, { useState } from "react";




//create your first component
const ToDo = () => {
	const [inputValue, setInputValue] = useState("");
	const [list, setList] = useState([]);

	const handleKeyPress = e => {
		if (inputValue === "") return;

		if (e.key === "Enter") {
			setList([...list, inputValue]);
			setInputValue("");
		}
	}

	function remove(index) {
		console.log(index)
		const newList = list.filter((item, i) => i !== index);
		console.log(newList)
		setList(newList);
	}

	return (
		<div className="container w-100 text-danger d-flex flex-column align-items-center todo-list border border-1 rounded-4">
			<h1>WHAT I HAVE TO DO?</h1>
			<input className="input-group-text"
				type="text"
				placeholder="What needs to be done?"
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				onKeyPress={handleKeyPress}
			/>
			<ul class="list-group w-50">
				{list.length === 0 ? (
					<li className="list-group-item col-12  gap-3 mx-auto todo-item  text-center">
						🤔 No tasks, please add a task
					</li>
				) : (

					list.map((item, index) => (
						<li className="list-group-item col-12 d-flex justify-content-between align-items-center gap-3 mx-auto todo-item" key={index}>
							{item}
							<button className="btn btn-danger remove-btn" onClick={() => remove(index)}>
								<i className="fa-solid fa-trash"></i>
							</button>
						</li>
					))
				)}
			</ul>
			<p className="bg-warning text-black p-4 rounded-4">{list.length} item(s) left</p>
		</div>
	);
};

export default ToDo;
