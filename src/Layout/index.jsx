import React from 'react'
import styles from './styles.css'
import * as Menu from '@klarna/ui/Menu'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

const Layout = ({ data, children, location }) => {
  const menuOptions = [
    { key: '/', label: `Home (${data.count})` },
    { key: '/faq', label: 'FAQ' },
    { key: '/archive', label: 'Archive' }
  ]

  return (
    <main className={styles.main}>
      <Menu.Tab
        tabDisplay='static'
        name='menu'
        value={location.pathname}
        onChange={browserHistory.push}
        options={menuOptions}
      />
      {children}
    </main>
  )
}

export default connect(
  (store) => store
)(Layout)
