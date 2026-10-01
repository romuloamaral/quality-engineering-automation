Feature: Practice Form

    Scenario: Enviar formulário com dados válidos
    
        Given eu acesso o formulário
        When eu prencho o formulário com dados válidos
        And eu envio o formulário
        Then o envio deve ser exibido com sucesso