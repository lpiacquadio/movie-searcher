import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import styles from './Spinner.module.css'

export function Spinner() {
    return <FaSpinner className={styles.Spinner} aria-label="Loading" />
}
