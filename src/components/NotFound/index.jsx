import React from 'react'
import styles from './NotFound.module.css'
import { DEFAULT_TEXTS } from '../../services/settings'

export function NotFound() {
    return <div className={styles.NotFound}>{DEFAULT_TEXTS.NOT_FOUND}</div>
}
