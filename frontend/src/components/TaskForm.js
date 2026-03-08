import React, { useEffect, useState } from 'react';

const defaultState = { title: '', description: '', completed: false };

export default function TaskForm({ onSubmit, selectedTask, onCancel }) {
  const [formData, setFormData] = useState(defaultState);

  useEffect(() => {
    if (selectedTask) {
      setFormData({
        title: selectedTask.title,
        description: selectedTask.description || '',
        completed: selectedTask.completed,
      });
    } else {
      setFormData(defaultState);
    }
  }, [selectedTask]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.title.trim()) return;
    onSubmit(formData);
    if (!selectedTask) setFormData(defaultState);
  };

  return (
    <form className="task-form card" onSubmit={handleSubmit}>
      <h3>{selectedTask ? 'Edit Task' : 'Create Task'}</h3>
      <label>
        Title
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter task title"
          required
        />
      </label>
      <label>
        Description
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Task details"
          rows="4"
        />
      </label>
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="completed"
          checked={formData.completed}
          onChange={handleChange}
        />
        Completed
      </label>
      <div className="form-actions">
        <button type="submit">{selectedTask ? 'Update Task' : 'Add Task'}</button>
        {selectedTask ? (
          <button type="button" className="secondary" onClick={onCancel}>
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  );
}
