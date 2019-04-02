import React from 'react'
import styled from '@emotion/styled'

const Centered = styled.div`
  text-align: center;
  padding: 40px 60px 0;
`

const Headline = styled.div`
  font-size: 5.5rem;
  display: inline-block;
  min-height: 7.2rem;
  margin: 0 auto;
`

export const KanaDisplay = ({ children }: any) => {
  return (
    <Centered>
      <Headline>
        {children}
      </Headline>
    </Centered>
  )
}

