import React from 'react'
import styled from '@emotion/styled'

import {COLORS} from "../colors";

interface Props {
  value: string
  onInput: (val: string) => void
  onSave: () => void
}

const Centered = styled.section`
  text-align: center;
  padding: 40px 60px 60px;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const Label = styled.label`
  display: block;
  text-transform: uppercase;
  font-size: 0.8rem;
  padding-bottom: 1rem;
  align-self: flex-start;
`
const Button = styled.button`
  border: none;
  background: ${COLORS.darkGreen};
  color: white;
  font-size: 1rem;
  padding: .75em 1.5em;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
  align-self: flex-end;
`
const Input = styled.input`
  background: ${COLORS.inputGreen};
  border: 1px solid ${COLORS.borderGreen};
  border-radius: 5px;
  font-size: 1.25rem;
  padding: 1rem 2rem;
  width: 100%;
`
export const MainInput = ({ value, onInput, onSave }: Props) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void =>
    onInput(e.target.value)

  const handleEnter = (e: React.KeyboardEvent): void | false =>
    e.which === 13 && onSave()

  return (
    <Centered>
      <Label>Enter romaji</Label>
      <Input type="text" onInput={handleInput} value={value} onKeyDown={handleEnter} /><br/>
      <Button type="button" onClick={onSave}>Save</Button>
    </Centered>
  )
}
