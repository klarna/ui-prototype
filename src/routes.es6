import Layout from './Layout'
import Home from './Home'
import Done from './Pages/Done'
import NotYou from './Pages/NotYou'
import EnterPaymentDetails from './Pages/EnterPaymentDetails'

export default {
  path: '/',
  component: Layout,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'home', component: Home },
    { path: 'done', component: Done },
    { path: 'not-you', component: NotYou },
    { path: 'enter-payment-details', component: EnterPaymentDetails },
  ]
}
