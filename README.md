<div align="center">
  <h1>Silvestrin</h1>
</div>

O projeto consistiu no desenvolvimento de um site institucional moderno e responsivo para a marca **Silvestrin**, com foco em transmitir a energia, o frescor e a alegria presentes no universo das frutas, sem abrir mão de uma identidade visual moderna.
  
---

## Índice

- [Sobre](#sobre)
- [Visualização](#visualizacao)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Documentação](#documentacao)


---

<h2 id="sobre">Sobre:</h2>

Através do painel de gerenciamento (manager), é possível:

- Gerenciar conteúdos da Home
- Configurar SEO para cada página
- Atualizar dados gerais
- Gerenciar conteúdos Institucional
- Gerenciar produtos, categorias e marcas
- Gerenciar conteúdos da página Cultivo
- Gerenciar conteúdos da página Transporte
- Visualizar emails de contato e gerenciar conteúdo desta página
- Alterar a política de privacidade
- Alterar conteúdos para cada idioma, sendo eles: inglês, espanhol e português - BR

E através do site para o público:

- Visualizar as páginas:
    - **Home**: apresentando um pouco sobre as marcas, valores e etc.
    - **Sobre**:
        - **A Silvestrin**: com a história da Silvestrin
        - **Responsabilidade Socioambiental**: trazendo parcerias, projetos de sustentabilidade e etc.
    - **Produtos**: com marcas, parceiros e categorias
    - **Cultivo**: um pouco sobre como é o processo de cultivo e pesquisa
    - **Euro Company**: site externo
    - **Transportadora**: apresenta instalações, logística, fotos, certificação e tecnologia
    - **Contato**: filiais da Silvestring, informações de contato e form para enviar email (comercial ou trabalhe conosco)
    - **Rastreamento**: site externo

---


<h2 id="visualizacao">Visualização:</h2>

<img width="400" alt="image home banner" src="https://github.com/user-attachments/assets/340cab29-8f07-4c5a-82d1-2cac54cfb21f" />
<img width="400" alt="image sobre banner" src="https://github.com/user-attachments/assets/f108cc16-38dc-432b-bd3a-8285c715af7d" />
<img width="400" alt="image sustentabilidade banner" src="https://github.com/user-attachments/assets/bb56def6-980d-4f31-90d2-4bd0e7558e86" />
<img width="400" alt="image produtos banner" src="https://github.com/user-attachments/assets/ba56dbc7-da9f-4645-a61d-880e01023fb7" />
<img width="400" alt="image cultivo banner" src="https://github.com/user-attachments/assets/56198be6-5c91-4cf7-b3d7-691dad10bf98" />
<img width="400" alt="image transportadora banner" src="https://github.com/user-attachments/assets/359a72ce-1bc9-419d-94ce-da0c68fc93dc" />
<img width="400" alt="image contato banner" src="https://github.com/user-attachments/assets/93c88a8d-cdf4-4669-a282-089f7d3de707" />

---

<h2 id="tecnologias-utilizadas">Tecnologias Utilizadas:</h2>

### Back-end:
- **Laravel (^12.0)**: framework PHP para construção do projeto, gerenciamento de rotas, autenticação e etc.
- **PHP (^8.2)**: linguagem de desenvolvimento
- **Laravel Sanctum (^4.0)**: autenticação e proteção de rotas
- **Inertia.js (^2.0)**: integração entre backend Laravel e frontend React sem necessidade de API tradicional
- **Laravel Localization (^2.2)**: gerenciamennto de idiomas e rotas traduzidas
- **Ziggy (^2.0)**: compartilhamento de rotas Laravel diretamente no frontend React
- **Laravel Breeze (^2.3)**: estrutura inicial de autenticação e gerenciamento de usuários
- **Laravel Tinker (^2.10.1)**: ferramenta para testes e execução de comandos no ambiente
- **Laravel PT-BR Validator (*)**: validações adaptadas para formato brasileiro

### Front-end:
- **React (^18.2.0)**: biblioteca para construção de interfaces
- **Vite (^6.2.4)**: ferramenta de build e desenvolvimento rápido
- **Laravel Vite Plugin (^4.0.0)**: integração entre Laravel e Vite
- **Tailwind (^3.2.1)**: framework para estilização
- **Tailwind Forms (^0.5.3)**: estilização para formulários 
- **PostCSS (^8.4.31)**: processador de CSS usado junto do Tailwind

### UI e experiência do usuário:
- **Font Awesome React (^3.3.1)**: biblioteca de ícones para interface
- **Swiper (^11.2.6)**: criação de sliders e carrosseis
- **Gsap (^3.13.0)**: biblioteca para animações
- **React Select (^5.10.1)**: select customizado
- **React Tag Input (^6.10.6)**: gerenciamento e criação de tags

### Tabelas, dados e formulários:
- **React Input Mask (^2.0.4)**: máscaras para inputs como CPF e telefones
- **React SortableJS (^6.1.4)**: drag and drop para ordenação de elementos
- **React Paginate (^8.3.0)**: paginação de listas e tabelas

### Upload e manipulação de arquivos:
- **React Dropzone (^14.3.8)**: upload de arquivos via drag and drop
- **React Image Crop (^11.0.7)**: recorte de imagens no navegador
- **browser-image-compression (^2.0.2)**: compressão de imagens

### Editor de texto:
- **Tiptap (^2.11.7)**: editor de texto altamente cuustimizável
- Extensões utilizadas:
  - **Image**: suporte para imagens
  - **Link**: gerenciamento de links
  - **Underline**: sublinhado no texto
  - **Table**: criação de tabelas
  - **List Item**: manipulação de listas
  - **Figure Extension**: suporte a figuras
  - **Starter Kit**: funcionalidades básicas do editor

---

<h2 id="arquitetura-do-projeto">Arquitetura principal do Projeto:</h2>

```bash
Silvestrin
│
├── app
│   ├── Http
│   │   ├── Controllers    # Controladores responsáveis pelas requisições e retornar respostas (separado por Manager)
│   │   ├── Middleware     # Interceptação, autenticação e tratamento de requisições
│   │   ├── Requests       # Validação e autorização de formulários e requisições (separado por Manager)
│   │   ├── helpers.php    # Auxiliares globais utilizados no projeto
│   ├── Models             # Representação das tabelas do banco (Eloquent)
│   ├── Providers          # Configuração de pacotes
│   ├── Services           # Regras de negócio
├── bootstrap              # Inicialização do framework
├── config                 # Arquivos de configuração
├── database               # Migrations, seeds e factories
├── public                 # Diretório público acessível pelo navegador
│   ├── admin              # Arquivos relacionados ao Manager
│   ├── content            # Arquivos relacionados as páginas e gerenciáveis pelo Manager
│   ├── site               # Arquivos do site institucional
├── resources              # Frontend e recursos
│   ├── css                # Estilização 
│   ├── js                 # Componentes, páginas, hooks e layouts (separados por Manager)
│   ├── lang               # Traduções de recursos estáticos como header, footer e etc.
│   ├── views              # Templates e views do Laravel/Inertia
├── routes                 # Definição das rotas web e Manager
├── storage                # Arquivos gerados (logs, cache e etc.)
├── tests
│

```

---

<h2 id="como-executar-o-projeto">Como Executar o Projeto:</h2>

1. Clone o repositório:

```bash
git clone https://github.com/Octal-web/Silvestrin.git
cd Silvestrin
```

2. Instale as dependências do Front-end:

```bash
npm install
```

3. Instale as dependências do Back-end:

```bash
composer install
```

4. Configure o ambiente

Crie o arquivo .env:

```bash
cp .env.example .env
```

Gere a chave da aplicação:
```bash
php artisan key:generate
```

Configure o banco de dados SQL e preencha com o acesso no .env

5. Rode o projeto:
```bash
npm run dev
php artisan serve
```
---
<h2 id="documentacao">Documentação:</h2>
Este README apresenta uma visão geral do projeto.

Para uma documentação completa, incluindo arquitetura, instalação detalhada, páginas, fluxo, controllers e componentes, acesse a Wiki do projeto:
[Wiki do projeto](https://github.com/Octal-web/Silvestrin/wiki)


