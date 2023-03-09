import Box from "@mui/material/Box";
import { height } from "@mui/system";
import Alert from "./alert";
const Content = () => {

    // const cadastrou = true


    return (
        <Box sx={{
            background: '#66CDAA',
            width: '1600px',
            height: '500px'
        }}>
            <h2>Content</h2>
            <p>Lorem ipsum, dolor sit adipisicing e</p>
            <Alert type="success">
                Deu Bom!
            </Alert>
            <Alert type="error">
                Deu Ruim!
            </Alert>
            <Alert type="info">
                info!
            </Alert>
            <Alert type="warning">
                warning!
            </Alert>

            {/* {cadastrou === true ?
            <Alert color="#cdefd6">
            Meu Alert
            </Alert>
            :
            <Alert color="#efcdcd">
                Deu Ruim!
            </Alert>
            } */}
        </Box>
    )
}

export default Content