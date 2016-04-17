import React from 'react'
import styles from './styles.css'
import { connect } from 'react-redux'

const Layout = ({ children, grid }) => (
  <main className={grid && styles.grid}>
    {children}
  </main>
)

export default connect((store) => store.data)(Layout)
