import React from 'react'
import styles from './NotStarted.module.css'
import { DEFAULT_TEXTS } from '../../services/settings'

export function NotStarted() {
    return <div className={styles.NotStarted}>{DEFAULT_TEXTS.NOT_STARTED}</div>
}
