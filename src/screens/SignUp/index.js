import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native'

import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold 
} from './styles';

import SignInput from '../../components/SignInput'

import BarberLogo from '../../assets/barber.svg'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import PersonIcon from '../../assets/person.svg'

export default () => {
    const navigation = useNavigation()

    const [nameField, setNameField] = useState('')
    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handlerSignClick = () => {
        navigation.navigate('SignUp')
    }
    const handlerMessageButtonClick = () => {
        // navigation.navigate('SignUp') Assim daria pra voltar
        navigation.reset({
            routes: [{name: 'SignIn'}]
        })
    }
    return (
        <Container>
           <BarberLogo width='100%' height='160'/>
           <InputArea>  
                <SignInput 
                    IconSvg={PersonIcon}
                    placeholder='Digite seu nome'
                    value={nameField}
                    onChangeText= {t => setNameField(t)}
                />
                <SignInput 
                    IconSvg={EmailIcon}
                    placeholder='Digite seu email'
                    value={emailField}
                    onChangeText= {t => setEmailField(t)}
                /> 

                <SignInput 
                    IconSvg={LockIcon}
                    placeholder='Digite sua senha'
                    value={passwordField}
                    onChangeText= {t => setPasswordField(t)}
                    password={true}
                />           

                <CustomButton
                onPress={handlerSignClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>

           </InputArea>

           <SignMessageButton>
               <SignMessageButtonText
               onPress={handlerMessageButtonClick}>Já possui uma conta?</SignMessageButtonText>
               <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
           </SignMessageButton>
        </Container>
    );
}