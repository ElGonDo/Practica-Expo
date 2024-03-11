import { useState } from "react";
import { postData } from "../Data/Api";

const RegisterViewModel = () => {
  const [values, setValues] = useState({
    Nombres: '',
    Apellidos: '',
    Correo: '',
    Telefono: '',
    Contrasena: ''
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const register = async () => {
    try {
      // Aquí se llama a la función postData de la capa Data para enviar los nuevos datos
      const response = await postData(values);

      // Puedes manejar la respuesta de la API aquí, por ejemplo:
      console.log('Respuesta de la API:', response);

      // Haz aquí cualquier otra lógica que necesites después de enviar los datos
    } catch (error) {
      console.error('Error al intentar registrar:', error);
    }
  }

  return {
    ...values,
    onChange,
    register
  };
}

export default RegisterViewModel;