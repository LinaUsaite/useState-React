import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import DynamicInput from "./components/DynamicInput";
import ShowHide from "./components/ShowHide";
import FormState from "./components/FormState";
import MultipleCounters from "./components/MultipleCounters";
import TodoList from "./components/TodoList";
import LikesDislikes from "./components/LikesDislikes";

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
    </>
  );
}
