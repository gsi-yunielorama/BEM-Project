import './App.css'
import Header from './components/header'
import ExtensionsContainer from './components/extensions-container'
import ExtensionsTitleFilter from './components/extensions-title-filter'
import { CardProvider } from './contexts/CardContext'

function App() {

  return (
    <>
      <Header />
      <CardProvider>
        <ExtensionsTitleFilter />
        <ExtensionsContainer />
      </CardProvider>
    </>

  )
}

export default App
