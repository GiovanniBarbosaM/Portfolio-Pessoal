function loadPage(page) {
    const sections = document.querySelectorAll('.content-section');
    
    // Esconder todas as seções
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar a seção correspondente
    const activeSection = document.getElementById(page);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Atualizar o conteúdo da seção ativa
    updateContent(page);
}

function updateContent(page) {
    const mainContent = document.getElementById('main-content');

    switch (page) {
        case 'home':
            mainContent.innerHTML = `
                <section id="home" class="content-section active">
                    <h2>Bem-vindo ao Meu Portfólio!</h2>
                    <p>Explore meus projetos e experiências.</p>
                    <div class="project-links">
                        <div class="project-link" onclick="loadPage('projetos')">
                            <img src="projeto1.jpg" alt="Projetos">
                            <p>Projetos</p>
                        </div>
                        <div class="project-link" onclick="loadPage('experiencias')">
                            <img src="experiencia.jpg" alt="Experiências">
                            <p>Experiências</p>
                        </div>
                        <div class="project-link" onclick="loadPage('contato')">
                            <img src="contato.jpg" alt="Contato">
                            <p>Contato</p>
                        </div>
                    </div>
                </section>
            `;
            break;
        case 'artigos':
            mainContent.innerHTML = `
                <section id="artigos" class="content-section active">
                    <h2>Artigos Recentes</h2>
                    <div class="article">
                        <img src="artigo1.jpg" alt="Artigo 1">
                        <h3>Como Aprender JavaScript de Forma Eficaz</h3>
                        <p>JavaScript é uma linguagem de programação poderosa. Neste artigo, discutiremos dicas e recursos úteis para aprender JavaScript.</p>
                        <a href="#" class="btn">Leia Mais</a>
                    </div>
                    <div class="article">
                        <img src="artigo2.jpg" alt="Artigo 2">
                        <h3>10 Dicas para Melhorar Seu Portfólio</h3>
                        <p>Um portfólio bem elaborado pode abrir portas para novas oportunidades. Aqui estão 10 dicas para torná-lo mais atraente.</p>
                        <a href="#" class="btn">Leia Mais</a>
                    </div>
                    <div class="article">
                        <img src="artigo3.jpg" alt="Artigo 3">
                        <h3>O Futuro da Tecnologia Web</h3>
                        <p>Com o avanço das tecnologias, o futuro da web é promissor. Neste artigo, exploramos algumas tendências e inovações.</p>
                        <a href="#" class="btn">Leia Mais</a>
                    </div>
                </section>
            `;
            break;
        case 'projetos':
            mainContent.innerHTML = `
                <section id="projetos" class="content-section active">
                    <h2>Meus Projetos</h2>
                    <div class="project-links">
                        <div class="project-link">
                            <img src="projeto1.jpg" alt="Projeto 1">
                            <p>Flappy Bird Clone</p>
                            <p>Um jogo inspirado no clássico Flappy Bird, implementado com JavaScript.</p>
                        </div>
                        <div class="project-link">
                            <img src="projeto2.jpg" alt="Projeto 2">
                            <p>Sistema de Gerenciamento de Estoque</p>
                            <p>Uma aplicação para gerenciar estoque de uma loja de e-commerce utilizando Python e Flask.</p>
                        </div>
                        <div class="project-link">
                            <img src="projeto3.jpg" alt="Projeto 3">
                            <p>Portfólio Pessoal</p>
                            <p>Este é o meu portfólio pessoal, onde você pode ver todos os meus projetos.</p>
                        </div>
                    </div>
                </section>
            `;
            break;
        case 'experiencias':
            mainContent.innerHTML = `
                <section id="experiencias" class="content-section active">
                    <h2>Minhas Experiências</h2>
                    <h3>Experiências Acadêmicas</h3>
                    <ul>
                        <li>Cursando Análise e Desenvolvimento de Sistemas (Anhanguera)</li>
                        <li>Curso livre em Git/GitHub e Iniciação em HTML e CSS</li>
                    </ul>
                    <h3>Experiências Profissionais</h3>
                    <ul>
                        <li>Aviação do Exército (2006 - 2020)</li>
                        <li>Serviço Voluntário em Projetos Sociais</li>
                    </ul>
                </section>
            `;
            break;
        case 'contato':
            mainContent.innerHTML = `
                <section id="contato" class="content-section active">
                    <h2>Entre em Contato</h2>
                    <form>
                        <label for="name">Nome:</label>
                        <input type="text" id="name" name="name" required>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                        <label for="message">Mensagem:</label>
                        <textarea id="message" name="message" required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </section>
            `;
            break;
        default:
            mainContent.innerHTML = `<section class="content-section active"><h2>Página não encontrada</h2></section>`;
            break;
    }
}

// Carrega a página inicial por padrão
loadPage('home');
