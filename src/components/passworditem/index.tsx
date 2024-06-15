import { Pressable, Text, StyleSheet } from "react-native";

interface PasswordItemType {
    data: string;
    removePassword: () => void;
}

export function PasswordItem({data, removePassword}: PasswordItemType) {
    return (
        <Pressable style={styles.container} onLongPress={removePassword}>
            <Text style={styles.text}>{data}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        color: "#fff"
    }
});
