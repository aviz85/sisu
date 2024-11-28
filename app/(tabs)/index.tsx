import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function HomeScreen() {
  const todaysQuote = {
    text: "הדרך הטובה ביותר לחזות את העתיד היא ליצור אותו",
    author: "פיטר דרוקר",
    category: "הצלחה"
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <ThemedView style={styles.headerContent}>
          <ThemedText type="title">ציטוט היום</ThemedText>
        </ThemedView>
      }>
      <ThemedView style={styles.quoteContainer}>
        <ThemedText type="title" style={styles.quoteText}>
          "{todaysQuote.text}"
        </ThemedText>
        <ThemedText type="subtitle" style={styles.author}>
          - {todaysQuote.author}
        </ThemedText>
        <ThemedText style={styles.category}>
          {todaysQuote.category}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  quoteContainer: {
    padding: 20,
    alignItems: 'center',
    gap: 16,
  },
  quoteText: {
    textAlign: 'center',
    fontSize: 24,
  },
  author: {
    textAlign: 'center',
  },
  category: {
    backgroundColor: '#A1CEDC',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
});
