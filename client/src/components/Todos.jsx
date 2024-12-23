import { getSheetData } from "../lib/api";
import { useState, useEffect } from "react";

export function Todos() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getSheetData();
			setData(data);
		};
		fetchData();
	}, []);

	return (
		<div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md m-5">
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
								<span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
									row.completed 
										? "bg-green-50 text-green-700 ring-1 ring-green-600/20"
										: "bg-red-50 text-red-700 ring-1 ring-red-600/20"
								}`}>
									{row.completed ? "Completed" : "Pending"}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}