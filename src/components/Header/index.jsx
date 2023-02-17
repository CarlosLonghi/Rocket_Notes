import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/CarlosLonghi.png" alt="Foto do usuário" />

        <div>
          <span>Bem vindo</span>
          <strong>Carlos Longhi</strong>
        </div>
      </Profile>
    </Container>
  )
}