import { useState } from 'react'

function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return
    onSubmit({ title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1.5rem' }}>
      <div className="form-group">
        <label className="label" htmlFor="title">Task Title</label>
        <input
          id="title"
          className="input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title..."
          required
        />
      </div>
      <div className="form-group">
        <label className="label" htmlFor="description">Description (optional)</label>
        <input
          id="description"
          className="input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a description..."
        />
      </div>
      <button type="submit" className="btn btn-success">
        Create Task
      </button>
    </form>
  )
}

export default TaskForm
