import Layout from './Layout'
import Home from './Home'
import Done from './Done'
import NotYou from './NotYou'
import Archive from './Archive'

export default {
  path: '/',
  component: Layout,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'home', component: Home },
    { path: 'done', component: Done },
    { path: 'not-you', component: NotYou },
    { path: 'archive', component: Archive }
  ]
}
