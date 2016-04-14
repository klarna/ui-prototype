import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Button from '@klarna/ui-react-components/components/Button'
import styles from './styles.css'
import Bank from '../illustrations/Bank'
import LinkList from '../LinkList'

export default () => (
  <main className={styles.main}>
    <Bank />
    <PrimaryTitle blue>
      Choose what<br />bank account to connect
    </PrimaryTitle>
    <Paragraph>
      This will be the default bank account for your payments with Klarna.
    </Paragraph>
    <LinkList href='/ui-prototype/review' options={['Privatkonto 123456789', 'Lonekonto 123456789']} />
  </main>
)
