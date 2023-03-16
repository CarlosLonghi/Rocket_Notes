import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input} from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem';
import { Section} from '../../components/Section'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { api } from '../../services/api'
import { Container, Form } from "./styles";

export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted){
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote(){
    if(!title) {
      return alert('De um titulo para a nota!')
    }

    if(newLink){
      return alert('Você esqueceu de adicionar um LINK preenchido! Clique no "+" para adiciona-lo!')
    }

    if(newTag){
      return alert('Você esqueceu de adicionar uma TAG preenchida! Clique no "+" para adiciona-la!')
    }

    await api.post('/notes', {
      title, 
      description,
      tags,
      links
    })

    alert('Nota criada com sucesso!')
    handleBack()
  }

  return (
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText 
              title='voltar'
              onClick={handleBack}
            />
          </header>

          <Input 
            placeholder='Titulo'
            onChange={event => setTitle(event.target.value)}
          />
          <TextArea 
            placeholder='Observações (Opcional)'
            onChange={event => setDescription(event.target.value)}
          />

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
              {
                tags.map(( tag, index ) => (
                  <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <NoteItem 
                isNew
                placeholder='Nova Tag' 
                onChange={event => setNewTag(event.target.value)}
                value={newTag}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button 
            title='Salvar' 
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}