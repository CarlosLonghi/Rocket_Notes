import { Header } from '../../components/Header'
import { Input} from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem';

import { Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input
            placeholder='Titulo'
          />
          <TextArea
            placeholder='Observações'
          />

        </Form>
      </main>
    </Container>
  )
}