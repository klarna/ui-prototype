import React from 'react'
import Link from '@klarna/ui-react-components/components/Link'
import Button from '@klarna/ui-react-components/components/Button'
import Tooltip from '@klarna/ui-react-components/components/Tooltip'
import styles from './styles.css'
import { connect } from 'react-redux'

const Subscribe = () => (
  <main className={styles.main}>
    <img src='./dn.png' className={styles.dn}/>
    <a href='/personal_number'>
      <Button className={styles.button}>
        Subscribe with Klarna Direkt
      </Button>
    </a>
    <div className={styles.tooltip + " cui__tooltip top border"} style={{backgroundColor: "white"}}>
      Complete your purchase<br />with mobile bankID or card.
      <Link href="#" className={styles.link}>
        How it works
      </Link>
    </div>
  </main>
)

export default connect((store) => store.data)(Subscribe)
