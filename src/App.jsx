import Students from "./Students";

function App() {
  return (
    <>
      <Students name="spongebob" age={24} isStudent={true} />
      <Students name="James" age={45} isStudent={false} />
      <Students name="Andrew" age={56} isStudent={false} />
      <Students name="Anna" age={21} isStudent={true} />

    </>
  );
}

export default App;
