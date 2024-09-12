import FirstWidget from "./Components/FirstWidget";
import SecondWidget from "./Components/SecondWidget";

function App() {
  return (
    <div className="w-screen h-screen bg-[#272B30] flex overflow-x-hidden">
      <div className='w-1/2 h-full '>
      </div>
      <div className="w-1/2 h-full lg:py-7 py-3 px-5">
        <FirstWidget />
        <SecondWidget />
      </div>
    </div>
  );
}

export default App;
