import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { blue } from '@material-ui/core/colors';
function Social() {
    return (
        <Container id="contact">
            <FbIcon />
            <InstaIcon style={{fontSize:"4rem"}}/>
            <TwiIcon style={{fontSize:"4rem"}}/>
            <GitIcon style={{fontSize:"4rem"}}/>
            <LnIcon style={{fontSize:"4rem"}}/>
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    padding:3rem 10rem;
    background-color:var(--primary-bg-clr);
    color:var(--primary-fg-clr);
`
const getIcon = ({color})=>`
    &&{
        font-size:4rem;
        color:#000;
        transition:.5s ease-in-out;
        :hover{
            transform:translateY(-5px);
            color:${color};
        }
    }
`
const FbIcon = styled(FacebookIcon)`
    ${getIcon({color:"blue"})};
`
const InstaIcon = styled(InstagramIcon)`
        ${getIcon({color:"pink"})};
    }
`
const TwiIcon = styled(TwitterIcon)`
        ${getIcon({color:"skyblue"})};
    }
`
const GitIcon = styled(GitHubIcon)`
        ${getIcon({color:"darkgray"})};
    }
`
const LnIcon = styled(LinkedInIcon)`
        ${getIcon({color:"blue"})};
    }
`
export default Social;
