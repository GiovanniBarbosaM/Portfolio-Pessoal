function loadPage(page) {
    const sections = document.querySelectorAll('.content-section');

    // Esconder todas as seções
    sections.forEach(section => section.classList.remove('active'));

    // Mostrar a seção correspondente
    const activeSection = document.getElementById(page);
    if (activeSection) {
        activeSection.classList.add('active');
        updateContent(page);
    } else {
        mainContent.innerHTML = `<section class="content-section active"><h2>Página não encontrada</h2></section>`;
    }
}

const contentData = {
    home: `
        <h2>Bem-vindo ao Meu Portfólio!</h2>
        <p>Explore meus projetos e experiências.</p>
        <div class="project-links">
            ${generateProjectLinks([
                { page: 'projetos', img: 'projeto1.jpg', title: 'Projetos' },
                { page: 'experiencias', img: 'experiencia.jpg', title: 'Experiências' },
                { page: 'contato', img: 'contato.jpg', title: 'Contato' },
            ])}
        </div>
    `,
    artigos: `
        <h2>Artigos Recentes</h2>
        ${generateArticleLinks([
            { img: 'artigo1.jpg', title: 'Como Aprender JavaScript de Forma Eficaz', desc: 'JavaScript é uma linguagem de programação poderosa. Neste artigo, discutiremos dicas e recursos úteis para aprender JavaScript.' },
            { img: 'artigo2.jpg', title: '10 Dicas para Melhorar Seu Portfólio', desc: 'Um portfólio bem elaborado pode abrir portas para novas oportunidades. Aqui estão 10 dicas para torná-lo mais atraente.' },
            { img: 'artigo3.jpg', title: 'O Futuro da Tecnologia Web', desc: 'Com o avanço das tecnologias, o futuro da web é promissor. Neste artigo, exploramos algumas tendências e inovações.' },
        ])}
    `,
    projetos: `
        <h2>Meus Projetos</h2>
        <div class="project-links">
            ${generateProjectDetails([
                { img: 'projeto1.jpg', title: 'Flappy Bird Clone', desc: 'Um jogo inspirado no clássico Flappy Bird, implementado com JavaScript.' },
                { img: 'projeto2.jpg', title: 'Sistema de Gerenciamento de Estoque', desc: 'Uma aplicação para gerenciar estoque de uma loja de e-commerce utilizando Python e Flask.' },
                { img: 'projeto3.jpg', title: 'Portfólio Pessoal', desc: 'Este é o meu portfólio pessoal, onde você pode ver todos os meus projetos.' },
            ])}
        </div>
    `,
    experiencias: `
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
    `,
    contato: `
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
    `,
};

function updateContent(page) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `<section id="${page}" class="content-section active">${contentData[page] || '<h2>Página não encontrada</h2>'}</section>`;
}

function generateProjectLinks(projects) {
    return projects.map(({ page, img, title }) => `
        <div class="project-link" onclick="loadPage('${page}')">
            <img src="${img}" alt="${title}">
            <p>${title}</p>
        </div>
    `).join('');
}

function generateArticleLinks(articles) {
    return articles.map(({ img, title, desc }) => `
        <div class="article">
            <img src="${img}" alt="${title}">
            <h3>${title}</h3>
            <p>${desc}</p>
            <a href="#" class="btn">Leia Mais</a>
        </div>
    `).join('');
}

function generateProjectDetails(projects) {
    return projects.map(({ img, title, desc }) => `
        <div class="project-link">
            <img src="${img}" alt="${title}">
            <p>${title}</p>
            <p>${desc}</p>
        </div>
    `).join('');
}

// Carrega a página inicial por padrão
loadPage('home');
