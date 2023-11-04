// import Form from "../components/Form"
import '../assets/Styles/home.css'
import G from '../assets/Images/Icono-Language.svg'
import { Input } from '@mui/material'



const Home = () => {


    return (
        <>
            <section className='sec-1'>
                <header className='header-home'>
                    <h1>Lenguaje de programacion <label className='language-name'>Garrick</label> <img src={G} alt="G" id='G' /></h1>
                </header>
                <article className='article-home'>
                    <div className="forms">
                        <div className="col-1">
                            <Input fullWidth placeholder="Placeholder"
                                style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem',}}
                            />
                            <Input fullWidth placeholder="Placeholder"
                                style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem' }}
                            />
                            <Input fullWidth placeholder="Placeholder"
                                style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem'  }}
                            />
                            <Input fullWidth placeholder="Placeholder"
                                style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem' }}
                            />
                        </div>
                        <div className="col-2">
                            <Input fullWidth placeholder="Placeholder"
                                style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem' }}
                            />
                            <Input fullWidth placeholder="Placeholder"
                                style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem' }}
                            />
                            <Input fullWidth placeholder="Placeholder"
                                style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem'  }}
                            />
                            <Input fullWidth placeholder="Placeholder"
                                style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem' }}
                            />
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Home