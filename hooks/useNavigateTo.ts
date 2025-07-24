// hooks/useNavigateTo.ts
import { useRouter } from 'expo-router';

export function useNavigateTo() {
  const router = useRouter();

  function goTo(path: string) {
    router.push(path as any); // pas besoin de `as any`
  }

  return { goTo };
}
