import '../assets/Styles/form.css';
import { TextField } from '@mui/material';

const Form = () => {
    return (
        <div className='container-form'>
            <section className="information">
                <div className="data">
                    {/* <h2>Ingresa {type} para comprobar</h2>
                    <div className="input-data">
                        <input type="text" /> */}
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField id="filled-basic" label="Filled" variant="filled" />
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                    {/* </div> */}
                </div>
            </section>
        </div>
    )
}

export default Form