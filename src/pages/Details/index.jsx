import { Container } from './styles'

import { Button } from '../../components/Button'

export function Details(){
  return (
    <Container>
      <h1>Olá mundo!</h1>
      <span>Cadu Dev</span>

      <Button title='Login' loading/>
      <Button title='Cadastrar'/>
      <Button title='Voltar'/>

    </Container>
  )
}
