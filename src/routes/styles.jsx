import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#006B65',
        height: 60,
        borderTopWidth: 0,
        paddingEnd: 200, // Adiciona o espaçamento horizontal
    },
    alignLeft: {
        alignItems: 'flex-start', // Alinha os ícones à esquerda
        justifyContent: 'flex-start', // Alinha os ícones ao topo
    },
});