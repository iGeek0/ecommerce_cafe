import { useState, useEffect } from 'react';
import { getProfile } from '../services/Auth.service';

function Profile() {

    const [formulario, setFormulario] = useState({
        name: '',
        last_name: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        getProfile().then((res) => {
            setFormulario(res.data);
        });
    }, []);

    const handleInputChange = (event) => {
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log("enviando datos");

    }
    return (
        <div className="container">
            <form className="form-login" onSubmit={enviarDatos}>
                <h1 className="text-center mb-5">Informacion de la cuenta</h1>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control form-control-lg" id="name" onChange={handleInputChange} value={formulario.name} name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input type="text" className="form-control form-control-lg" id="last_name" onChange={handleInputChange} value={formulario.last_name} name="last_name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control form-control-lg" id="email" onChange={handleInputChange} value={formulario.email} name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label form-label-lg">Password</label>
                    <input type="password" className="form-control form-control-lg" id="password" onChange={handleInputChange} value={formulario.password} name="password" />
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    );
}

export default Profile;