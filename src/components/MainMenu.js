import './MainMenu.css'

// const hello = "Olá este é o menu!"

// const navStyle = {
//     background: '#555',
//     color: '#000',
//     padding: '20px'}

// const {nav, ulmenu} = styles (tira os objetos de dentro do outro )

const MainMenu = () => {
    return (
        <nav style = {styles.nav}>
          <ul style = {styles.ulMenu}>Menu...</ul>
        </nav>
    )
}

const styles = {
    nav: {
        background: '#555',
        color: '#000',
        padding: '20px'
    },
    ulMenu: {
        listStyleType: 'none'
    }
}
export default MainMenu