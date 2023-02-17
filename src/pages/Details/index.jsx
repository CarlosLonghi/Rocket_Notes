import { Container, Links } from './styles'

import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Details(){
  return (
    <Container>
      <Header/>

      <ButtonText title='Excluir Nota'/>

      <Section title='Links úteis'>
        <Links>
          <li>
            <a href="#">https://github.com/CarlosLonghi</a>
          </li>
          <li>
            <a href="#">https://github.com/CarlosLonghi</a>
          </li>
        </Links>
      </Section>

      <Section title='Marcadores'>
        <Tag title='JavaScript'/>
        <Tag title='ReactJS'/>
      </Section>

      <Button title='Voltar'/>
    </Container>
  )
}
