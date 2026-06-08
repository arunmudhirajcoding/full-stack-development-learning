import AddTask from "./AddTask.jsx";

import TaskList from "./TaskList.jsx";
import { TasksProvider } from "./TasksContext.jsx";

export default function TaskApp() {
	return (
		<>
			<TasksProvider>
				<h1>Day off in Kyoto</h1>
				<AddTask />
				<TaskList />
			</TasksProvider>
		</>
		// <TasksContext value={tasks}>
		// 	<TasksDispatchContext value={dispatch}>
		// 		<h1>Day off in Kyoto</h1>
		// 		{/* <AddTask onAddTask={handleAddTask} /> */}
		// 		<AddTask />
		// 		<TaskList />
		// 		{/* <TaskList
		// 			tasks={tasks}
		// 			onChangeTask={handleChangeTask}
		// 			onDeleteTask={handleDeleteTask}
		// 		/> */}
		// 	</TasksDispatchContext>
		// </TasksContext>
	);
}
