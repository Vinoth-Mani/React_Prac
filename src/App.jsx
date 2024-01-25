const desc = ["Core", "Fundamental", "Essential"];

function Description(max) {
  return (
    Math.floor(Math.random() * max)
  )
}

function coreConcepts() {

}

function Header() {

  const description = desc[Description(3)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>

  )
}


function App() {
  return (
    <div>
      <Header></Header>
      {/* can also be written as <Header /> */}
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
