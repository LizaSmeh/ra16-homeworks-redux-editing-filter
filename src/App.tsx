
import "./App.css";
import AddForm from "./components/AddForm";
import OrderList from "./components/OrderList";
import Filter from "./components/Filter";
import { useDispatch, useSelector } from "react-redux";
import { DataState } from "./components/models";
import { useEffect } from "react";
import { updateFilter } from "./components/redux/DataSlice";


function App() {
  const data = useSelector((state: DataState) => state.data.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateFilter());
  }, [data]);

  return (
    <div>
      <Filter />
      <AddForm />
      <OrderList />
    </div>
  );
}

export default App;