import React from 'react'
import styles from './styles.css'
import Close from '@klarna/ui-illustrations/src/Close'
import { browserHistory } from 'react-router'

export default ({ children, location }) => (
  <main className={styles.main}>
    <Close color='blue' className={styles.close} />
    {children}
  </main>
)
