import { get } from "../../api";
import { Route, Link } from "react-router-dom";
import { Home } from "../../pages/Home";

export function Header() {
  return (
    <div>
      <div>로고(불꽃장터)</div>
      <nav>
        <ul>
          <li>중고거래</li>
          <li>마이페이지</li>
        </ul>
      </nav>
    </div>
  );
}
