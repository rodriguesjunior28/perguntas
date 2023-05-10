import { useState } from "react";
import '../Assest/style.css';


function Header() {

    const [escola, setEscola] = useState("escola");
    const [data, setData] = useState("");
    const [aluno, setAluno] = useState("");
    const [professora, setProfessora] = useState("");
    const [resposta1, setResposta1] = useState("");
    const [resposta2, setResposta2] = useState("");
    const [resposta3, setResposta3] = useState("");
    const [resposta4, setResposta4] = useState("");


    const enviar = (e) => {
        e.preventDefault();
        console.log(`Escola ${escola}`);
        console.log(`data ${data}`);
        console.log(`Aluno ${aluno}`);
        console.log(`professora ${professora}`);
        console.log(`resposta1 ${resposta1}`);
        console.log(`resposta2 ${resposta2}`);
        console.log(`resposta3 ${resposta3}`);
        console.log(`resposta4 ${resposta4}`);
    }


    return (
        <div className="row">
            <form>
                <br></br><br></br>
                <div className="cabecalho">
                    <label> Escola: </label>
                    <input type="text" placeholder="Escola" id="largura"
                        value={escola} // aqui é como se fosse o placeholder fica setado o (nome) sempre que não colocar nada. Ele vem da useState('Nome)
                        required
                        onChange={(e) => setEscola(e.target.value)} 
                    />
                </div>
                <div>
                    <label> Data: </label>
                    <input type="number" placeholder="00/00/0000"
                        value={data} // aqui é como se fosse o placeholder fica setado o (nome) sempre que não colocar nada. Ele vem da useState('Nome)
                        required
                        maxLength={10}
                        onChange={(e) => setData(e.target.value)} 
                    />
                </div>
                <div>
                    <label> Aluno: </label>
                    <input type="text" placeholder="Nome Completo" id="largura"
                        value={aluno} // aqui é como se fosse o placeholder fica setado o (nome) sempre que não colocar nada. Ele vem da useState('Nome)
                        required
                        onChange={(e) => setAluno(e.target.value)} 
                    />
                </div>
                <div>
                    <label> Professora: </label>
                    <input type="text" placeholder="Nome Completo" id="largura"
                        value={professora}
                        required
                        onChange={(e) => setProfessora(e.target.value)}
                    />
                </div>
                <h1 style={{ textAlign: "center" }}> QUESTIONÁRIO </h1>
                <br></br>
                <h4> Item por item </h4>
                <p> 1 - Utilize uma estrutura de repetição para exibir cada item de um array.

                    Observe a estrutura abaixo:

                    const numeros = [1, 2, 3, 4, 5];
                    A constante numeros é um array de números. Sendo assim:

                    Crie um algoritmo que utiliza estrutura de repetição;
                    Exiba abaixo cada item do array.
                </p>
                <div>
                    <label id="resp"> Resposta1: </label>
                    <input type="text" placeholder="" id="respostas"
                        value={resposta1}
                        required
                        onChange={(e) => setResposta1(e.target.value)} 
                    />
                </div>
                <br></br>
                <h4> Calcule os preços </h4>
                <p> 2 - Você foi a uma lanchonete e gostaria de comprar um sanduíche, uma batata frita e um refrigerante, 
                    mas não sabia se seu dinheiro seria suficiente. Para descobrir se você tem saldo para pagar pelo pedido, 
                    some os valores dos produtos:

                    <mark style={{ backgroundColor: "salmon", color: "black" }}>Sanduíche - R$ 10;
                        Batata frita - R$ 12;
                        Refrigerante - R$ 8
                    </mark>.
                    Os valores dos produtos foram salvos dentro de um array na variável valoresProdutos:

                    const valoresProdutos = [10, 12, 8]; // array com o preço dos produtos
                    let somaTotal = 0; // valor total
                    Utilize a estrutura de repetição for para somar os valores;
                    Armazene a soma dos valores na variável somaTotal e exiba o resultado abaixo.
                </p>
                <div>
                    <label id="resp"> Resposta2: </label>
                    <input type="text" placeholder="" id="respostas"
                        value={resposta2}
                        required
                        onChange={(e) => setResposta2(e.target.value)} 
                    />
                </div>
                <br></br>
                <h4> Adicione um item no array com push + (o push + é pra empurrar ou acresentar e não de puxar). </h4>
                <p> 3 - Mario decidiu fazer uma salada de frutas e precisa comprar banana, maçã, mamão e goiaba. 
                    Ele criou uma lista com JavaScript para guardar esses valores:

                    const listaDeFrutas = ['banana', 'maçã', 'mamão', 'goiaba'];
                    Mario esqueceu de adicionar ‘manga’ em sua lista e precisa da sua ajuda para resolver esse problema:

                    Utilize o método push para adicionar o valor 'manga' ao final do array listaDeFrutas;

                    Use a estrutura de repetição for na constante listaDeFrutas atualizada para exibir todas as frutas da lista.
                </p>
                <div>
                    <label id="resp"> Resposta3: </label>
                    <textarea
                        placeholder="" 
                        id="respostas"      /* não precisa colocar o type quando tem textarea */
                        required
                        onChange={(e) => setResposta3(e.target.value)} 
                    >
                        {resposta3}
                    </textarea>
                </div>
                <br></br>
                <h4> Multiplique números: faça a tabuada do 3 e do 7 </h4>
                <p> 4 - João precisa ajudar sua filha Maria a estudar a tabuada do 3 e do 7, 
                    e teve a ideia de usar a tecnologia ao seu favor, contudo precisa da sua ajuda:

                    Desenvolva um algoritmo que multiplique os números de 1 a 9 pelos números 3 e 7. 
                    Você terá como multiplicando os números 3 e 7 e como multiplicadores os números de 1 a 9.

                    Exiba todas as operações com seus respectivos resultados no console do seu navegador.
                    De olho na dica 👀 : Para exibir as operações no console do seu navegador, 
                    você pode utilizar duas estruturas de repetição for aninhadas, que vão percorrer item a item. 
                    Para começar, você pode usar a constante multiplicador dada a seguir:

                    const multiplicador = [3, 7];

                    O resultado deve ter um retorno como esse:
                </p>

                    <div className="box">
                        <p> 3 x 1 = 3
                            3 x 2 = 6
                            3 x 3 = 9
                            3 x 4 = 12
                            3 x 5 = 15
                            3 x 6 = 18
                            3 x 7 = 21
                            3 x 8 = 24
                            3 x 9 = 27
                        </p>
                    </div>
                    <div className="box">
                        <p>7 x 1 = 7
                            7 x 2 = 14
                            7 x 3 = 21
                            7 x 4 = 28
                            7 x 5 = 35
                            7 x 6 = 42
                            7 x 7 = 49
                            7 x 8 = 56
                            7 x 9 = 63
                        </p>
                    </div>
                <p>
                    (DICA) Quando for desenvolver o segundo for utilize os números de 1 a 9.
                </p>
                <div>
                    <label id="resp"> Resposta4: </label>
                    <textarea
                        placeholder="" 
                        id="respostas"
                        required
                        onChange={(e) => setResposta4(e.target.value)}
                    >
                        {resposta4}
                    </textarea>
                </div>
                <br></br>
                <div className="botao">
                    <button className='btn btn-success' onClick={enviar}> ENVIAR </button>
                </div>
            </form>
        </div>
    )
}

export default Header;