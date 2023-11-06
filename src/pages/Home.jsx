// import Form from "../components/Form"
import '../assets/Styles/home.css'
import G from '../assets/Images/Icono-Language.svg'
import Git from '../assets/Images/GitHub.svg'
import { Input, Button } from '@mui/material'
import {useState} from "react";
import Swal from "sweetalert2";




const Home = () => {
    const [module, setModule] = useState("")
    const [classe, setClasse]= useState("")
    const [generalFunction, setGeneralFunction] = useState("")
    const [mainFunction, setMainFunction]=useState("")
    const [condition,setCondition]=useState("")
    const [foreLoop, setForeLoop]=useState("")
    const [whileLoop, setWhileLoop]=useState("")
    const [ifCondition, setIfCondition]=useState("")
    const [elifCondition, setElifCondition]=useState("")
    const [variableDeclaration, setVariableDeclaration]=useState("")
    const [variableAssignation, setVariableAssignation]=useState("")
    const [functionCalling, setFunctionCalling]=useState("")
    const [writtingFunction, setWrittingFunction]=useState("")
    const [readingFunction, setReadingFunction]=useState("")



    const notification =(string, validate)=>{
        if (validate){
            Swal.fire({
                icon: 'success',
                title: 'Congrats...',
                footer: 'Cadena finalizada en estado de aceptación',
                text: `Cadena "${string}" Valida`,
                background: "#2c2c2c",
                color: "#fff",
                confirmButtonColor: "#850287",
                iconColor: "#850287"
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                footer: 'Transicion invalida!',
                text: `Cadena "${string}" Invalida`,
                background: "#2c2c2c",
                color: "#fff",
                confirmButtonColor: "#850287",
                iconColor: "#850287"

            })
        }
    }
    const handlerModuleChange = (e) => {
        setModule(e.target.value)
    };
    const handlerClasseChange = (e) => {
        setClasse(e.target.value)
    };
    const handlerGeneralFunctionChange =(e)=>{
        setGeneralFunction(e.target.value)
    };
    const handlerMainFunctionChange=(e)=>{
        setMainFunction(e.target.value)
    }
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
    const handlerElifConditionChange=(e)=>{
        setElifCondition(e.target.value)
    }
    const handlerVariableDeclarationChange=(e)=>{
        setVariableDeclaration(e.target.value)
    }
    const handlerVariableAssignationChange=(e)=>{
        setVariableAssignation(e.target.value)
    }
    const handlerFunctionCallingChange=(e)=>{
        setFunctionCalling(e.target.value)
    }
    const handlerWrittingFunctionChange=(e)=>{
        setWrittingFunction(e.target.value)
    }
    const handlerReadingFunctionChange=(e)=>{
        setReadingFunction(e.target.value)
    }



    const  validateModule=(e)=>{
        e.preventDefault()
        console.log("la cadena es: ", module)
        const moduleStructure = /^modulo\s(\w+).util$/;
        let validate = moduleStructure.test(module)
        notification(module,validate)

    }
    const validateClasse=(e)=>{
        e.preventDefault()
        console.log("la cadena es: ", classe)
        const classStructure = /^Class\s(\w+)\s*\(\s*\)\{\s*\}$/
        if (classStructure.test(classe)){
            console.log("exito")
        }else{
            console.log("perro")
        }
    }
    const validateGeneralFunction=(e)=>{
        e.preventDefault()
        console.log("la cadena es: ", generalFunction)
        const generalFunctionStructure = /^func\s(\w+)\(((int|float|string|bool)\s(\w+))*\)\{\s*\}$/
        if(generalFunctionStructure.test(generalFunction)){
            console.log("exito")
        }else{
            console.log("perro")
        }
    }
    const validateMainFunction=(e)=>{
        e.preventDefault()
        console.log("la cadena es: ", mainFunction)
        const mainFunctionStructure = /^func\sMain\(\)\{\s*\}$/

        if(mainFunctionStructure.test(mainFunction)){
            console.log("exito")
        }else{
            console.log("perro")
        }
    }
    const validateCondition=(e)=>{
        e.preventDefault()
        console.log("la cadena es: ", condition)
        const conditionStructure = /^(int|bool|string|float)*\s*(\w+)\s(>|>=|<|<=|!=|==)\s(\w+)$/

        if (conditionStructure.test(condition)){
            console.log("exito")
        }else {
            console.log("ta madre")
        }
    }
    //revisar
    const validateForeLoop=(e)=>{
        e.preventDefault()
        console.log("la cadena es: ", foreLoop)
        const foreLoopStructure = /^fore\(((int|bool|string|float)*\s*(\w+)*\s*(>|>=|<|<=|!=|==)*\s*(\w+))\)\{\s*\}$/

        if (foreLoopStructure.test(foreLoop)){
            console.log("exito")
        }else{
            console.log("inga tu roña")
        }
    }
    //revisar
    const validateWhileLoop=(e)=>{
        e.preventDefault()
        console.log("la cadena es: ", whileLoop)
        const whileLoopStructure = /^while\(((int|bool|string|float)*\s*(\w+)*\s*(>|>=|<|<=|!=|==)*\s*(\w+))\)\{\s*\}$/
        if (whileLoopStructure.test(whileLoop)){
            console.log("exito")
        }else {
            console.log("mames")
        }
    }
    const validateIfCondition=(e)=>{
        e.preventDefault()
        console.log("la cadena es: ", ifCondition)
        const ifConditionStructure=/^if\((\w+)\s*(>|>=|<|<=|!=|==)\s*(\w+)\)\{\s*\}(elif\(((\w+)\s*(>|>=|<|<=|!=|==)\s*(\w+))*\)\{\s*\})*$/
        if (ifConditionStructure.test(ifCondition)){
            console.log("exito")
        }else{
            console.log("mames")
        }

    }
    const validateElifCondition=(e)=>{
        e.preventDefault()
        console.log("la cadena es: ", elifCondition)
        const elifConditionStructure=/^elif\((\w+)\s*(>|>=|<|<=|!=|==)\s*(\w+)\)\{\s*\}$/
        if (elifConditionStructure.test(elifCondition)){
            console.log("exito")
        }else{
            console.log("mames")
        }
    }
    const validateVariableDeclaration=(e)=>{
        e.preventDefault()
        console.log("la cadena es: ", variableDeclaration)
        const variableDeclarationStructure = /^((int|float)\s(\w+)(:)*\s*(\d)*(.)*(\d)*;)|((string)\s(\w+)(:*)("*)((\w+)(\s*))*("*)(;))|(bool\s(\w+)(:*)(false|true)*;)$/
        if(variableDeclarationStructure.test(variableDeclaration)){
            console.log("exito")
        }else{
            console.log("err")
        }
    }
    const validateVariableAssignation=(e)=>{
        e.preventDefault()
        console.log("la cadena es: ", variableAssignation)
        const variableAssignationStructure = /^(\w+)\s*:(("(\w+\s*)*")|(\d+)|(true|false)|(\d+.\d+));$/
        if (variableAssignationStructure.test(variableAssignation)){
            console.log("exito")
        }else {
            console.log("err")
        }

    }
    const validateFunctionCalling=(e)=>{
        e.preventDefault()
        console.log("la cadena es: ", functionCalling)
        const functionCallingStructure = /^(\w+)\((\w+)*\);$/
        if (functionCallingStructure.test(functionCalling)){
            console.log("exito")
        }else{
            console.log("err")
        }
    }
    const validateWrittingFunction=(e)=>{
        e.preventDefault()
        console.log("la cadena es:", writtingFunction)
        const writtingFunctionStructure = /^writeln\(("(\w+\s*)*")\);$/
        if(writtingFunctionStructure.test(writtingFunction)){
            console.log("exito")
        }else{
            console.log("err")
        }
    }
    const validateReadingFunction=(e)=>{
        e.preventDefault()
        console.log("la cadena es: ", readingFunction)
        const readingFunctionStructure= /^readln\(("(\w+\s*)*")*\);$/
        if(readingFunctionStructure.test(readingFunction)){
            console.log("exito")
        }else{
            console.log("err")
        }
    }

    return (
        <>
            <section className='sec-1'>
                <header className='header-home'>
                    <h1>Lenguaje de programacion <label className='language-name'>Garrick</label> <img src={G} alt="G" id='G' /></h1>
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
                                       onChange={handlerGeneralFunctionChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                    onClick={validateGeneralFunction}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="Main Function"
                                    style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                        onChange={handlerMainFunctionChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                    onClick={validateMainFunction}>Revisar</Button>
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
                                <Input fullWidth placeholder="While Loop"
                                       style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                       onChange={handlerWhileLoopChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                        onClick={validateWhileLoop}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="If condition"
                                       style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                       onChange={handlerIfConditionChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                        onClick={validateIfCondition}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="Elif condition"
                                       style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                       onChange={handlerElifConditionChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                        onClick={validateElifCondition}>Revisar</Button>
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
                                <Input fullWidth placeholder="Variable Declaration"
                                       style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                       onChange={handlerVariableDeclarationChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                        onClick={validateVariableDeclaration}>Revisar</Button>
                            </form>

                        </div>
                        <div className={"col-3"}>
                            <form action="">
                                <Input fullWidth placeholder="Variable Assignation"
                                       style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem',}}
                                       onChange={handlerVariableAssignationChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                        onClick={validateVariableAssignation}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="Function Calling"
                                       style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                       onChange={handlerFunctionCallingChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                        onClick={validateFunctionCalling}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="Writting Function"
                                       style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                       onChange={handlerWrittingFunctionChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                        onClick={validateWrittingFunction}>Revisar</Button>
                            </form>
                            <form action="">
                                <Input fullWidth placeholder="Reading Function"
                                       style={{ color: 'white', fontFamily: 'Raleway', borderBottom: '#FFFFFF 1px solid', marginTop: '2rem', }}
                                       onChange={handlerReadingFunctionChange}
                                />
                                <Button variant="contained" style={{backgroundColor:'white', color:'#131313', marginTop:'1rem'}}
                                        onClick={validateReadingFunction}>Revisar</Button>
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