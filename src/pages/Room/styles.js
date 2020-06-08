import  { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    roomButton: {
        flexDirection: 'row',
        fontWeight: 'bold',
        paddingTop: 10
    },

    bbrom: {
        flexDirection: 'row',

    },

    classroom:{  
        fontSize: 20,
        fontWeight: 'bold',
        color: '#374192'
    },

    classroom1:{
        marginLeft: 30,  
        fontSize: 20,
        fontWeight: 'bold',
        color: '#374192'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    Room: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },

    Room2: {
        alignItems: 'center',
        marginTop: 54,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },
    
    HomeProperty: {
        fontSize: 14,
        color: '#374192',
        fontWeight: 'bold',
        
    },
    
    HomeValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    player: {
        width: 270,
        height: 200
    },  

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16
    },

    roomTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#374192',
        lineHeight: 30
    },

    roomDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    action: {
        backgroundColor: '#374192',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }

});