import React from 'react';
import styled from 'styled-components';

function Home() {
    return (
        <Container id="home">
            <Content>
                <h1>
                    <span>Passion</span><br/>
                    beats <br/>
                    <span>Impossible</span>
                </h1>
                <button>explore</button>
            </Content>
            <ProfileImage>

            </ProfileImage>
        </Container>
    )
}
const Container = styled.div`
    width:100%;
    min-height:100%;
    justify-content:center;
    align-item:center;
    flex:1;
    padding:2rem;
    overflow: hidden;
`
const Content = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:left;
    height:100%;
    h1{
        font-size:5rem;
        font-family:sans;
        margin-bottom:2.5rem;
        text-transform:capitalize;
        position:relative;
        span{
            font-size:6rem;
            letter-spacing:.4rem;
            font-weight:600;
            text-transform:uppercase;
        }
        :after{
            content:'';
            position:absolute;
            top:0;
            left:0;
            height:5rem;
            width:100%;
            background-color:rgba(--secondary-bg-clr);
            transform:rotate(45deg);
        }
    }
    button{
        outline:none;
        max-width:10rem;
        background-color:var(--primary-bg-clr);
        box-shadow:3px 3px 0 0 var(--primary-fg-clr);
        border-radius:8px;
        border:1px solid var(--primary-fg-clr);
        font-size:2rem;
        text-transform:capitalize;
        font-weight:500;
        font-family:var(--primary-fnt);
        padding:.6rem 1rem;
        transition:.3s;
        :hover{
            background-color:var(--secondary-bg-clr);
            color:var(--secondary-fg-clr);
            transform:translate(2px,2px);
        }
        :focus{
            outline:none;
        }
    }
    @media screen and (max-width:600px){
        transform:translateY(-50px);
        h1{
            font-size:4rem;
            span{
                font-size:5rem
            }
        }
    }
`
const ProfileImage = styled.div``


export default Home;
