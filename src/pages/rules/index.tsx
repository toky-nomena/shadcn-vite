import { RulesDataTable } from './components/RulesDataTable'
import { columns } from './components/columns'
import { tasks } from './data/tasks'

export default function Tasks() {
  return <RulesDataTable data={tasks} columns={columns} />
}
