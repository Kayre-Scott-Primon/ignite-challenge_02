import { Avatar, AvatarContainer, Container, Logo } from "./styles";

import LogoImg from '@assets/logo.png'
import AvatarImg from '@assets/Ellipse.png' 

export function Header() {

    return (
        <Container>
            <Logo source={LogoImg}/>
            <AvatarContainer>
                <Avatar source={AvatarImg}/>
            </AvatarContainer>
        </Container>
    )
}