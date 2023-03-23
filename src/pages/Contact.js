import Box from "@mui/material/Box"
import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <>
        <Header />
        {/* <h1>Olá {pessoa['nome']}</h1> */}
        <MainMenu />
        <Box sx={{
          display: 'flex',
  
        }}>
          <Sidebar />
          <Box>
            <h1>Entre em Contato</h1>
            <p>Nosso Numero: 0800555050</p>
            <p>Nosso Email: contactus@gmail.com</p>
          </Box>
        </Box>
        <Footer />
      </>
    )
}

export default Contact