import 'styles/global.scss'
import 'styles/colors.scss'
import '@fontsource/poppins' 
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  ) 
}
