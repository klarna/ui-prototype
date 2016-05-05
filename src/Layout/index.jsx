import React from 'react'
import styles from './styles.css'
import AnimatedMenu from '@klarna/ui-react-components/components/AnimatedMenu'
import { browserHistory } from 'react-router'

const menuOptions = [
  { key: '/', label: 'Home' },
  { key: '/faq', label: 'FAQ' },
  { key: '/archive', label: 'Archive' }
]

export default ({ children, location }) => (
  <main className={styles.main}>
    <AnimatedMenu
      tabDisplay='static'
      name='menu'
      selected={location.pathname}
      onChange={browserHistory.push}
      options={menuOptions} />
    {children}
  </main>
)
