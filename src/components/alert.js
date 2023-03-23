
import {FaCheck} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
import {FaInfo} from 'react-icons/fa';
import {FaExclamationTriangle} from 'react-icons/fa';

const typeColor = {
    success: "#cdefd6",
    error: "#efcdcd",
    info:"#cddeef",
    warning: "#ebe5b7"

}
const typeIcon = {
    success: <FaCheck />,
    error: <FaTimes />,
    info: <FaInfo/>,
    warning: <FaExclamationTriangle />
}

const Alert = ({type, children}) => {

    const bg = {
        background: typeColor[type],
        padding: '20px',
        borderRadius: '10px'
    }

    return (
        <div style={bg}>
            {typeIcon[type]}
            <span>{children}</span>
        </div>
    )
}
// const bg = {
//     background: "#cdefd6",
//     padding: '20px',
//     borderRadius: '10px'
// }
export default Alert