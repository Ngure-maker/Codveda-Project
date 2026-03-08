import React, { useEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import api from '../services/api';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    try {
      setError('');
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (err) {
      setError('Unable to load tasks.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreateOrUpdate = async (payload) => {
    try {
      if (selectedTask) {
        await api.put(`/tasks/${selectedTask.id}`, payload);
      } else {
        await api.post('/tasks', payload);
      }
      setSelectedTask(null);
      fetchTasks();
    } catch (err) {
      setError('Unable to save task.');
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}`);
      setTasks((prev) => prev.filter((task) => task.id !== taskId));
    } catch (err) {
      setError('Unable to delete task.');
    }
  };

  const handleToggleComplete = async (task) => {
    try {
      await api.put(`/tasks/${task.id}`, {
        title: task.title,
        description: task.description,
        completed: !task.completed,
      });
      fetchTasks();
    } catch (err) {
      setError('Unable to update task status.');
    }
  };

  return (
    <section className="dashboard-grid">
      <TaskForm onSubmit={handleCreateOrUpdate} selectedTask={selectedTask} onCancel={() => setSelectedTask(null)} />
      <div className="task-list card">
        <h3>Your Tasks</h3>
        {error ? <span className="error">{error}</span> : null}
        {loading ? <p>Loading...</p> : null}
        {!loading && tasks.length === 0 ? <p>No tasks yet. Create your first one.</p> : null}
        <div className="task-grid">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDelete}
              onEdit={setSelectedTask}
              onToggleComplete={handleToggleComplete}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
