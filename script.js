const projetos = [
  {
    titulo: "SIRAAS",
    descricao1: "Meu projeto do primeiro semestre do curso de ADS (API) da FATEC, consiste em um sistema web desenvolvido para instituições escolares para a administração de atestados médicos, utilizando Python, HTML/CSS, JS e Figma.",
    descricao2: "Durante minha participação no projeto atuei como Dev Team no Método Scrum, e desenvolvi minhas tarefas utilizando HTML, CSS e Python, com foco principal no backend.",
    github: "https://github.com/Gabrielle0905/SIRAAS"
  },
  {
    titulo: "Sphera",
    descricao1: "Sphera é um sistema de PDI (Plano de Desenvolvimento Individual) solicitado pela FATEC de São José dos Campos para apoiar empresas na gestão e crescimento profissional dos colaboradores.",
    descricao2: "Atuo nesse projeto como Scrum Master, garantindo o ritmo sustentável da equipe. Desenvolvido com Java, MySQL e JavaFX.",
    github: "https://github.com/Minerva2025/Minerva"
  }
];

const container = document.getElementById("foto_projeto");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("projetos", "reveal");

  div.innerHTML = `
        <p class="sub">> ${projeto.titulo}</p>
        <p class="descrição">${projeto.descricao1}</p>
        <p class="descrição">${projeto.descricao2}</p>
        <a class="descrição" href="${projeto.github}" target="_blank">
            Github do Projeto
        </a>
  `;

  container.appendChild(div);
});

projetos.push({
  titulo: "Novo Projeto",
  descricao1: "Descrição...",
  descricao2: "Descrição...",
  github: "link"
});

const sections = document.querySelectorAll("section")
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if(entry.isIntersecting){
      const color = entry.target.dataset.color
      document.body.style.backgroundColor = color
    }

  })
}, {
  threshold: 0.6
})

sections.forEach(section => {
  observer.observe(section)
})

