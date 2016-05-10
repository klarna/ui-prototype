import Layout from './Layout'
import Home from './Home'
import Done from './Done'
import NotYou from './NotYou'
import Archive from './Archive'
import SubscribeWithKdid from './SubscribeWithKDID'

export default {
  path: '/',
  component: Layout,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'home', component: Home },
    { path: 'done', component: Done },
    { path: 'not-you', component: NotYou },
    { path: 'archive', component: Archive },
    { path: 'subscribe-with-kdid', component: SubscribeWithKdid }
  ]
}
