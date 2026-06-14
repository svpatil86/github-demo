import { useState, useEffect } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import AuthForm from './components/AuthForm'
import { supabase } from './lib/supabase'
import './index.css'

function App() {
  const [session, setSession] = useState(null)
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      if (session) fetchTasks()
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if (session) fetchTasks()
    })

    return () => subscription.unsubscribe()
  }, [])

  async function fetchTasks() {
    const { data, error } = await supabase
      .from('tasks')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error) setTasks(data || [])
  }

  async function handleAddTask(task) {
    const { data, error } = await supabase
      .from('tasks')
      .insert([{ ...task, user_id: session.user.id }])
      .select()

    if (!error && data) {
      setTasks([data[0], ...tasks])
      setShowForm(false)
    }
  }

  async function handleToggleTask(id, completed) {
    const { error } = await supabase
      .from('tasks')
      .update({ completed: !completed })
      .eq('id', id)

    if (!error) {
      setTasks(tasks.map(task =>
        task.id === id ? { ...task, completed: !completed } : task
      ))
    }
  }

  async function handleDeleteTask(id) {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', id)

    if (!error) {
      setTasks(tasks.filter(task => task.id !== id))
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    )
  }

  if (!session) {
    return <AuthForm onAuth={setSession} />
  }

  return (
    <div className="fade-in">
      <Header session={session} onSignOut={() => supabase.auth.signOut()} />
      <main className="container">
        <h1 className="title">Task Manager</h1>
        <p className="subtitle">Manage your tasks efficiently</p>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Your Tasks</h2>
            <button
              className="btn btn-primary"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? 'Cancel' : 'Add Task'}
            </button>
          </div>

          {showForm && <TaskForm onSubmit={handleAddTask} />}

          <TaskList
            tasks={tasks}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        </div>
      </main>
    </div>
  )
}

export default App
