import Box from "@mui/material/Box"
import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import Content from "../components/Content";
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
          <Content title= "Contato">
            <p>Entre em contato com a gente</p>
          </Content>
        </Box>
        <Footer />
      </>
    )
}

export default Contact