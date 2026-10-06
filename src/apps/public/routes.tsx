import type { RouteObject } from 'react-router-dom'
import { PublicLanding } from './pages'

export const publicRoutes: RouteObject[] = [
  {
    index: true,
    element: <PublicLanding />,
  },
]