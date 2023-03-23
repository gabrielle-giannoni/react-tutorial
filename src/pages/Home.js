import Box from "@mui/material/Box"
import Header from '../components/Header'
import MainMenu from '../components/MainMenu'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'
import Footer from '../components/Footer'

const Home =()=> {
    return (
        <>
        <Header />
        {/* <h1>Olá {pessoa['nome']}</h1> */}
        <MainMenu />
        <Box sx={{
          display: 'flex',
  
        }}>
          <Sidebar />
          <Content />
        </Box>
        <Footer />
      </>
    )
}

export default Home