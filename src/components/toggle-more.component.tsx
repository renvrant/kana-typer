import React from 'react'
// import styled from '@emotion/styled'


interface Props {
  visible: boolean,
  children: any
}

// const Drawer = styled.div`
//   transform: scale(${props =>
//   props.show ? 1 : 0 });
// `

export const ToggleMore = ({ visible, children }: Props) => {
  <div>
    <button type="button">Show More</button>
    {/*<Drawer show>{children}</Drawer>*/}
  </div>
}
