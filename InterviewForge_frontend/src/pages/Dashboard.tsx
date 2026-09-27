import { Link } from 'react-router-dom'
import { StatCard } from '../components/StatCard'

function Dashboard() {
  return (
    <>
      <header className="flex items-start justify-between gap-4 text-white">
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-bold">DSA Progress</h1>
          <h4 className="mt-1 text-gray-400">
            Your daily feedback loop after each problem.
          </h4>
        </div>
        <Link
          to="/problems/new"
          className="inline-flex shrink-0 items-center self-center rounded-md bg-accent px-4 py-2 font-bold text-black transition-colors hover:bg-accent-dim"
        >
          + Add Problem
        </Link>
      </header>

      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard label="Problems solved" value={7} />
        <StatCard label="This week" value={5} hint="Last 7 days" />
        <StatCard
          label="Need revision in"
          value={3}
          hint="DAYS"
        />
      </section>
    </>
  )
}

export default Dashboard
