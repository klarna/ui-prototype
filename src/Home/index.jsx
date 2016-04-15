import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Link from '@klarna/ui-react-components/components/Link'
import styles from './styles.css'
import { connect } from 'react-redux'
import LinkList from '../LinkList'

const Home = () => (
  <main className={styles.main}>
    <PrimaryTitle blue>Connect<br/ >your bank account</PrimaryTitle>
    <Paragraph>
      Set up Klarna Direkt in seconds using your Mobilt BankID. You will only have to do this once.
      <br />
      <Link href='#'>Learn more</Link>
    </Paragraph>
    <LinkList href='#open_bank_id' options={['Swedbank', 'Nordea', 'Handelsbanken', 'SEB', 'Other']} />
    <Paragraph design='legal' style={{marginTop: 20}}>
      När du klickar på Fortsätt godkänner du att Klarna hämtar och visar dina bankkontonummer, se vilkoren. Klarna lagrar bara det kontonummer du viljer och inga övriga bankuppgifter.
    </Paragraph>
  </main>
)

export default connect((store) => store.data)(Home)
