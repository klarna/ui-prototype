import React from 'react'
import { PrimaryTitle, SecondaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Button from '@klarna/ui-react-components/components/Button'
import Link from '@klarna/ui-react-components/components/Link'
import styles from './styles.css'
import Dialog from '../Dialog/index'

export default () => (
  <Dialog>
    <PrimaryTitle blue>
      Review your details
    </PrimaryTitle>
    <Paragraph design='secondary' className={styles.address}>
      <span className={styles.title}>Rasmus Fahlander</span><br />
      19800101-1234<br />
      070 000 1234<br />
      rasmus@klarna.com
      <Link className={styles.change}>Change</Link>
    </Paragraph>
    <Paragraph design='secondary' className={styles.address} style={{marginTop: 30}}>
      <span className={styles.title}>
        Privatkonto 123456789
      </span>
      <Link className={styles.change}>Change</Link>
    </Paragraph>
    <Paragraph design='secondary' className={styles.klarnaAddress} style={{marginTop: 30}}>
      <span className={styles.title}>
        BETALNINGSMOTTAGARE
      </span><br />
      Klarna AB (550621-1473) / Nordea Finans Sverige<br />
      AB Sveavagen 46, 11134 Stockholm
    </Paragraph>

    <a href='#'>
      <Button size='big' className={styles.button}>
        Confirm
      </Button>
    </a>
  </Dialog>
)
