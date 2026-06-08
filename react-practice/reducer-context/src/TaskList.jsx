import { useContext, useState } from "react";
import { TasksContext, TasksDispatchContext } from "./TasksContext";

export default function TaskList() {

    const tasks = useContext(TasksContext)
	return (
		<ul>
			{tasks.map((task) => (
				<li key={task.id}>
					<Task
						task={task}
					/>
				</li>
			))}
		</ul>
	);
}

function Task({ task }) {
	const [isEditing, setIsEditing] = useState(false);
	let taskContent;

    const dispath = useContext(TasksDispatchContext)
	if (isEditing) {
		taskContent = (
			<>
				<input
					value={task.text}
					onChange={(e) => {
						dispath({
                        type: "changed",
                        task: {
                            ...task,
                            text: e.target.value
                        }
                    })
					}}
				/>
				<button onClick={() => setIsEditing(false)}>Save</button>
			</>
		);
	} else {
		taskContent = (
			<>
				{task.text}
				<button onClick={() => setIsEditing(true)}>Edit</button>
			</>
		);
	}
	return (
		<label>
			<input
				type="checkbox"
				checked={task.done}
				onChange={(e) => {
					dispath({
						type: "changed",
						task: {
							...task,
							text: e.target.value,
						},
					});
				}}
			/>
			{taskContent}
			<button
				onClick={() =>
					dispath({
						type: "deleted",
						id: task.id
					})
				}
			>
				Delete
			</button>
		</label>
	);
}
