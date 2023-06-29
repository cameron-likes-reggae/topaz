import { useContext } from "react";
import { RestContext } from "../providers/RestProvider";

const useAxios = () => {
	return useContext(RestContext);
};
export default useAxios;
