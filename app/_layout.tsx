import { Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

export default function RootLayout() {
  return (
      <Stack >
        <Stack.Screen name = "index" options={{ headerShown: false }} />
      </Stack>
  );
}
