import { Todos } from './components/Todos'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Andrew&apos;s Todo List
        </h1>
        <Todos />
      </div>
    </div>
  );
}
