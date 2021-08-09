import styled from 'styled-components'

export const ContentContainer = styled.div`
display:flex;
height:100%;
flex-wrap: wrap;
justify-content:center;
margin: 16px;
flex:3;
margin-left:${({ open }) => open ? '350px' : '60px'}
`
