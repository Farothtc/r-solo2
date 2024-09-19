import { MainElements } from "./MainElements";
import Data from "../Assets/Data";

export function Main() {
  const dataElements = Data.map((e) => <MainElements key={e.id} e={e} />);
  return <div className="container">{dataElements}</div>;
}
