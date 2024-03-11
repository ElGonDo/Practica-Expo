import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { RoundedButton } from './components/RoundedButton'; 
import { CustomTextInput } from './components/CustomTextInput';
import RegisterViewModel from '../ViewsModels/ModelRegister';

const RegisterView = () => {
    const { Nombres, Apellidos, Correo, Telefono, Contrasena, onChange, register } = RegisterViewModel();

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/fondo.jpg')} style={styles.imageBackground} />
            <View style={styles.logoContainer}>
                <Image source={require('../../assets/AgSystemInfomation.png')} style={styles.logoImage} />
                <Text style={styles.logoText}>Ag System Infomation</Text>
            </View>
            <View style={styles.form}>
                <ScrollView>
                    <Text style={styles.formText}>Registrate:</Text>

                    <CustomTextInput
                        image={require('../../assets/user.png')}
                        placeholder='Nombres'
                        value={Nombres}
                        keyboardType='default'
                        property='Nombres'
                        onChangeText={onChange}
                    />
                    <CustomTextInput
                        image={require('../../assets/users.png')}
                        placeholder='Apellidos'
                        value={Apellidos}
                        keyboardType='default'
                        property='Apellidos'
                        onChangeText={onChange}
                    />
                    <CustomTextInput
                        image={require('../../assets/email.jpg')}
                        placeholder='Correo'
                        value={Correo}
                        keyboardType='email-address'
                        property='Correo'
                        onChangeText={onChange}
                    />
                    <CustomTextInput
                        image={require('../../assets/phone.png')}
                        placeholder='Telefono'
                        value={Telefono}
                        keyboardType='numeric'
                        property='Telefono'
                        onChangeText={onChange}
                    />
                    <CustomTextInput
                        image={require('../../assets/pass.jpg')}
                        placeholder='Contraseña'
                        value={Contrasena}
                        keyboardType='default'
                        secureTextEntry={true}
                        property='Contrasena'
                        onChangeText={onChange}
                    />
                    <View style={{ marginTop: 30 }}>
                        <RoundedButton text='GUARDAR' onPress={register} />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
export default RegisterView;
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
height: '70%',
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
logoContainer: {
position: 'absolute',
alignSelf: 'center',
top: '5%',
alignItems: 'center',
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