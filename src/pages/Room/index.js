import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';


import styles from './styles';
import * as MailComposer from 'expo-mail-composer';

export default function Room() {
    const navigation = useNavigation();
    const message = 'Olá Docente, Estou entrando em contato, pos gostaria de tirar uma duvidas.';

    function navigateBack() {
        navigation.goBack();
    }

    function navigateToRoom2() {
        navigation.navigate('Room2');
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Professor: Curso JS RocketSeat',
            recipients: ['gamersdx10@gmail.com'],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL('whatsapp://send?phone=5507191576797=${message}');
    }

    return (
        <View style={styles.container}>
       


            <View style={styles.Room}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={30} color="#374192" />
                </TouchableOpacity>
                
                <Text style={styles.roomTitle}>Aula de Introdução</Text>
            </View>
                <Text style={styles.HomeProperty}>Nome:</Text>
                <Text style={styles.HomeValue}>CURSO JS RocketSeat</Text>

                <Text style={styles.HomeProperty}>N° Aulas:</Text>
                <Text style={styles.HomeValue}>10</Text>

            
                <View style={styles.player}>
                    <WebView source={{ uri: 'https://www.youtube.com/watch?v=XcU9GEUZTQA' }} />
                </View>

              
                
                <TouchableOpacity
                    style={styles.roomButton}
                    onPress={navigateToRoom2}
                >  
                    <Text style={styles.classroom}>Proxima aula</Text>
                    <Feather name="arrow-right" size={26} color="#374192" style={styles.class}/>
                </TouchableOpacity>
            
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.roomTitle}>Entre em Contato</Text>

                <Text style={styles.roomDescription}>Tire suas duvidas com professor!</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}