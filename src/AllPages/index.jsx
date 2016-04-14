import React from 'react'
import { PrimaryTitle, SecondaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Button from '@klarna/ui-react-components/components/Button'
import Link from '@klarna/ui-react-components/components/Link'
import styles from './styles.css'

export default () => (
  <div>
    <a href="/ui-prototype/home">Home</a><br />
    <a href="/ui-prototype/open_bank_id">Open BankID</a><br />
    <a href="/ui-prototype/bank_accounts">Bank accounts</a><br />
    <a href="/ui-prototype/review">Review</a><br />
    <a href="/ui-prototype/user_details">User details</a>
  </div>
)
