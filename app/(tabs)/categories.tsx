import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function CategoriesScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">קטגוריות</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
}); 