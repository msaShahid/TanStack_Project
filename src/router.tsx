import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { NotFoundPage } from './page/NotFoundPage'
import { LoadingPage } from './page/LoadingPage'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultPreload: 'intent', 
    defaultNotFoundComponent:NotFoundPage,
    defaultPendingComponent: LoadingPage,
  })

  return router
}
