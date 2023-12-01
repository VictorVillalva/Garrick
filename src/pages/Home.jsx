// import Form from "../components/Form"
import '../assets/Styles/home.css'
import G from '../assets/Images/Icono-Language.svg'
import Git from '../assets/Images/GitHub.svg'

import { Input, Button, TextField } from '@mui/material'
import {useState} from "react";
import Swal from "sweetalert2";





const Home = () => {
    const [module, setModule] = useState("")
    const [classe, setClasse]= useState("")
    const [generalFunction, setGeneralFunction] = useState("")
    const [condition,setCondition]=useState("")
    const [foreLoop, setForeLoop]=useState("")
    const [whileLoop, setWhileLoop]=useState("")
    const [ifCondition, setIfCondition]=useState("")
    const [variableDeclaration, setVariableDeclaration]=useState("")
    const [variableAssignation, setVariableAssignation]=useState("")
    const [functionCalling, setFunctionCalling]=useState("")
    const [code,setCode]=useState("")




    const notification =(string, validate)=>{
        if (validate){
            Swal.fire({
                icon: 'success',
                title: 'Congrats...',
                footer: 'Cadena finalizada en estado de aceptación',
                text: `Cadena "${string}" Valida`,
                background: "#2c2c2c",
                color: "#fff",
                confirmButtonColor: "#962222",
                iconColor: "#962222"
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                footer: 'Transicion invalida!',
                text: `Cadena "${string}" Invalida`,
                background: "#2c2c2c",
                color: "#fff",
                confirmButtonColor: "#962222",
                iconColor: "#962222"

            })
        }
    }
    const handlerModuleChange = (e) => {
        setModule(e.target.value)
    };
    const handlerClasseChange = (e) => {
        setClasse(e.target.value)
    };
    const handlerFunctionChange =(e)=>{
        setGeneralFunction(e.target.value)
    };
    const handlerConditionChange=(e)=>{
        setCondition(e.target.value)
    }
    const handlerForeLoopChange=(e)=>{
        setForeLoop(e.target.value)
    }
    const handlerWhileLoopChange=(e)=>{
        setWhileLoop(e.target.value)
    }
    const handlerIfConditionChange=(e)=>{
        setIfCondition(e.target.value)
    }
    const handlerVariableDeclarationChange=(e)=>{
        setVariableDeclaration(e.target.value)
    }
    const handlerFunctionCallingChange=(e)=>{
        setFunctionCalling(e.target.value)
    }

    const handlerCodeChange=(e)=>{
        setCode(e.target.value)
    }



    const  validateModule=(e)=>{
        e.preventDefault()

    }
    const validateClasse=(e)=>{
        e.preventDefault()

    }
    const validateFunction=(e)=>{
        e.preventDefault()

    }
    const validateCondition=(e)=>{
        e.preventDefault()

    }
    const validateForeLoop=(e)=>{
    setForeLoop(e.target.value)
    }
    const validateWhileLoop=(e)=>{
        e.preventDefault()

    }
    const validateIfCondition=(e)=>{
        e.preventDefault()
    }
    const validateVariableDeclaration=(e)=>{
        e.preventDefault()

    }
    const validateFunctionCalling=(e)=>{
        e.preventDefault()

    }


    const validateCode=(e)=>{
        e.preventDefault()

    }

    return (
        <>
            <section className='sec-1'>
                <header className='header-home'>
                    <h1>Lenguaje de programación <label className='language-name'>Garrick</label> <img src={G} alt="G" id='G' /></h1>
                </header>
                <article className='article-home'>
                    <div className="forms">
                        <div className="col-1">
                            <form>
                                <Input fullWidth placeholder="Modulo"
                                    style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                       onChange={handlerModuleChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                    onClick={validateModule}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="clase"
                                    style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                       onChange={handlerClasseChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                    onClick={validateClasse}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="Functions"
                                    style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                       onChange={handlerFunctionChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                    onClick={validateFunction}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="Conditions"
                                       style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                       onChange={handlerConditionChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                        onClick={validateCondition}>Revisar</Button>
                            </form>
                        </div>
                        <div className="col-2">
                            <form action="">
                                <Input fullWidth placeholder="Function Calling"
                                       style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                       onChange={handlerFunctionCallingChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                        onClick={validateFunctionCalling}>Revisar</Button>
                            </form>
                            <form action="">

                                <Input fullWidth placeholder="While Loop"
                                       style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                       onChange={handlerWhileLoopChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                        onClick={validateWhileLoop}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="Fore Loop"
                                       style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                       onChange={handlerForeLoopChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                        onClick={validateForeLoop}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="If condition"
                                       style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                       onChange={handlerIfConditionChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                        onClick={validateIfCondition}>Revisar</Button>
                            </form>

                        </div>
                    </div>
                </article>
                <div className="textValidationCode">
                    <h2 className="codeValidation">Validacion de codigo</h2>
                    <div className="textArea">
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label=""
                            multiline
                            rows={4}
                            defaultValue="Ingresa"
                            style={{backgroundColor: 'white', border:'#FFFFFF 1px solid', fontFamily: 'Raleway',}}
                            color='secondary'
                            onChange={handlerCodeChange}
                        />
                    </div>
                    <Button variant="contained" style={{ backgroundColor: 'white', color: '#131313', marginTop: '1rem' }}
                        onClick={validateCode}>Revisar</Button>
                </div>
                <footer>
                    <div className="logo-garrick">
                        <img src={G} alt="" />
                    </div>
                    <div className="github">
                        <div className="victor">
                            <img src={Git} alt="" className='gtb' /><label htmlFor="github" className='name'><a href="https://github.com/VictorVillalva">Victor Adrian Villalva Rodriguez</a> 213380</label>
                        </div>
                        <div className="jesus">
                            <img src={Git} alt="" className='gtb' /><label htmlFor="github" className='name'><a href="https://github.com/Gsuscrist">Jesus Antonio Gordillo Orantes</a> 213359</label>
                        </div>
                    </div>
                </footer>
            </section>
        </>
    )
}

export default Home