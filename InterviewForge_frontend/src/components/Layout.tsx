import { NavLink, Outlet } from 'react-router-dom'

const nav = [
  { to: '/', label: 'Dashboard', end: true },
  { to: '/problems', label: 'Problems' },
  { to: '/revision', label: 'Revision' },
  { to: '/patterns', label: 'Patterns' },
]

function Layout() {
  return (
    <div className="flex min-h-screen">
      <aside className="absolute inset-y-0 left-0 w-60 bg-gray-800 text-white">
        <h1 className="pt-10 pl-10 text-lg font-bold">Interview Forge</h1>
        <h5 className="pl-10 text-sm text-gray-400">Interview Prep Tracker</h5>

        <nav className="mt-8 flex flex-col gap-2 px-4">
          {nav.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `w-full rounded-md py-3 pl-6 text-left ${
                  isActive
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="bg-black ml-60 flex-1 p-8">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
