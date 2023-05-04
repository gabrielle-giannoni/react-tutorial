import Box from '@mui/material/Box'
import Header from '../components/Header'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import CardUser from '../components/CardUser'

const Users = () => {

  const [users, setUsers] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const loadUsers = async () => {
    try {
      const response = await fetch('http://localhost:3100/user')
      const data = await response.json()
      setUsers(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

    const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('Minha funcao de submit')
    console.log(event.target)
    const nome = event.target.nome.value 
    const email = event.target.email.value
    const senha = event.target.senha.value
    const foto = event.target.foto.value
    const user = {nome, email, senha, foto}
    console.log(user)
    try {
      const response = await fetch('http://localhost:3100/user',
      // a linha de cima é da tabela usuario da parte back
      {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), 
      })
      const data = await response.json()
      console.log(data)
      setModalOpen(false)
      loadUsers()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Header />
      <Box sx={{
        display: 'flex',
      }}>
        <Sidebar />
        <Content title="Users">
          <button onClick={() => setModalOpen(true)}>Cadastrar Usuario</button>
            {users && 
              users.map(user => (
                <CardUser key={user.id} user={user} />
              ))
            }
        </Content>
      </Box>
      {modalOpen &&

<Box className="bgModal" onClick={(event) => {
  if(event.target.className.includes('bgModal')) {
    setModalOpen(false)
  }
}} sx={{
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: '#000000A0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9
  }}>
    <Box sx={{
      width: '500px',
      height: '300px',
      background: '#FFF',
      borderRadius: '10px',
      padding: '20px',
    }}>
      <h1>Cadastrar Usuario</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nome" /><br />
        <input type="text" name="email" placeholder="Email" /><br />
        <input type="password" name="senha" placeholder="Senha" /><br />
        <input type="text" name="foto" placeholder="foto" /><br />
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </Box> 
</Box>
      }
      <Footer />
    </>
  )
}

export default Users