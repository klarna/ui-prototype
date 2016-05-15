import Layout from './Layout'
import Home from './Home'
import FlowList from './FlowList'
import Done from './Pages/Done'
import NotYou from './Pages/NotYou'
import SubscribeKdidMandate from './Pages/SubscribeKdidMandate'
import SubscribeKdidNoMandate from './Pages/SubscribeKdidNoMandate'
import SubscribeNoKdidNoMandate from './Pages/SubscribeNoKdidNoMandate'
import EnterPaymentDetails from './Pages/EnterPaymentDetails'
import ReviewPaymentDetails from './Pages/ReviewPaymentDetails'
import ChoosePaymentMethod from './Pages/ChoosePaymentMethod'
import ConnectBankAccount from './Pages/ConnectBankAccount'
import ChooseBankAccount from './Pages/ChooseBankAccount'
import OpenBankIdAppAuthorize from './Pages/OpenBankIdAppAuthorize'
import OpenBankIdAppAuthenticate from './Pages/OpenBankIdAppAuthenticate'
import OpenBankIdAppFetch from './Pages/OpenBankIdAppFetch'
import PNO from './Pages/PNO'

export default {
  path: '/',
  component: Layout,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'home', component: Home },
    { path: 'flows', component: FlowList },
    { path: 'done', component: Done },
    { path: 'not-you', component: NotYou },
    { path: 'subscribe-kdid-mandate', component: SubscribeKdidMandate },
    { path: 'subscribe-kdid-no-mandate', component: SubscribeKdidNoMandate },
    { path: 'subscribe-no-kdid-no-mandate', component: SubscribeNoKdidNoMandate },
    { path: 'enter-payment-details', component: EnterPaymentDetails },
    { path: 'review-payment-details', component: ReviewPaymentDetails },
    { path: 'choose-payment-method', component: ChoosePaymentMethod },
    { path: 'connect-bank-account', component: ConnectBankAccount },
    { path: 'choose-bank-account', component: ChooseBankAccount },
    { path: 'open-bank-id-app-authorize', component: OpenBankIdAppAuthorize },
    { path: 'open-bank-id-app-authenticate', component: OpenBankIdAppAuthenticate },
    { path: 'open-bank-id-app-fetch', component: OpenBankIdAppFetch },
    { path: 'pno', component: PNO }
  ]
}
