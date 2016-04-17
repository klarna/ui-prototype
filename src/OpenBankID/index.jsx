import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Button from '@klarna/ui-react-components/components/Button'
import styles from './styles.css'
import BankID from '../illustrations/BankID'
import { connect } from 'react-redux'
import Dialog from '../Dialog/index'

const OpenBankID = () => (
  <Dialog>
    <BankID />
    <PrimaryTitle blue>
      Open your<br />Mobilt BandID app
    </PrimaryTitle>
    <Paragraph>
      We are about to fetch your bank account details so you don’t have to bother typing them.
    </Paragraph>
    <a href='#bank_accounts'>
      <Button className={styles.button}>
        Open Mobilt BankID
      </Button>
    </a>
  </Dialog>
)

export default connect((store) => store.data)(OpenBankID)

