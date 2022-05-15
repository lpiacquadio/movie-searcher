import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { FaSearch } from 'react-icons/fa'
import './Search.css'

export function Search({ onSearch, placeholder, value }) {
    const inputRef = useRef()
    const selectInput = () => {
        if (inputRef) {
            inputRef.current.focus()
        }
    }
    return (
        <div className="Search" onClick={selectInput}>
            <FaSearch aria-label="Search" />
            <input
                ref={inputRef}
                type="text"
                title="search"
                value={value}
                onChange={(e) => onSearch(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    )
}

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string
}
