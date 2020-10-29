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

export default () => {
    const navigation = useNavigation()

    const [emailField, setEmailField] = useState('')
    const [passwordField, setPasswordField] = useState('')

    const handlerSignClick = () => {
        navigation.navigate('SignUp')
    }
    const handlerMessageButtonClick = () => {
        // navigation.navigate('SignUp') Assim daria pra voltar
        navigation.reset({
            routes: [{name: 'SignUp'}]
        })
    }
    return (
        <Container>
           <BarberLogo width='100%' height='160'/>
           <InputArea>  
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
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

           </InputArea>

           <SignMessageButton>
               <SignMessageButtonText
               onPress={handlerMessageButtonClick}>Ainda não possui uma conta?</SignMessageButtonText>
               <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
           </SignMessageButton>
        </Container>
    );
}