import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Link from '@klarna/ui-react-components/components/Link'
import Button from '@klarna/ui-react-components/components/Button'
import Preview from '@klarna/ui-react-components/components/Preview'
import CloseButton from '../../CloseButton'
import styles from './styles.css'

let onChoose = (a) =>
  console.log(a)

export default () => (
  <main>
    <CloseButton />
    <PrimaryTitle color="blue">
      Review your details
    </PrimaryTitle>
    
    <Preview className={styles.preview}>
      <strong>Rasmus Fahlander</strong><br/>
      19800101-1234<br/>
      070 000 1234<br/>
      rasmus@klarna.com
      <Link className={styles.change}>Change</Link>
    </Preview>

    <Preview className={styles.preview}>
      <strong>Privatkonto 12345678</strong>
      <Link className={styles.change}>Change</Link>
    </Preview>

    <Preview className={styles.preview_noborder}>
      <strong>BETALNINGSMOTTAGARE</strong><br/>
      Klarna AB (550621-1473) / Nordea Finans Sverige<br/>
      AB Sveavagen 46, 11134 Sockholm
    </Preview>

    <Button>CONTINUE</Button>
  </main>
)
