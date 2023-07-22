import { useContext } from "react";
import SignContext from "../context/signContext";
import { MdDelete, MdEdit } from "react-icons/md";
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const List = ({ data }) => {
	const { setStep, setData, setId } = useContext(SignContext);

	const onDelete = (id) => {
		setData((db) => {
			return db.filter((data) => data.id !== id);
		});
	};
	const update = (id) => {
		setStep("update");
		setId(id);
	};
	return (
		<li className="item">
			<p>{data.name}</p>
			<p>{data.lastname}</p>
			<p>{data.email}</p>
			<p className="list-btn" onClick={() => update(data.id)}>
				<MdEdit size={18} />
			</p>
			<p className="list-btn" onClick={() => onDelete(data.id)}>
				<MdDelete size={18} />
			</p>
		</li>
	);
};

export default List;
