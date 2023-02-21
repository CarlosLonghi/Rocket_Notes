import { FiUser, FiMail, FiLock } from 'react-icons/fi'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Container, Form, Background } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Background
        alt='Imagem de um bloco de notas e uma caneta sobre a mesa'
      />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar os seus links úteis</p>

        <h2>Crie sua conta</h2>

        <Input 
          placeholder='Nome'
          type='text'
          icon={FiUser}
        />
        <Input 
          placeholder='E-mail'
          type='text'
          icon={FiMail}
        />
        <Input 
          placeholder='Senha'
          type='password'
          icon={FiLock}
        />

        <Button title='Cadastrar'/>

        <a href="#">Voltar para o Login</a>
      </Form>
    </Container>
  )
}