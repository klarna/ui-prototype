import Layout from './Layout'
import Home from './Home'
import FAQ from './FAQ'
import Archive from './Archive'

export default {
  path: '/',
  component: Layout,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'home', component: Home },
    { path: 'faq', component: FAQ },
    { path: 'archive', component: Archive }
  ]
}
