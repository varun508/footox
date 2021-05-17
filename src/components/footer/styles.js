import styled from 'styled-components'

const FooterStyles = {};

FooterStyles.Wrapper = styled.div`
padding:1rem;
height:100px;
background-color:red;
`

FooterStyles.Container = styled.div`
max-width:1500px;
margin: 0 auto;
display:flex;
`

FooterStyles.LeftContainer = styled.div`
flex:1;

`

FooterStyles.RightContainer = styled.div`
flex:1;
`

export default FooterStyles;