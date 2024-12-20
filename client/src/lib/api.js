export async function getSheetData() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/todos`);
  const data = await response.json();
  return data;
} 