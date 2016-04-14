import Layout from './Layout'
import Home from './Home'
import OpenBankID from './OpenBankID'
import BankAccounts from './BankAccounts'
import Review from './Review'
import AllPages from './AllPages'
import Details from './Details'

export default {
  path: '/ui-prototype',
  component: Layout,
  indexRoute: { component: AllPages },
  childRoutes: [
    { path: '/ui-prototype/home', component: Home },
    { path: '/ui-prototype/open_bank_id', component: OpenBankID },
    { path: '/ui-prototype/bank_accounts', component: BankAccounts },
    { path: '/ui-prototype/review', component: Review },
    { path: '/ui-prototype/user_details', component: Details }
  ]
}
