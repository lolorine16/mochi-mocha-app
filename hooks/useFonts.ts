// hooks/useFonts.ts
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export default function useFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true; // ✅ flag pour vérifier que le composant est encore actif

    const loadFonts = async () => {
      await Font.loadAsync({
        // Dongle
        'Dongle': require('../assets/fonts/Dongle-Regular.ttf'),
        'Dongle-Bold': require('../assets/fonts/Dongle-Bold.ttf'),
        'Dongle-Light': require('../assets/fonts/Dongle-Light.ttf'),

        // Gaegu
        'Gaegu': require('../assets/fonts/Gaegu-Regular.ttf'),
        'Gaegu-Bold': require('../assets/fonts/Gaegu-Bold.ttf'),
        'Gaegu-Light': require('../assets/fonts/Gaegu-Light.ttf'),

        // Jua
        'Jua': require('../assets/fonts/Jua-Regular.ttf'),
      });

      if (isMounted) {
        setFontsLoaded(true); // ✅ seulement si le composant est encore monté
      }
    };

    loadFonts();

    return () => {
      isMounted = false; // ✅ nettoyage pour éviter les erreurs
    };
  }, []);

  return fontsLoaded;
}
