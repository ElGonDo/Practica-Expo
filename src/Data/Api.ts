import axios from 'axios';

const BASE_URL = 'https://api-reac-native-production.up.railway.app';

interface NewUserData {
  Nombres: string;
  Apellidos: string;
  Correo: string;
  Telefono: string;
  Contrasena: string;
}

const postData = async (nuevosDatos: NewUserData) => {
  try {
    const response = await axios.post(`${BASE_URL}/registro`, nuevosDatos);
    return response.data;
  } catch (error) {
    console.error('Error al enviar datos a la API:', error);
    return null;
  }
};

export { postData };