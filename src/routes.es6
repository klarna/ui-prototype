import Layout from './Layout'
import Home from './Home'
import Done from './Pages/Done'
import SubscribeKDIDMandate from './Pages/SubscribeKDIDMandate'
import SubscribeKDIDNoMandate from './Pages/SubscribeKDIDNoMandate'
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
    { path: 'subscribe-kdid-mandate', component: SubscribeKDIDMandate },
    { path: 'subscribe-kdid-no-mandate', component: SubscribeKDIDNoMandate },
    { path: 'enter-payment-details', component: EnterPaymentDetails },
    { path: 'connect-bank-account', component: ConnectBankAccount }
  ]
}
