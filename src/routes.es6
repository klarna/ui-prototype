import Layout from './Layout'
import Home from './Home'
import Done from './Done'
import Archive from './Archive'

export default {
  path: '/',
  component: Layout,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'home', component: Home },
    { path: 'done', component: Done },
    { path: 'archive', component: Archive }
  ]
}
