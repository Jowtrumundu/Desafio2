import React from 'react';
import * as S from './styled';

const Header = () => {
    return(
        <>
            <S.Container>
                <S.List>
                    <S.ListItem>
                        <S.Header href="#">Home</S.Header>
                    </S.ListItem>
                    <S.ListItem>
                        <S.Header href="#">Cadastro de Clientes</S.Header>
                    </S.ListItem>
                    <S.ListItem>
                        <S.Header href="#">Cadastro de Produtos</S.Header>
                    </S.ListItem>
                </S.List>
            </S.Container>
        </>
    );
}
export default Header;