import React from 'react'
import styles from './styles.css'
import Close from '@klarna/ui-illustrations/src/Close'
import { connect } from 'react-redux'

const Layout = ({ children, grid }) => (
  <main className={`${styles.main} ${grid && styles.grid}`}>
    <Close color='blue' className={styles.close} />
    {children}
  </main>
)

export default connect((store) => store.data)(Layout)

