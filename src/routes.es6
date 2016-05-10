import Layout from './Layout'
import Home from './Home'
import Done from './Pages/Done'
import SubscribeKdidMandate from './Pages/SubscribeKdidMandate'
import SubscribeKdidNoMandate from './Pages/SubscribeKdidNoMandate'
import SubscribeNoKdidNoMandate from './Pages/SubscribeNoKdidNoMandate'
import NotYou from './Pages/NotYou'
import EnterPaymentDetails from './Pages/EnterPaymentDetails'
import ConnectBankAccount from './Pages/ConnectBankAccount'

export default {
  path: '/',
  component: Layout,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'home', component: Home },
    { path: 'done', component: Done },
    { path: 'not-you', component: NotYou },
    { path: 'subscribe-kdid-mandate', component: SubscribeKdidMandate },
    { path: 'subscribe-kdid-no-mandate', component: SubscribeKdidNoMandate },
    { path: 'subscribe-no-kdid-no-mandate', component: SubscribeNoKdidNoMandate },
    { path: 'enter-payment-details', component: EnterPaymentDetails },
    { path: 'connect-bank-account', component: ConnectBankAccount }
  ]
}
