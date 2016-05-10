import React from 'react'
import styles from './styles.css'
import AnimatedMenu from '@klarna/ui-react-components/components/AnimatedMenu'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

const Layout = ({ data, children, location }) => {
  const menuOptions = [
    { key: '/', label: `Home (${data.count})` },
    { key: '/Done', label: 'Done' },
    { key: '/archive', label: 'Archive' }
  ]

  return (
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
}

export default connect(
  (store) => store
)(Layout)
