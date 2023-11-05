// import Form from "../components/Form"
import '../assets/Styles/home.css'
import G from '../assets/Images/Icono-Language.svg'
import Git from '../assets/Images/GitHub.svg'
import { Input, Button } from '@mui/material'




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
                            <form action="">
                                <Input fullWidth placeholder="Placeholder"
                                    style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="Placeholder"
                                    style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="Placeholder"
                                    style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="Placeholder"
                                    style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="Placeholder"
                                    style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}>Revisar</Button>
                            </form>
                        </div>
                        <div className="col-2">
                        <form action="">
                                <Input fullWidth placeholder="Placeholder"
                                    style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="Placeholder"
                                    style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="Placeholder"
                                    style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="Placeholder"
                                    style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="Placeholder"
                                    style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}>Revisar</Button>
                            </form>
                        </div>
                    </div>
                </article>
                <footer>
                    <div className="logo-garrick">
                        <img src={G} alt="" />
                    </div>
                    <div className="github">
                        <div className="victor">
                            <img src={Git} alt="" className='gtb'/><label htmlFor="github" className='name'><a href="https://github.com/VictorVillalva">Victor Adrian Villalva Rodriguez</a> 213359</label>
                        </div>
                        <div className="jesus">
                            <img src={Git} alt="" className='gtb'/><label htmlFor="github" className='name'><a href="https://github.com/Gsuscrist">Jesus Antonio Gordillo Orantes</a> 213359</label>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default Home