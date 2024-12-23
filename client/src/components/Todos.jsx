import { getTodos, addTodo, updateTodo } from "../lib/api";
import { useState, useEffect } from "react";

export function Todos() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getTodos();
			setData(data);
		};
		fetchData();
	}, []);

	return (
		<div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5">
			<div className="mb-4 flex justify-end">
				<button
					className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
					onClick={() => {
						const title = prompt("Enter todo title:");
						if (title) {
							addTodo(title, false).then(() => {
								getTodos().then(newData => setData(newData));
							});
						}
					}}
				>
					Add Todo
				</button>
			</div>
			<table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
				<thead className="bg-gray-50">
					<tr>
						<th className="px-6 py-4 font-medium text-gray-900">ID</th>
						<th className="px-6 py-4 font-medium text-gray-900">Title</th>
						<th className="px-6 py-4 font-medium text-gray-900">Status</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-100 border-t border-gray-100">
					{data.map((row) => (
						<tr key={row.id} className="hover:bg-gray-50">
							<td className="px-6 py-4">{row.id}</td>
							<td className="px-6 py-4">{row.title}</td>
							<td className="px-6 py-4">
								<button
									onClick={() => {
										updateTodo(row.id, row.title, !row.completed).then(() => {
											getTodos().then(newData => setData(newData));
										});
									}}
									className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium cursor-pointer ${
										row.completed 
											? "bg-green-50 text-green-700 ring-1 ring-green-600/20"
											: "bg-red-50 text-red-700 ring-1 ring-red-600/20"
									}`}
								>
									{row.completed ? "Completed" : "Pending"}
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}