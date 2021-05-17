import styled from 'styled-components'


const FooterStyles = {};

FooterStyles.Wrapper = styled.div`
padding:1rem;
border-top: 1px solid rgba(0,0,0,0.1);

h2{
    margin-bottom:10px;
}
h3{
    margin-bottom:10px;
}
p{
    color:grey;
}
`

FooterStyles.Container = styled.div`
max-width:1500px;
margin: 0 auto;
display:flex;
flex-direction:column;
align-items:center;
`

FooterStyles.PolicyContainer = styled.div`
display:flex;
a{
cursor: pointer;
padding:0 5px;
text-decoration:none;
color:grey;
}
`

FooterStyles.SocialContainer = styled.div`
display:flex;
padding: 1rem 0;
width: 150px;
justify-content:space-between;

a{
    text-decoration:none;
    color:inherit;
}
`


export default FooterStyles;