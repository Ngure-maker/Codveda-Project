import React from 'react';

export default function TaskItem({ task, onDelete, onEdit, onToggleComplete }) {
  return (
    <article className="task-item card">
      <div className="task-top">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task)}
          />
          <span className={task.completed ? 'done' : ''}>{task.title}</span>
        </label>
      </div>
      <p>{task.description || 'No description provided.'}</p>
      <small>Created: {new Date(task.created_at).toLocaleString()}</small>
      <div className="task-actions">
        <button className="secondary" onClick={() => onEdit(task)}>
          Edit
        </button>
        <button className="danger" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}
