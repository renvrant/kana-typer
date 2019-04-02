import React from 'react'
import styled from '@emotion/styled'


interface Props {
  children: any
}
const Header = styled.header`
  position: sticky;
  padding: 20px 60px;
  background: #7E667F;
  color: white;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1;
  margin: 0;
`

export const TopBar = ({ children }: Props) => (
  <Header>
    <Title>Kana Typer</Title>
    {children}
  </Header>
)
