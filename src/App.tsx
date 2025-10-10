import './App.css'
import Header from './components/header'
import ExtensionsContainer from './components/extensions-container'
import ExtensionsTitleFilter from './components/extensions-title-filter'
import { CardProvider } from './contexts/CardContext'
import ExtentionForm from './components/ext-form'

function App() {

  return (
    <>
      <Header />
      <CardProvider>
        <ExtentionForm />
        <ExtensionsTitleFilter />
        <ExtensionsContainer />
      </CardProvider>
    </>

  )
}

export default App
