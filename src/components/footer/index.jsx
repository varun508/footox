import FooterStyles from './styles';
import { useRef } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_FOOTER = gql`
    query footers {
        footers {
            email
            phone
            address {
                html
            }
        }
    }
`;

function Footer() {
    const { loading, error, data } = useQuery(GET_FOOTER);
    const footerData = data ? data?.footers[0] : null;

    const formRef = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        };
        const requestOptions = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        fetch('https://formcarry.com/s/82pH9c778jH', requestOptions)
            .then((response) => response.json())
            .then((data) => {
                alert(data.title + data.message);
                formRef.current.reset();
            });
    }

    return (
        <FooterStyles.Wrapper id="footer">
            <FooterStyles.Container>
                <FooterStyles.LeftContainer>
                    <div className="content">
                        <span>Email at</span>
                        <h2>{footerData?.email}</h2>
                    </div>
                    <div className="content">
                        <span>Phone</span>
                        <p>{footerData?.phone}</p>
                    </div>
                    <div className="content">
                        <span>Address</span>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: footerData?.address.html
                            }}></div>
                    </div>
                </FooterStyles.LeftContainer>
                <FooterStyles.RightContainer>
                    <h2>Contact Us</h2>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <FooterStyles.Input name="name" type="text" placeholder="Your name" />
                        <FooterStyles.Input name="email" type="text" placeholder="Email" />
                        <FooterStyles.TextArea
                            name="message"
                            rows="2"
                            cols="1"
                            placeholder="Message"
                        />
                        <FooterStyles.Button type="submit">Submit</FooterStyles.Button>
                    </form>
                </FooterStyles.RightContainer>
            </FooterStyles.Container>
            <FooterStyles.Copyright>
                <p>© 2021 Footox</p>
            </FooterStyles.Copyright>
        </FooterStyles.Wrapper>
    );
}

export default Footer;

{
    /* <FooterStyles.SocialContainer>
    <a href="">
        <FiInstagram size={32} color={'#cd486b'} />
    </a>
    <a href="">
        <FaFacebookSquare size={32} color={'#4267B2'} />
    </a>
    <a href="">
        <AiOutlineTwitter size={32} color={'#1DA1F2'} />
    </a>
</FooterStyles.SocialContainer>; */
}
