import { useDispatch } from "react-redux";
import {
  delData,
  setRedact,
  stopRedact,
  updateFilter,
 } from "./redux/DataSlice";
import { Data } from "./models";

interface Props {
  element: Data;
}

function Item({ element }: Props) {
  const dispatch = useDispatch();

  const onRedact = (evt: React.MouseEvent) => {
    const target = evt.target as HTMLElement;
    dispatch(setRedact({ id: (target.parentNode as HTMLFormElement).id }));
    dispatch(updateFilter());
  };

  const onDel = (evt: React.MouseEvent) => {
    const target = evt.target as HTMLElement;
    dispatch(delData({ id: (target.parentNode as HTMLFormElement).id }));
    dispatch(stopRedact());
    dispatch(updateFilter());
  };

  return (
    <li className="item" id={element.id}>
      <span>•</span>
      <span>{element.name}</span>
      <span>{element.price}</span>
      <button onClick={onRedact}> ✍</button>
      <button onClick={onDel}>&times;</button>
    </li>
  );
}

export default Item;