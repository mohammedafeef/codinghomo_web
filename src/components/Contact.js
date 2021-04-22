import React from 'react';
import styled from 'styled-components';

function Contact() {
    return (
        <Container>
            <Details>
            <p>
                <span>Mohammed afeef e.v </span><br/>
                ettuveettil house , mathad<br/>
                kooriyad (po) , 676306 (pin)<br/>
                vengara , malappuram (dist)<br/>
                kerala (state),india(91)
            </p>

            </Details>
            <ContactForm>
                <label for="profile name" className="profileName">
                    name
                </label>
                <input 
                type="text" 
                name="profile name"
                required='true'/>
                <label for="message" className="contactMsg">
                    message
                </label>
                <textarea name="message"/>
            </ContactForm>
            <p>all rights are reserved &copy;codinghomo</p>
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    width:100%;
    padding:3rem 6rem;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    background-color:var(--secondary-bg-clr);
    color:var(--secondary-fg-clr);
    p{
        padding:2rem 0 0;
        text-align:center;
        width:100%;
        font-size:1.3rem;
        color:lightgray;
    }
`
const Details = styled.div`
    flex:.5;
    display:flex;
    padding:1rem;
    p{
        text-align:left;
        font-size:2rem;
        font-weight:500;
        text-transform:capitalize;
    }
    span{
        font-size:2.3rem;
        font-weight:600;
    }
`
const ContactForm = styled.div`
    display:flex;
    flex:.5;
    flex-direction:column;
    padding:1rem 3rem;
    label{
      font-size:2rem;
      font-weight:500;
      margin-bottom:1.5rem; 
    }
    input{
        flex:.7;
        background-color:transparent;
        color:var(--secondary-fg-clr);
        padding:.5rem;
        font-size:2rem;
        border:none;
        border-bottom:2px solid var(--secondary-fg-clr);
        border-radius:5px;
        transition:.4s ease-in-out;
        :focus-within{
            outline:none;
        }
    }
    textarea{
        font-size:1.8rem;
        padding:.5rem;
        resize:none;
        outline:none;
    }
`
export default Contact;
