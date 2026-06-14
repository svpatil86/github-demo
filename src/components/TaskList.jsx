function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--gray-500)' }}>
        <p>No tasks yet. Click "Add Task" to create your first one!</p>
      </div>
    )
  }

  return (
    <div>
      {tasks.map(task => (
        <div key={task.id} className="task-item fade-in">
          <input
            type="checkbox"
            className="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id, task.completed)}
          />
          <div className="task-text">
            <h3 style={{
              fontSize: '1rem',
              fontWeight: '500',
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? 'var(--gray-400)' : 'var(--gray-900)'
            }}>
              {task.title}
            </h3>
            {task.description && (
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--gray-500)',
                marginTop: '0.25rem'
              }}>
                {task.description}
              </p>
            )}
          </div>
          <div className="task-actions">
            <button
              className="btn btn-danger"
              onClick={() => onDelete(task.id)}
              style={{ padding: '0.5rem 0.75rem' }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList
