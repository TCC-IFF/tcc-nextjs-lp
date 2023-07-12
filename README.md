# CineTCC - Next

Este é um projeto desenvolvido em Next.js para fins de estudo e experimentação.

## Descrição

Este projeto é uma Landing Page desenvolvida em Next.js, utilizando a técnica de renderização no lado do servidor, também conhecida como Server Side Rendering (SSR). O objetivo é comparar a performance, a experiência do usuário e a indexação por motores de busca desta abordagem SSR com uma similar implementada via Client Side Rendering (CSR) com React.js.
A aplicação em React está disponível [nesse repositório](https://github.com/TCC-IFF/tcc-react-lp)

## Configuração

Para rodar este projeto localmente, é necessário ter o Node.js e npm/yarn instalados em seu sistema. Além disso, será necessário uma chave de acesso para consumir a [API do TMDB](https://developer.themoviedb.org/reference/intro/getting-started)

- Clone o repositório: 

<!--sec data-title="Prompt: OS X and Linux" data-id="OSX_Linux_prompt" data-collapse=true ces-->
    $ git clone https://github.com/TCC-IFF/tcc-nextjs-lp.git
<!--endsec-->

</br>
  
- Entre na pasta do projeto e instale as dependências: 
<!--sec data-title="Prompt: OS X and Linux" data-id="OSX_Linux_prompt" data-collapse=true ces-->
    $ npm install
<!--endsec-->
ou 
<!--sec data-title="Prompt: OS X and Linux" data-id="OSX_Linux_prompt" data-collapse=true ces-->
    $ yarn install
<!--endsec-->

### Ajustando a Complexidade da Aplicação

Você pode alterar a complexidade da aplicação ao ajustar o número de requisições e o tamanho da DOM. Para fazer isso, siga as instruções abaixo:

1. Abra o arquivo `src/app/page.tsx` e encontre a função `getPopularMoviesData`;
2. Altere o valor da constante `totalPage` para `ReviewSectionPreLoadSize.BIG` ou `ReviewSectionPreLoadSize.SMALL`.

  O `.SMALL` corresponde a um número menor de requisições e um tamanho de DOM menor, enquanto o `.BIG` irá aumentar ambas as quantidades.


## Rodando o Projeto

Para iniciar o servidor de desenvolvimento:
<!--sec data-title="Prompt: OS X and Linux" data-id="OSX_Linux_prompt" data-collapse=true ces-->
    $ yarn dev
<!--endsec-->
ou 
<!--sec data-title="Prompt: OS X and Linux" data-id="OSX_Linux_prompt" data-collapse=true ces-->
    $ npm dev
<!--endsec-->

Visite `http://localhost:3000` no seu navegador para ver a aplicação em ação.
