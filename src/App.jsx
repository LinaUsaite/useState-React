import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import DynamicInput from "./components/DynamicInput";
import ShowHide from "./components/ShowHide";
import FormState from "./components/FormState";
import MultipleCounters from "./components/MultipleCounters";
import TodoList from "./components/TodoList";
import LikesDislikes from "./components/LikesDislikes";
import TabNavigation from "./components/TabNavigation";
import DynamicBg from "./components/DynamicBg";
import CounterWithLimit from "./components/CounterWithLimits";
import Timer from "./components/Timer";
import ShopingCart from "./components/ShopingCart";
import DerivedState from "./components/DerivedState";
import CounterWithHistory from "./components/CounterWithHistory";

export default function App() {
  return (
    <>
      <Counter />
      <Toggle />
      <DynamicInput />
      <ShowHide />
      <FormState />
      <MultipleCounters />
      <TodoList />
      <LikesDislikes/>
      <TabNavigation/>
      <DynamicBg/>
      <CounterWithLimit/>
      <Timer/>
      <ShopingCart/>
      <DerivedState/>
      <CounterWithHistory/>
    </>
  );
}
