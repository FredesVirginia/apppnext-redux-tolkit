//los hooks te permiten reutilizar funciones en direntes componentens
import { TypedUseSelectorHook, useDispatch , useSelector } from "react-redux";
import { AppDispatch , RootState } from "./store";


//este es nuestro primer hooks
//con este  hook estamos diciendo que si quieres alguna caracterisita usa este hook
export const useAppDispatch = () => useDispatch<AppDispatch>();
// y aqui, si quieres algu selector del estado usa este hook
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector