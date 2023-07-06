import React from 'react'

export default function useLayoutEffect() {
  return (
    // useLayoutEffect va useEffectning bir biridan farqi shundaki useLayoutEffect render bo'lganda unda qandaydir to'xtalishlar bo'lmaydi 
    // yani  useEffectga nisbatan unda render sof ravishda yuz beradi qisqacha tarifi shunaqaroq 
    <div>useLayoutEffect</div>
  )
}
