import klyvoraCrm from '../assets/klyvora-crm.png'
import roletaPokemon from '../assets/roleta-pokemon.png'

export const profile = {
  name: 'Yan Teles',
  role: 'Desenvolvedor Web',
  shortRole: 'Criativo digital',
  email: 'ola@seudominio.com',
  bio: 'Transformo ideias complexas em experiências digitais que as pessoas querem usar.',
}

export const projects = [
  { title: 'KLYVORA CRM', category: 'Sistema web · Projeto da faculdade', year: '2025', color: 'cyan', url: 'https://klyvora-crm.vercel.app/', image: klyvoraCrm, description: 'CRM comercial criado para equipes de vendas organizarem leads, funil de vendas, tarefas e resultados em um só lugar. Distribui leads entre vendedores, acompanha negociações em kanban e gera relatórios de faturamento e conversão.', tags: ['CRM', 'Web app', 'Kanban', 'Relatórios'] },
  { title: 'Roleta Jornada Pokémon', category: 'Jogo web · Projeto pessoal', year: '2026', color: 'violet', url: 'https://java-hazel.vercel.app/', image: roletaPokemon, description: 'Jogo de jornada Pokémon movido a roleta: escolha região e chance de shiny, gire para capturar Pokémon, vença os 8 ginásios e chegue à Liga. Tem modo Nuzlocke, time, mochila, PC, memorial e diário, com contas para salvar o progresso na nuvem e dados da PokéAPI.', tags: ['Jogo', 'Web app', 'PokéAPI', 'Salvamento na nuvem'] },
]

export const expertise = [
  ['01', 'Landing pages', 'De campanhas a eventos, com foco em performance e conversão.', 'HTML · CSS · REACT', 'performance primeiro'],
  ['02', 'Automação', 'Fluxos que conectam sistemas e cortam trabalho repetitivo.', 'JAVA · APIs · SCRIPTS', 'menos tarefa repetitiva'],
  ['03', 'Sistemas web', 'Painéis, cadastros e ferramentas internas sob medida.', 'TYPESCRIPT · GIT', 'feito para resolver'],
]
