import './styles.css'
import IMAGE from './assets/logo-og.png'
import LOGO from './assets/react-logo.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>
        React Template - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="react logo" width="180px" height="auto" />
      <img src={LOGO} alt="react logo" width="300px" />
      <ClickCounter />
    </>
  )
}
