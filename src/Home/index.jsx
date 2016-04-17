import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Link from '@klarna/ui-react-components/components/Link'
import { connect } from 'react-redux'
import LinkList from '../LinkList'
import Dialog from '../Dialog/index'

const footer = (
  <Paragraph design='legal' style={{marginTop: 20}}>
    När du klickar på Fortsätt godkänner du att Klarna hämtar och visar dina bankkontonummer, se vilkoren. Klarna lagrar bara det kontonummer du viljer och inga övriga bankuppgifter.
  </Paragraph>
)

const Home = () => (
  <Dialog footer={footer}>
    <PrimaryTitle blue>Connect<br/ >your bank account</PrimaryTitle>
    <Paragraph>
      Set up Klarna Direkt in seconds using your Mobilt BankID. You will only have to do this once.
      <br />
    </Paragraph>
    <Link href='#' style={{display: 'block', marginBottom: '30px'}}>Learn more</Link>
    <LinkList href='#open_bank_id' options={['Swedbank', 'Nordea', 'Handelsbanken', 'SEB', 'Other']} />
  </Dialog>
)

export default connect((store) => store.data)(Home)
