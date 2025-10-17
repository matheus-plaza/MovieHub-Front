# 🎬 MovieHub

Bem-vindo ao repositório do **MovieHub**, um hub de filmes e séries desenvolvido para catalogar e gerenciar informações sobre entretenimento, incluindo detalhes, categorias e serviços de *streaming* disponíveis.

Este repositório contém o código do **Backend** da aplicação, construído com Java e o *framework* Spring Boot. O **Frontend** está em fase de planejamento e será desenvolvido com **Angular**.

## 🚀 Status do Projeto

| Componente | Linguagem/Framework | Status |
| :--- | :--- | :--- |
| **Backend (API)** | Java (Spring Boot) | Finalizado e Ativo |
| **Frontend (Web)** | Angular | Em Desenvolvimento |


### Estrutura e Serviços Chave

O projeto está organizado em serviços dedicados, garantindo a separação de responsabilidades:

| Serviço | Funcionalidade Principal | Referência |
| :--- | :--- | :--- |
| `AuthService` | Implementa `UserDetailsService`, carregando usuários pelo email. | `AuthService.java` |
| `UserService` | Gerenciamento de usuários, incluindo a codificação de senhas com `PasswordEncoder`. | `UserService.java` |
| `MovieService` | CRUD completo para filmes, gerenciando relacionamento com **Categorias** e **Streamings**. | `MovieService.java` |
| `CategoryService` | CRUD para as categorias dos filmes (Ex: Ação, Drama). | `CategoryService.java` |
| `StreamingService` | CRUD para os serviços de *streaming* (Ex: Netflix, Prime Video). | `StreamingService.java` |

## 📐 Frontend (Angular)

Estou ativamente iniciando o desenvolvimento do **Frontend** do MovieHub utilizando **Angular**.

### Objetivos do Frontend

1.  **Interface Moderna:** Criar uma experiência de usuário (UX) intuitiva e moderna.
2.  **Consumo de API:** Integrar-se totalmente com o *backend* Java/Spring Boot para buscar, criar e atualizar dados.
3.  **Componentes Reutilizáveis:** Utilizar a modularidade do Angular para construir componentes eficientes e reutilizáveis (Ex: Cartões de Filmes, Navegação, Formulários de Login).
4.  **Gerenciamento de Estado:** Implementar uma estratégia de gerenciamento de estado para manter a aplicação rápida e responsiva.
5.  **Temas:** Possivelmente implementar um sistema de temas para alternância (Ex: Dark/Light Mode).

## 🛠️ Como Executar o Backend

Para rodar o projeto Java (Spring Boot) localmente, siga os passos abaixo:

1.  **Pré-requisitos:** Certifique-se de ter o **Java 17** e o **Maven** instalados.
2.  **Banco de Dados:** Configure uma instância do **PostgreSQL** e atualize as credenciais no arquivo `application.properties` (ou `application.yml`).
3.  **Execução:**
    ```bash
    # Navegue até a raiz do projeto onde está o pom.xml
    ./mvnw spring-boot:run
    ```

### Documentação da API

Após a inicialização, a documentação da API (Swagger UI) estará disponível em:

**`http://localhost:8080/swagger-ui.html`**

## 🤝 Contato

Desenvolvido por: **matheus-plaza**
