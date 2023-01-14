import { useState, useEffect } from 'react'

function debounce(func, timeout = 200) {
   // permet de déclencher l'eventlistener du resize qu'une fois toutes les 200ms, plutôt qu'à chaque fenêtre de modification
   let timer
   return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
         func.apply(this, args)
      }, timeout)
   }
}

export default function ResponsiveRules(breakpoint, contentA, contentB) {
   const [width, setWidth] = useState(window.innerWidth)
   useEffect(() => {
      const debouncedHandleResizeWindow = debounce(() => {
         console.log('debounce trigger')
         setWidth(window.innerWidth)
      })

      window.addEventListener('resize', debouncedHandleResizeWindow)
      return () => {
         window.removeEventListener('resize', debouncedHandleResizeWindow)
      }
   }, [])

   // si la taille de l'écran (width) est supérieure au breakpoint, affiche 'contentA', sinon affiche 'contentB'
   if (width > breakpoint) {
      return contentA
   } else {
      return contentB
   }
}
