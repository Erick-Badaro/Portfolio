# Portfólio profissional desenvolvido para apresentar meus projetos, habilidades e experiências como Software Engineer com foco em Backend.

Além de ser um site de apresentação, este projeto também inclui uma feature Full Stack: um sistema que registra e notifica automaticamente quando alguém baixa meu currículo.

🌐 Acesse o projeto

🔗 Portfolio: https://portfolioerickbadaro.vercel.app/

# ✨ Funcionalidades

Landing page moderna e responsiva

Seção Hero com animações

Seção Sobre mim

Seção Skills com tecnologias utilizadas

Seção Projetos com links para repositórios

Formulário de contato que envia mensagem para WhatsApp

Botão para download do currículo

Sistema Full Stack de monitoramento de downloads

# 🧠 Feature Full Stack — Monitoramento de Download do CV

Quando alguém baixa o meu currículo, o sistema executa automaticamente o seguinte fluxo:

1️⃣ O frontend (React) envia uma requisição POST para a API informando que o download foi realizado.

2️⃣ O backend (Node.js + Express) recebe essa requisição e cria um registro no banco de dados.

3️⃣ O download é persistido no MongoDB, armazenando algumas informações úteis para análise:

📅 Data do download

⏰ Hora do download

🖥️ User-Agent do navegador

4️⃣ Após salvar os dados no banco, o backend dispara um e-mail automático utilizando o Resend, notificando que alguém baixou o currículo.

Esse fluxo cria um pequeno sistema de observabilidade de interesse no currículo, permitindo acompanhar downloads em tempo real sem coletar dados sensíveis, respeitando boas práticas de privacidade.

# 🏗️ Arquitetura da aplicação

O projeto foi dividido em Frontend e Backend, com deploy em serviços diferentes.

Frontend

Hospedado na Vercel

Responsável pela interface e interações do usuário

Backend

Hospedado na Render

Responsável por:

registrar downloads

integrar com o banco de dados

enviar notificações por e-mail

Serviço de E-mail

Utilizado Resend para envio das notificações de download.

# 🛠️ Tecnologias utilizadas
Frontend

React

TypeScript

TailwindCSS

Framer Motion

React Icons

Vite

Backend

Node.js

Express

MongoDB

Mongoose

Resend (envio de e-mails)

Dotenv

CORS

# 📦 Infraestrutura / Deploy

Frontend: Vercel

Backend: Render

Banco de dados: MongoDB

Envio de e-mails: Resend

🎯 Objetivo do projeto

Este projeto foi desenvolvido para:

Apresentar meus projetos e habilidades

Demonstrar conhecimento em desenvolvimento Full Stack

Implementar uma integração real entre frontend, backend, banco de dados e serviço externo

Praticar deploy e integração entre serviços em produção.
