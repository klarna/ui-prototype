import React from 'react'
import { PrimaryTitle, SecondaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Button from '@klarna/ui-react-components/components/Button'
import Link from '@klarna/ui-react-components/components/Link'
import styles from './styles.css'

export default () => (
  <div>
    <a href="/home">Home</a><br />
    <a href="/open_bank_id">Open BankID</a><br />
    <a href="/bank_accounts">Bank accounts</a><br />
    <a href="/review">Review</a><br />
    <a href="/user_details">User details</a>
  </div>
)
