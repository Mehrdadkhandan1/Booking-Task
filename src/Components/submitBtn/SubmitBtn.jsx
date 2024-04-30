import React from 'react'
import styled from 'styled-components'

const SubmitBtn = () => {
    return (
        <Style>
            Search
        </Style>
    )
}

export default SubmitBtn



const Style = styled.button`
    padding: var(--n-padding) calc(var(--n-padding)*6);
    background-color: var(--color-blue);
    color: #fff;
    min-height: 52px;
    border-radius: 4px;
    font-weight: 500;
    font-size: var(--sub-title-fonts);
`