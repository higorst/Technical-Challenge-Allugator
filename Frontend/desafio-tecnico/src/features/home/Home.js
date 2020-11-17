import logo from './../../assets/logo.png'

//Home page
const Home = () => {
    return(
        <div>
            Desafio técnico solicitado pela empresa Allugator, como requisito de avaliação para o cargo de Software Developer.
            <br/>
            Utilize o menu superior para obter as informações sobre os funcionários cadastrados na base de dados.
            <br/>
            <br/>
            <img src={logo} width={300}/>
        </div>
    )
}

export default Home;

