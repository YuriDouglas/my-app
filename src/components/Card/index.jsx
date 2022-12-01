import React from 'react';
import {CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground />
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/113705859?s=400&u=5a7ad487bff495d368ad6a876a249faecffe72df&v=4'/>
                <div>
                    <h4>Yuri Douglas</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para o curso de HTML e CSS</h4>
                <p>Projeto feito o curso HTML e CSS no bootcamp dio de Global avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                     16
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}
export {Card} 
