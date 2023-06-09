import { StyleSheet, Text, View  } from 'react-native';

export function Header(props) {
    return (
        <View style={StyleSheet.container}>
            <Text Style={Styles.text}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
    }
});