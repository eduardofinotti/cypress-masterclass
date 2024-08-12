
import { faker } from '@faker-js/faker';

// elementos
const botao_cadastrar = '#btnRegister'
const campo_nome = '#user'
const campo_email = '#email'
const campo_senha = '#password'

const mensagem_sucesso_titulo = '#swal2-title'
const mensagem_sucesso_subtitulo = '#swal2-html-container'
const mensagem_campo_ivalido = '.errorLabel'

export default {

    // ações
    cadastrar() {
        cy.get(botao_cadastrar).click()
    },

    preecherNome(nome) {
        cy.get(campo_nome).type(nome)
    },

    preecherEmail(email) {
        cy.get(campo_email).type(email)
    },

    preecherSenha(senha) {
        cy.get(campo_senha).type(senha)
    },

    validarCadastroSucesso(nome) {
        cy.get(mensagem_sucesso_titulo)
            .should('have.text', 'Cadastro realizado!')

        cy.get(mensagem_sucesso_subtitulo)
            .should('have.text', `Bem-vindo ${nome}`)
    },

    validarMensagemCampoInválido(mensagem) {
        cy.get(mensagem_campo_ivalido)
            .should('have.text', mensagem)
    },

    cadastrarUsuarioValido(nome, email, senha) {
        this.preecherNome(faker.person.fullName())
        this.preecherEmail(faker.internet.email())
        this.preecherSenha('12121212')
        this.cadastrar()
    }

}