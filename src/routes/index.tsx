import { Link, createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({ component: App })

function App() {

  return (
    <div>
      Main Page <Link to='/products'>Product</Link>
      <Button>Click</Button>
    </div>

  )
}
