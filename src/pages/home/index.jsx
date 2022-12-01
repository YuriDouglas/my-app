
import bannerImage from '../../assets/banner.png';

import { Button } from '../../components/Button';

import { Header } from '../../components/Header';

import {Container,TextContent,Title,Titlewidhlight} from './styles';

const Home = () => {
    return ( <>
        <Header/>
        <Container>
            <div>
                <Title>
                    <Titlewidhlight>
                        Implemente <br/>
                    </Titlewidhlight>
                    O seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologiasutilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Começar agora" variant="secondary" onClick={() => null}/>
            </div>
            <div>
                <img src={bannerImage} alt="imagemprincipal"/>
            </div>
        </Container>    
    </>)
}

export {Home}