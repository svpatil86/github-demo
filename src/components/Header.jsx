import { supabase } from '../lib/supabase'

function Header({ session, onSignOut }) {
  return (
    <header className="header">
      <div className="logo">GitHub Demo</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ color: 'var(--gray-600)' }}>
          {session?.user?.email}
        </span>
        <button className="btn btn-secondary" onClick={onSignOut}>
          Sign Out
        </button>
      </div>
    </header>
  )
}

export default Header
