// import { createContext, useState } from 'react'

// type Props = { children: JSX.Element | Array<JSX.Element> }

// interface context {
//   mode: 'light' | 'dark';
// }

// export const ShoppingCartContext = createContext<context>({
//   mode
// })

// export const ShoppingCartProvider = ({ children }: Props): JSX.Element => {
//   const [count, setCount] = useState<number>(0)
//   console.log('COUNT:', count)
//   const contextValue: ICountContext = { count, setCount }
//   return <ShoppingCartContext.Provider value={contextValue}>{children}</ShoppingCartContext.Provider>
// }
