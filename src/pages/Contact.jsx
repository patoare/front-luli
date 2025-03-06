import { useState }  from 'react';

const API_URL = import.meta.env.VITE_API_URL; // Obteniendo la URL del backend desde el .env


const Contact = () => {
const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
});

const [success, setSuccess] = useState(false);
const [error, setError] = useState('');

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`${API_URL}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setSuccess(true);
            setError('');
            setFormData({ name: '', surname: '', email: '', message: '' });
        }
    } catch (error) {
        console.log(error);
        setError ('humbo un problemita mate');
    }
};

    return (
        <div className="cuerpoFooter">
            
            <h2>Escribime!</h2>
        
<form className="formCreate" onSubmit={handleSubmit}>
    <label className="labelForm" >Nombre
        <input 
        className="textCreate"  type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required  
        />
    </label>
    <label className="labelForm" >Apellido
        <input 
        className="textCreate"
        type="text"
        name="surname"
        value={formData.surname}
        onChange={handleChange}
        required   
        />
    </label>
    <label className="labelForm" >Mail
        <input 
        className="textCreate" 
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        />
    </label>
    <label className="labelForm" >Mensaje
        <textarea 
        className="textCreate" 
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        ></textarea>
    </label>
    
    
    <button className="button" type="submit">Enviar</button>
</form>
{success && <p>¡Formulario enviado correctamente!</p>}
{error && <p>{error}</p>}
        </div>
    )
}
export default Contact;