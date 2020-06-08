import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';


import styles from './styles';

export default function Room2() {
    const navigation = useNavigation();

    function navigateBack() {
        navigation.goBack();
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>

                
                
            </View>

    

            <View style={styles.Room2}>
            <Text style={styles.roomTitle}>Aula 2:</Text>
                <Text style={styles.HomeProperty}>Curso:</Text>
                <Text style={styles.HomeValue}>CURSO JS RocketSeat</Text>
                <View style={styles.player}>
                    <WebView source={{ uri : 'https://www.youtube.com/watch?v=c7P03kkrEG8'}} />
                </View>

                <TouchableOpacity
                    style={styles.roomButton}
                   
                >  
                    <TouchableOpacity style={styles.bbrom} onPress={navigateBack}>
                    <Feather name="arrow-left" size={26} color="#374192" style={styles.class}/>
                    <Text style={styles.classroom}>Retornar</Text>
                    </TouchableOpacity>
                    
                    <Text style={styles.classroom1}>Proxima aula</Text>
                    <Feather name="arrow-right" size={26} color="#374192" style={styles.class}/>
                </TouchableOpacity>
            </View>

        </View>
    );
}