
import { Button } from '../../components/Button';

import { Header } from '../../components/Header';

import { Input } from '../../components/Input';

import {Column,Container, CriarText, EsqueciText, Row, Subtitlelogin, Title, Titlelogin, Wrapper} from './styles';

const Login = () => {
    return ( <>
        <Header/>
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas. 
                </Title>                
            </Column>
            <Column>
                <Wrapper>
                    <Titlelogin>Faça seu cadastro:</Titlelogin>
                    <Subtitlelogin>Faça seu login e make the change._</Subtitlelogin>
                    <form>
                    <Input placeholder="E-mail"/>
                    <Input placeholder="Senha" type="password"/>
                    <Button title="Entrar" variant="secondary"/>
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
                
            </Column>
        </Container>    
    </>)
}

export {Login};