import Box from "@mui/material/Box";
import { padding } from "@mui/system"
import montanha from './assets/img/montanha.jpg'
import {ReactComponent as IconCart} from './assets/img/carrinho.svg'
import {FaCartPlus} from 'react-icons/fa'

const Sidebar = () => {
    return (
        <Box sx={{
            background: "#DDD",
            width: "200px",
            height: "500px",
            padding: 5
        }}>
            <h2>Sidebar</h2>
            <img 
            style= {{
                width: 180,
                height: 123.83
            }}
            src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01.jpeg.webp?w=1024&h=684" alt="montanha com luz"></img>
            <br />
            <hr />
            <br />
            <img 
                style= {{
                     width: 180,
                     height: 123.83
                }}
                src={montanha} alt="montanha"/>
            <hr />
            <IconCart style= {{
                with: 30,
                height: 30
            }} /> 
            <hr />
            <FaCartPlus />
        </Box>
    )
}

export default Sidebar