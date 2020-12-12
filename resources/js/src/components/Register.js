import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';
import api from '../api';

const Register = () => {

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [usuaId, setusuaId] = useState('');
    const [usuaNombre, setusuaNombre] = useState('');
    const [usuaApellido, setusuaApellido] = useState('');
    const [usuaPassword, setusuaPassword] = useState('');
    const [usuaCorreo, setusuaCorreo] = useState('');
    const [usuaTelefono1, setusuaTelefono1] = useState('');
    const [usuaTelefono2, setusuaTelefono2] = useState('');
    const [usuaStatus, setusuaStatus] = useState('');

    const onAddUser = async () => {
        setLoading(true);
        try {
            await api.addUser({
                usuaId, usuaPassword, usuaNombre, usuaApellido, usuaCorreo, usuaTelefono1, usuaTelefono2, usuaStatus
            })
            alert('Registro exitoso');
            history.push('/');
        } catch {
            alert('Fallo el registro')
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="Register_container">
            <form>
                <div class="form-group">
                    <label for="inputAddress">Nombre</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="inputAddress" 
                        value={usuaNombre} 
                        onChange={e => setusuaNombre(e.target.value)}/>
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Apellido</label>
                    <input 
                        type="text" 
                        class="form-control" 
                        id="inputAddress2" 
                        value={usuaApellido} 
                        onChange={e => setusuaApellido(e.target.value)} />
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputEmail">Email</label>
                    <input 
                        type="email" 
                        class="form-control" 
                        id="inputEmail" 
                        value={usuaCorreo} 
                        onChange={e => setusuaCorreo(e.target.value)}/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword">Password</label>
                    <input 
                        type="password" 
                        class="form-control" 
                        id="inputPassword"
                        value={usuaPassword} 
                        onChange={e => setusuaPassword(e.target.value)} />
                    </div>
                </div>
                <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputID">ID</label>
                    <input 
                        type="number" 
                        class="form-control" 
                        id="inputID" 
                        value={usuaId} 
                        onChange={e => setusuaId(e.target.value)}/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputNumber1">Telefono 1</label>
                    <input 
                        type="number" 
                        class="form-control" 
                        id="inputNumber1" 
                        value={usuaTelefono1} 
                        onChange={e => setusuaTelefono1(e.target.value)}/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputNumber2">Telefono 2</label>
                    <input 
                        type="number" 
                        class="form-control" 
                        id="inputNumber2" 
                        value={usuaTelefono2} 
                        onChange={e => setusuaTelefono2(e.target.value)}/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputStatus">Status</label>
                    <input 
                        type="number" 
                        class="form-control" 
                        id="inputStatus" 
                        value={usuaStatus} 
                        onChange={e => setusuaStatus(e.target.value)}/>
                    </div>
                </div>
                <button 
                    type="submit" 
                    class="btn btn-primary" 
                    onClick={onAddUser} 
                    disabled={loading}>
                        {loading ? 'LOADING...' : 'ADD'}
                </button>
            </form>
        </div>
    );
};

export default Register;