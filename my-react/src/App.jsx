import Logo from './components/logo'
import Counter from './components/counter'

function App() {
  return (
    <div>
      <Logo letter="N" color="goldenrod" family="Arial" />
      <Logo letter="M" color="purple" family='"Comic Sans Ms", "Comic Sans", "Apple Chancery", "Comic Neue", cursive' />

      <Counter />
    </div>
  )
}

export default App
