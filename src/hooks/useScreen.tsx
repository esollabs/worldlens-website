import { useEffect, useMemo, useState } from 'react'

const useScreen = () => {
  const [screen, setScreen] = useState<Screen>()

  useEffect(() => {
    if (window) {
      setScreen(window.screen)
    }
  }, [])

  return useMemo(() => {
    return screen
  }, [screen])
}

export default useScreen
