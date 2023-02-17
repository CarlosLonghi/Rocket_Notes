import { Container, Links, Content } from './styles'

import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Details(){
  return (
    <Container>
      <Header/>
      
      <main>
        <Content>
          <ButtonText title='Excluir Nota'/>

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum tenetur optio laborum debitis dolorem corporis quasi hic eaque et, molestias alias rem commodi amet non nemo odio labore, enim voluptatem.
          </p>

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

        </Content>
      </main>

    </Container>
  )
}
