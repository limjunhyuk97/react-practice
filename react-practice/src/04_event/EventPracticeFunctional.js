import { useState } from "react";

const EventPracticeFunctional = () => {
	const [form, setForm] = useState({ message: "", title: "" });

	const changeHandler = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<input
				type="text"
				name="message"
				value={form.message}
				onChange={changeHandler}
			/>
			<input
				type="text"
				name="title"
				value={form.title}
				onChange={changeHandler}
			/>
			<h2>{form.message}</h2>
			<h2>{form.title}</h2>
		</div>
	);
};

export default EventPracticeFunctional;
