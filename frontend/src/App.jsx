// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [filterStatus, setFilterStatus] = useState("All");
//   const [sortOrder, setSortOrder] = useState("None");
//   const [loading, setLoading] = useState(true);

//   const [tasksPerPage, setTasksPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/tasks")
//       .then((response) => {
//         setTasks(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching tasks:", error);
//         setLoading(false);
//       });
//   }, []);

//   const formatDate = (dateStr) => {
//     if (!dateStr) return "-";
//     const date = new Date(dateStr);
//     return date.toLocaleString("en-US", {
//       weekday: "long",
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//       hour: "numeric",
//       minute: "2-digit",
//       hour12: true,
//     });
//   };

//   const filteredTasks = tasks.filter((task) =>
//     filterStatus === "All" ? true : task.status === filterStatus.toLowerCase()
//   );

//   const sortedTasks = [...filteredTasks].sort((a, b) => {
//     if (sortOrder === "Priority") {
//       const order = { high: 1, medium: 2, low: 3 };
//       return order[a.priority] - order[b.priority];
//     }
//     return 0;
//   });

//   const totalPages = Math.ceil(sortedTasks.length / tasksPerPage);
//   const paginatedTasks = sortedTasks.slice(
//     (currentPage - 1) * tasksPerPage,
//     currentPage * tasksPerPage
//   );

//   const handlePrevPage = () => {
//     setCurrentPage((prev) => Math.max(prev - 1, 1));
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
//   };

//   const handleTasksPerPageChange = (e) => {
//     setTasksPerPage(Number(e.target.value));
//     setCurrentPage(1); // Reset to first page on change
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6 font-sans">
//       <div className="max-w-5xl mx-auto bg-white shadow-md rounded p-6">
//         <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">
//           Task Manager Dashboard
//         </h1>

//         {loading ? (
//           <p className="text-center text-gray-600">Loading tasks...</p>
//         ) : (
//           <>
//             <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
//               <div>
//                 <label className="block text-sm font-medium mb-1">Filter</label>
//                 <select
//                   className="border border-gray-300 p-2 rounded"
//                   onChange={(e) => setFilterStatus(e.target.value)}
//                 >
//                   <option>All</option>
//                   <option>Pending</option>
//                   <option>Completed</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">Sort</label>
//                 <select
//                   className="border border-gray-300 p-2 rounded"
//                   onChange={(e) => setSortOrder(e.target.value)}
//                 >
//                   <option>None</option>
//                   <option>Priority</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-1">
//                   Tasks Per Page
//                 </label>
//                 <select
//                   className="border border-gray-300 p-2 rounded"
//                   onChange={handleTasksPerPageChange}
//                   value={tasksPerPage}
//                 >
//                   <option value={10}>10</option>
//                   <option value={20}>20</option>
//                   <option value={30}>30</option>
//                 </select>
//               </div>
//             </div>

//             <ul className="space-y-4">
//               {paginatedTasks.length > 0 ? (
//                 paginatedTasks.map((task, index) => (
//                   <li
//                     key={index}
//                     className={`p-4 rounded shadow border-l-4 ${
//                       task.status === "completed"
//                         ? "border-green-500 bg-green-50"
//                         : "border-yellow-500 bg-yellow-50"
//                     }`}
//                   >
//                     <h3 className="text-xl font-semibold text-gray-800 mb-1">
//                       {task.taskName}
//                     </h3>
//                     <p className="text-gray-600 mb-1">
//                       <strong>Description:</strong> {task.description || "—"}
//                     </p>
//                     <p className="text-gray-600 mb-1">
//                       <strong>Status:</strong> {task.status}
//                     </p>
//                     <p className="text-gray-600 mb-1">
//                       <strong>Priority:</strong>{" "}
//                       <span className="capitalize">{task.priority}</span>
//                     </p>
//                     <p className="text-gray-600 mb-1">
//                       <strong>Created:</strong> {formatDate(task.dateCreated)}
//                     </p>
//                     <p className="text-gray-600 mb-1">
//                       <strong>Scheduled:</strong> {formatDate(task.dateScheduled)}
//                     </p>
//                     <p className="text-gray-600">
//                       <strong>Completed:</strong> {formatDate(task.dateCompleted)}
//                     </p>
//                   </li>
//                 ))
//               ) : (
//                 <p className="text-center text-gray-600">No tasks to show.</p>
//               )}
//             </ul>

//             <div className="flex justify-between items-center mt-6">
//               <button
//                 onClick={handlePrevPage}
//                 disabled={currentPage === 1}
//                 className={`px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50`}
//               >
//                 Previous
//               </button>

//               <p className="text-gray-600">
//                 Page {currentPage} of {totalPages}
//               </p>

//               <button
//                 onClick={handleNextPage}
//                 disabled={currentPage === totalPages}
//                 className={`px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600 disabled:opacity-50`}
//               >
//                 Next
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;





// src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE = 'http://localhost:3000';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API_BASE}/tasks`);
      setTasks(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setLoading(false);
    }
  };

  const createTask = async (event) => {
    event.preventDefault();
    const form = event.target;
    const newTask = {
      taskName: form.taskName.value,
      description: form.description.value,
      priority: form.priority.value,
      dateScheduled: new Date(form.dateScheduled.value).toISOString(),
      dateCreated: new Date().toISOString(),
      status: 'pending',
    };
    try {
      await axios.post(`${API_BASE}/tasks`, newTask);
      form.reset();
      setShowCreateForm(false);
      fetchTasks();
    } catch (err) {
      console.error('Create task error:', err);
    }
  };

  const updateTask = async (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedTask = {
      taskName: form.taskName.value,
      description: form.description.value,
      priority: form.priority.value,
      dateScheduled: new Date(form.dateScheduled.value).toISOString(),
    };
    try {
      await axios.patch(`${API_BASE}/tasks/${editTask._id}`, updatedTask);
      setShowEditForm(false);
      fetchTasks();
    } catch (err) {
      console.error('Edit task error:', err);
    }
  };

  const deleteTask = async (id) => {
    if (!window.confirm('Delete this task?')) return;
    try {
      await axios.delete(`${API_BASE}/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error('Delete task error:', err);
    }
  };

  const markAsCompleted = async (id) => {
    try {
      await axios.patch(`${API_BASE}/tasks/${id}`, {
        status: 'completed',
        dateCompleted: new Date().toISOString(),
      });
      fetchTasks();
    } catch (err) {
      console.error('Mark completed error:', err);
    }
  };

  const formatDate = (str) => {
    if (!str) return '-';
    const date = new Date(str);
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = tasks.filter((task) =>
    filter === 'All' ? true : task.status === filter.toLowerCase()
  );

  return (
    <div className="bg-gray-100 p-6 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded p-6">
        <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">
          Task Manager Dashboard
        </h1>

        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Filter</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            >
              <option>All</option>
              <option>Pending</option>
              <option>Completed</option>
            </select>
          </div>
          <button
            onClick={() => {
              setShowCreateForm(!showCreateForm);
              setShowEditForm(false);
            }}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            ➕ Add New Task
          </button>
        </div>

        {showCreateForm && (
          <div className="mb-6 bg-gray-100 p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Create a New Task</h2>
            <form onSubmit={createTask} className="space-y-4">
              <input name="taskName" required placeholder="Task Name" className="w-full p-2 border rounded" />
              <textarea name="description" placeholder="Description" className="w-full p-2 border rounded" />
              <select name="priority" className="w-full p-2 border rounded" defaultValue="medium">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <input type="datetime-local" name="dateScheduled" required className="w-full p-2 border rounded" />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Create Task
              </button>
            </form>
          </div>
        )}

        {showEditForm && editTask && (
          <div className="mb-6 bg-yellow-100 p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">Edit Task</h2>
            <form onSubmit={updateTask} className="space-y-4">
              <input
                name="taskName"
                defaultValue={editTask.taskName}
                required
                className="w-full p-2 border rounded"
              />
              <textarea
                name="description"
                defaultValue={editTask.description}
                className="w-full p-2 border rounded"
              />
              <select name="priority" defaultValue={editTask.priority} className="w-full p-2 border rounded">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <input
                type="datetime-local"
                name="dateScheduled"
                defaultValue={editTask.dateScheduled?.slice(0, 16)}
                required
                className="w-full p-2 border rounded"
              />
              <div className="flex justify-between">
                <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
                  Update Task
                </button>
                <button
                  type="button"
                  onClick={() => setShowEditForm(false)}
                  className="text-red-500 hover:underline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="flex flex-wrap gap-4">
          {loading ? (
            <p className="text-center text-gray-600 w-full">Loading tasks...</p>
          ) : filteredTasks.length === 0 ? (
            <p className="text-center text-gray-600 w-full">No tasks to show.</p>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task._id}
                className={`w-80 p-4 rounded shadow border-l-4 flex-shrink-0 ${
                  task.status === 'completed' ? 'border-green-500 bg-green-50' : 'border-yellow-500 bg-yellow-50'
                }`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{task.taskName}</h3>
                    <p className="text-gray-600 mb-1"><strong>Description:</strong> {task.description || '—'}</p>
                    <p className="text-gray-600 mb-1"><strong>Status:</strong> {task.status}</p>
                    <p className="text-gray-600 mb-1"><strong>Priority:</strong> <span className="capitalize">{task.priority}</span></p>
                    <p className="text-gray-600 mb-1"><strong>Created:</strong> {formatDate(task.dateCreated)}</p>
                    <p className="text-blue-600 mb-1"><strong>Scheduled:</strong> {formatDate(task.dateScheduled)}</p>
                    <p className="text-blue-600 mb-2"><strong>Completed:</strong> {formatDate(task.dateCompleted)}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {task.status !== 'completed' && (
                      <>
                        <button
                          className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                          onClick={() => markAsCompleted(task._id)}
                        >
                          Complete
                        </button>
                        <button
                          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                          onClick={() => {
                            setEditTask(task);
                            setShowEditForm(true);
                            setShowCreateForm(false);
                          }}
                        >
                          Edit
                        </button>
                      </>
                    )}
                    <button
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                      onClick={() => deleteTask(task._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
