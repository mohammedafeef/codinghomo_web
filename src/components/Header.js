import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    const [menuState,setMenu] = useState(false);
    const setState = ()=>menuState?setMenu(false):setMenu(true);
    return (
        <Container>
            <BrandName href="#home">
                <h1>Codinghomo</h1>
            </BrandName>
            <ListIcon onClick={setState}/>
            <WebLinks state={menuState} >
                <a href="#home">Home</a>
                <a href="#projects">works</a>
                <a href="#contact">about</a>
                <a href="#contact">contact</a>
            </WebLinks>
        </Container>
    )
}
const Container = styled.div`
    background-color:var(--primary-bg-clr);
    position:fixed;
    z-index:1;
    display:flex;
    width:100%;
    align-items:center;
    padding: 0 2rem;
    min-height:8rem;
    flex-wrap:wrap;
    @media screen and (max-width:600px){
        padding:0;
    }
`
const BrandName = styled.div`
    flex:1;
    h1{
        font-size:2rem;
        text-transform:capitalize;
        font-weight:800;
        letter-spacing:.2rem;
        transition:.2s;
        cursor:pointer;
        :hover{
            opacity:.5;
            transform:translateY(-2px);
        }
        @media screen and (max-width:600px){
            padding:2rem;
        }
    }
`
const ListIcon = styled(MenuIcon)`
    padding:0 1.5rem;
    &&{
        font-size:7rem;
        display:none;
        @media screen and (max-width:600px){
            display:inline-block;
        }
    }
`
const WebLinks = styled.div`
    display:flex;
    max-width:100%;
    flex-wrap:wrap;
    a{
        font-size:1.8rem;
        font-weight:600;
        margin: 0 1rem;
        text-decoration:none;
        cursor:pointer;
        transition:.3s;
        text-transform:capitalize;
        border-bottom:2px solid var(--primary-bg-clr);
        :hover{
            border-bottom:2px solid;
        }
        :active{
            border-bottom:2px solid;
            color:var(--primary-fg-clr);
        }
    }
    @media screen and (max-width:600px){
        transform:${props => (props.state ? "scaleY(1)":"scaleY(0)")};
        width:100%;
        a{
            margin:0;
            width:100%;
            padding:.8rem 0;
            text-align:center;
            :hover{
                background-color:var(--secondary-bg-clr);
                color:var(--secondary-fg-clr);
            }
        }

    }
`

export default Header
