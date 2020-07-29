import React from 'react'

import Box from './Box'

function Results({ results }) {
    return (
        <section className="results">
            {results.map(result => (
                < Box className="result-box" key={result.id} box={result} >Result:</ Box>
            ))}
        </section>
    )
}

export default Results