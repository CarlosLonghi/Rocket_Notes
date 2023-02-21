import { FiMail, FiLock} from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from "./styles";

export function SingIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar os seus links úteis</p>

        <h2>Faça seu Login</h2>

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
        <Button title='Entrar'/>

        <a href="#">Criar conta</a>
      </Form>

      <Background/>
      
    </Container>
  )
}