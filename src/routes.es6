import Layout from './Layout'
import Home from './Home'
import OpenBankID from './OpenBankID'
import OpenBankID2 from './OpenBankID2'
import BankAccounts from './BankAccounts'
import Review from './Review'
import AllPages from './AllPages'
import Details from './Details'

export default {
  path: '/',
  component: Layout,
  indexRoute: { component: AllPages },
  childRoutes: [
    { path: 'home', component: Home },
    { path: 'open_bank_id', component: OpenBankID },
    { path: 'open_bank_id2', component: OpenBankID2 },
    { path: 'bank_accounts', component: BankAccounts },
    { path: 'review', component: Review },
    { path: 'user_details', component: Details }
  ]
}
