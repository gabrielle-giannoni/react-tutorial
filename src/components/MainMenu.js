// import './MainMenu.css'
import  Box  from '@mui/material/Box'
import {NavLink} from 'react-router-dom'

// const hello = "Olá este é o menu!"

// const navStyle = {
//     background: '#555',
//     color: '#000',
//     padding: '20px'}

// const {nav, ulmenu} = styles (tira os objetos de dentro do outro )

const MainMenu = () => {
    return (
        <Box component="nav" sx = {styles.nav}>
          <ul style = {styles.ulMenu}>
          <li><NavLink to= '/'>Menu</NavLink></li>
          <li><NavLink to= '/quem-somos'>Quem somos</NavLink></li>
          <li><NavLink to= '/users'>Users</NavLink></li>
          <li><NavLink to= '/contato'>Contato</NavLink></li>
          </ul>
        </Box>
    )
}

const styles = {
    nav: {
        color: '#fff',
        margin: '0 0 0 auto',
        '& ul li a':{
            color: '#fff',
            textDecoration: 'none',
            padding: '0 5px 8px 5px',
            '&:hover':{
                color: '#DDD',
                borderBottom: '3px solid #FFF',
            }
    }
    },
    ulMenu: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItens: 'center',
        // gap: '10px',
        // width: 'fit-content',
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItens: 'center',
        gap: '10px',
        padding: '0',
        margin: '0'
    }
}
export default MainMenu