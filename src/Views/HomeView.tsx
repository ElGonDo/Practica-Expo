import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RoundedButton } from './components/RoundedButton';
import { CustomTextInput } from './components/CustomTextInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import HomeViewModel from '../ViewsModels/ModelHome';

type HomeViewNavigationProp = StackNavigationProp<RootStackParamList, 'HomeView'>;

type Props = {
  navigation: HomeViewNavigationProp;
};

function HomeView({ navigation }: Props) {
  const { email, password, onChange } = HomeViewModel();

  const handleLogin = () => {
    console.log('Email: ' + email);
    console.log('Password: ' + password);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/fondo.jpg')} style={styles.imageBackground} />
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/AgSystemInfomation.png')} style={styles.logoImage} />
        <Text style={styles.logoText}>Ag System</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Iniciar Sesion</Text>
        <CustomTextInput
          image={require('../../assets/email.jpg')}
          placeholder='Correo electrónico'
          keyboardType='email-address'
          property='email'
          onChangeText={onChange}
          value={email}
        />
        <CustomTextInput
          image={require('../../assets/pass.jpg')}
          placeholder='Contraseña'
          keyboardType='default'
          property='password'
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />
        <View style={{ marginTop: 30 }}>
          <RoundedButton text='ENTRAR' onPress={handleLogin} />
        </View>
        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterView')}>
            <Text style={styles.formRegisterText}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default HomeView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%',
  },
  form: {
    width: '100%',
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: 'green',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '15%',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

