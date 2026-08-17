import Layout from "./components/Layout";
import NumericInput from "./components/NumericInput";
import SliderInput from "./components/SliderInput";
import CalculateButton from "./components/CalculateButton";
import CalculatedAmounts from "./components/CalculatedAmounts";

function App() {
  return (
    <Layout>
      <p>This is a little blurb</p>
      <NumericInput />
      <NumericInput />
      <NumericInput />
      <SliderInput />
      <CalculateButton />
      <CalculatedAmounts />
    </Layout>
  );
}

export default App;
