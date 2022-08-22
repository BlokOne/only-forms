import { useDispatch } from "react-redux";
import { data } from "./type";

export default function check(data: data) {
  console.log(data)
  const { login } = data;
  // Тут Можно делать какой-то то запрос и тп, пока только проверяю на один неверный логин "test.user@example.com"
  if (login !== "test.user@example.com") {
    return true
  } else {
    return login
  }
}