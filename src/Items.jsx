import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";

const Items = () => {
	const [itemName, setItemName] = useState("");
	const [column, setColumn] = useState("");
	const [item, setItem] = useState({});
	const [firstColumnItems, setFirstColumnItems] = useState([]);
	const [secondColumnItems, setSecondColumnItems] = useState([]);

	const handleSave = (e) => {
		e.preventDefault();
		setItem({ id: uuidv4(), name: itemName, column });
		setItemName("");
		setColumn("");
	};

	const removeItem = (item) => {
		if (item.column === "column1") {
			let _firstColumnItems = [];
			_firstColumnItems = [...firstColumnItems];
			_firstColumnItems = _firstColumnItems.filter((a) => a.id !== item.id);
			setFirstColumnItems(_firstColumnItems);
		} else if (item.column === "column2") {
			let _secondColumnItems = [];
			_secondColumnItems = [...secondColumnItems];
			_secondColumnItems = _secondColumnItems.filter((a) => a.id !== item.id);
			setSecondColumnItems(_secondColumnItems);
		} else return;
	};

	useEffect(() => {
		if (item.column === "column1") {
			setFirstColumnItems([...firstColumnItems, item]);
		} else if (item.column === "column2") {
			setSecondColumnItems([...secondColumnItems, item]);
		} else return;
	}, [item]);

	return (
		<>
			<h1>Marvelous!</h1>
			<div>
				<h3>ADD AN ITEM</h3>
				<form onSubmit={handleSave}>
					<input
						type="text"
						name="item"
						value={itemName}
						placeholder="Enter Item"
						onChange={({ target }) => setItemName(target.value)}
					/>
					<select
						value={column}
						onChange={({ target }) => setColumn(target.value)}>
						<option value="">CHOOSE COLUMN</option>
						<option value="column1">COLUMN1</option>
						<option value="column2">COLUMN2</option>
					</select>
					<button type="submit">ADD ITEM</button>
				</form>
				<div>
					<div>
						<h4>COLUMN1</h4>
						{firstColumnItems.map((c) => (
							<div key={c.id}>
								<span>{c.name}</span>
								<button onClick={() => removeItem(c)}>&times;</button>
							</div>
						))}
					</div>
					<div>
						<h4>COLUMN2</h4>
						{secondColumnItems.map((c) => (
							<div key={c.id}>
								<span>{c.name}</span>
								<button onClick={() => removeItem(c)}>&times;</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Items;
