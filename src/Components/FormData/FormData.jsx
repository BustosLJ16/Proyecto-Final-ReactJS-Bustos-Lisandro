import { useContext, useRef } from 'react'
import './FormData.css'
import Swal from 'sweetalert2';
import { FormContext } from '../../Context/FormContext/FormContext.jsx'

const FormData = () => {
    const { setFormData } = useContext(FormContext)
    const inputNameRef = useRef(null);
    const inputLastNameRef = useRef(null);
    const inputEmailRef = useRef(null);
    const inputEmail2Ref = useRef(null);
    const inputPhoneRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault(); // Evitar el comportamiento predeterminado del formulario.

        // Obtengo los valores de los campos.
        const name = inputNameRef.current.value.trim();
        const lastName = inputLastNameRef.current.value.trim();
        const email = inputEmailRef.current.value.trim();
        const email2 = inputEmail2Ref.current.value.trim();
        const phone = inputPhoneRef.current.value.trim();

        // Validar campos vacíos y mostrar mensajes específicos.
        if (!name) {
            Swal.fire({
                icon: "error",
                title: "Lo sentimos...",
                text: "El campo 'Nombre' está vacío.",
            });
            return;
        }

        if (!lastName) {
            Swal.fire({
                icon: "error",
                title: "Lo sentimos...",
                text: "El campo 'Apellido' está vacío.",
            });
            return;
        }

        if (!email) {
            Swal.fire({
                icon: "error",
                title: "Lo sentimos...",
                text: "El campo 'Email' está vacío.",
            });
            return;
        }

        if (!email2) {
            Swal.fire({
                icon: "error",
                title: "Lo sentimos...",
                text: "El campo 'Verifique Su Email' está vacío.",
            });
            return;
        }

        if (!phone) {
            Swal.fire({
                icon: "error",
                title: "Lo sentimos...",
                text: "El campo 'Número Celular' está vacío.",
            });
            return;
        }

        // Verificar si los correos son iguales
        if (email !== email2) {
            Swal.fire({
                icon: "error",
                title: "Lo sentimos...",
                text: "Los correos electrónicos no coinciden.",
            });
            return;
        }

        setFormData({ name, lastName, email, phone }); //Seteo Mis datos obtenidos.

        //Alerta de que todo salió correctamente.
        Swal.fire({
            icon: "success",
            title: "Éxito!",
            text: "Datos válidos. ¡Gracias por confirmar su identidad!",
        });
    };

    return (
        <>
            <div>FormData</div>
            <div className="d-flex justify-content-center align-items-center m-2">
            
                <form id="formData" className="justify-content-center" onSubmit={handleSubmit}>
                    <h5 className='text-center'>1. Llene con sus Datos.</h5>
                    <div className="col-auto py-2">
                        <input
                            type="text"
                            className="form-control text-center"
                            ref={inputNameRef}
                            placeholder="Ingrese su Nombre"
                        />
                    </div>
                    <div className="col-auto py-2">
                        <input
                            type="text"
                            className="form-control text-center"
                            ref={inputLastNameRef}
                            placeholder="Ingrese su Apellido"
                        />
                    </div>
                    <div className="col-auto py-2">
                        <input
                            type="email"
                            className="form-control text-center"
                            ref={inputEmailRef}
                            placeholder="Ingrese su Email"
                        />
                    </div>
                    <div className="col-auto py-2">
                        <input
                            type="email"
                            className="form-control text-center"
                            ref={inputEmail2Ref}
                            placeholder="Verifique Su Email"
                        />
                    </div>
                    <div className="col-auto py-2">
                        <input
                            type="number"
                            className="form-control text-center"
                            ref={inputPhoneRef}
                            placeholder="Ingrese su Número Celular"
                        />
                    </div>
                    <div className="col-auto py-2">
                        <button type="submit" className="btn btn-primary px-5">
                            Confirmar Identidad
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormData