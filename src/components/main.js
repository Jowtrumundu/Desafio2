import React, {useState} from 'react';
import * as S from './styled';
//import {useHistory} from 'react-router-dom';

const SiteInfo = () => {
    //const history = useHistory();
    const [ clienteNome, setclienteNome ] = useState("");
    const [ clienteEmail, setclienteEmail ] = useState("");
    const [ clienteEndereço, setclienteEndereço ] = useState("");
    const [ produtoMarca, setprodutoMarca ] = useState("");
    const [ produtoModelo, setprodutoModelo ] = useState("");
    const [ produtoCor, setprodutoCor ] = useState("");
    const [ produtoQuantidade, setprodutoQuantidade ] = useState("");
        
    function handleRegistroCliente() {
        const clienteRegistrado = [{Nome: clienteNome, Email: clienteEmail, 
            Endereço: clienteEndereço }];
        localStorage.setItem('clienteRegistrado', JSON.stringify(clienteRegistrado));
        
        //history.push('/clienteRegistrado');
    }
    
    function handleRegistroProduto() {
        const produtoRegistrado = [{Marca: produtoMarca, Modelo: produtoModelo, 
            Cor: produtoCor, Quantidade: produtoQuantidade}];
        localStorage.setItem('produtoRegistrado', JSON.stringify(produtoRegistrado));

        //history.push('/produtoRegistrado');
    }
    
    return(
        <>
            <S.Title>
                Dados do cliente
            </S.Title>
            <S.Subtitle>
                <S.Input className="InputNome" placeholder="Nome" value={clienteNome} onChange={e => 
                    setclienteNome(e.target.value)} />
                <S.Input className="InputE-mail" placeholder="E-mail" value={clienteEmail} onChange={e => 
                    setclienteEmail(e.target.value)} />
                <S.Input className="InputEndereço" placeholder="Endereço" value={clienteEndereço} onChange={e => 
                    setclienteEndereço(e.target.value)} />
                <S.Button type="button" onClick={handleRegistroCliente}>Registrar</S.Button>
            </S.Subtitle>
            <S.Title>
                Dados do produto
            </S.Title>
            <S.Subtitle>
                <S.Input className="InputMarca" placeholder="Marca" value={produtoMarca} onChange={e => 
                    setprodutoMarca(e.target.value)} />
                <S.Input className="InputModelo" placeholder="Modelo" value={produtoModelo} onChange={e => 
                    setprodutoModelo(e.target.value)} />
                <S.Input className="InputCor" placeholder="Cor" value={produtoCor} onChange={e => 
                    setprodutoCor(e.target.value)} />
                <S.Input className="InputQuantidade" placeholder="Quantidade" value={produtoQuantidade} onChange={e => 
                    setprodutoQuantidade(e.target.value)} />
                <S.Button type="button" onClick={handleRegistroProduto}>Registrar</S.Button>
            </S.Subtitle>
        </>
    );
}

export default SiteInfo;