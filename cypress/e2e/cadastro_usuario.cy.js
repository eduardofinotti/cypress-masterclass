import { faker } from '@faker-js/faker';
import cadastro_usuario_page from '../support/pages/cadastro_usuario_page';

describe('Cadastro de usuário', () => {

    const nome = faker.person.fullName()
    const email = faker.internet.email()
    const senha = '123456'
    const email_invalido = 'aushuahsuashua'
    const senha_invalida = '123'

    beforeEach('Acessar cadastro de usuário', () => {
        cy.visit('/register')
    })

    it('Cadastro de usuário com sucesso', () => {
        // Dado
        cadastro_usuario_page.preecherNome(nome)
        cadastro_usuario_page.preecherEmail(email)
        cadastro_usuario_page.preecherSenha(senha)

        // Quando
        cadastro_usuario_page.cadastrar()

        // Entao
        cadastro_usuario_page.validarCadastroSucesso(nome)
    })

    it('Cadastro com nome vazio', () => {
        cadastro_usuario_page.preecherEmail(email)
        cadastro_usuario_page.preecherSenha(senha)
        cadastro_usuario_page.cadastrar()
        cadastro_usuario_page.validarMensagemCampoInválido('O campo nome deve ser prenchido')
    })

    it('Cadastro com email vazio', () => {
        cadastro_usuario_page.preecherNome(nome)
        cadastro_usuario_page.preecherSenha(senha)
        cadastro_usuario_page.cadastrar()
        cadastro_usuario_page.validarMensagemCampoInválido('O campo e-mail deve ser prenchido corretamente')
    })

    it('Cadastro com email inválido', () => {
        cadastro_usuario_page.preecherNome(nome)
        cadastro_usuario_page.preecherEmail(email_invalido)
        cadastro_usuario_page.preecherSenha(senha)
        cadastro_usuario_page.cadastrar()
        cadastro_usuario_page.validarMensagemCampoInválido('O campo e-mail deve ser prenchido corretamente')
    })

    it('Cadastro com senha vazia', () => {
        cadastro_usuario_page.preecherNome(nome)
        cadastro_usuario_page.preecherEmail(email)
        cadastro_usuario_page.cadastrar()
        cadastro_usuario_page.validarMensagemCampoInválido('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro com senha com menos de 6 dígitos', () => {
        cadastro_usuario_page.preecherNome(nome)
        cadastro_usuario_page.preecherEmail(email)
        cadastro_usuario_page.preecherSenha(senha_invalida)
        cadastro_usuario_page.cadastrar()
        cadastro_usuario_page.validarMensagemCampoInválido('O campo senha deve ter pelo menos 6 dígitos')
    })
})