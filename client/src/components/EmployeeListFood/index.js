import { StyleSheet, Text, View } from 'react-native';

export function EmployeeListFood(props) {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Text>{props.name.charAt(0)}</Text>
            </View>
        

        <View style={styles.informations}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.role}>{props.role}</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth:1,
    },

    informations: {
        justifyContent: 'center',
    },

    image:{
        borderRadius: '50%',
        backgroundColor: 'grey',
        height: 50,
        width: 50,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    role: {
        fontSize: 13,
        color: '#5a5a5a',
    }
});