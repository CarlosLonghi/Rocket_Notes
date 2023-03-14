import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input} from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem';
import { Section} from '../../components/Section'
import { Button } from '../../components/Button'

import { Container, Form } from "./styles";

export function New() {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted))

  }

  return (
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input placeholder='Titulo'/>
          <TextArea placeholder='Observações'/>

          <Section title='Links úteis'>
            {
              links.map((link, index) => (
                <NoteItem 
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)} // Quando for preciso passar um parâmetro para a função deve usar: () => nomeDaFunção(parâmetro)
                />
              )
              )
            }
            <NoteItem 
              isNew
              placeholder='Novo link' 
              value={newLink}
              onChange={event => setNewLink(event.target.value)}
              onClick={handleAddLink}
            />
          </Section>
          
          <Section title='Tags'>
            <div className='tags'>
              <NoteItem value='React'/>
              <NoteItem placeholder='Nova Tag' isNew/>
            </div>
          </Section>

          <Button title='Salvar'/>
        </Form>
      </main>
    </Container>
  )
}