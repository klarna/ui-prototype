import React from 'react'
import { PrimaryTitle, Paragraph } from '@klarna/ui-react-components/components/Text'
import Button from '@klarna/ui-react-components/components/Button'
import Field from '@klarna/ui-react-components/components/Field'
import Link from '@klarna/ui-react-components/components/Link'
import Subtitle from '@klarna/ui-react-components/components/texts/Subtitle'
import styles from './styles.css'
import PNO from '../../illustrations/PNO'
import CloseButton from '../../CloseButton'

export default () => (
  <main className={styles.main}>
    <CloseButton />
    <PNO />
    <PrimaryTitle color="blue">
      Let us know who you are
    </PrimaryTitle>
    <Paragraph>
      We will check if you have a stored payment method with klarna or will help you set one up real quick.<br />
      <Link>
        How it works
      </Link>
    </Paragraph>
    <div className="cui__field is-centered">
      <label className="cui__field__label">
          Personal Number
      </label>
      <input className="cui__field__input" />
    </div>
    <a href='/home'>
      <Button size='big' className={styles.button}>
        Continue
      </Button>
    </a>
    <Paragraph className={styles.card}>
      <Link>
        Don&#39;t have a personal number?
      </Link>
    </Paragraph>
  </main>
)