import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DeleteUser } from "../action/crudAction";

const View = () => {
    const navigate = useNavigate();
    const users = useSelector(state => state.crud.users);
    const dispatch = useDispatch();

    const deleteUser = (id) => {
        dispatch(DeleteUser(id));
        alert("record delete");
    }


    return (
        <div align="center">
            <h2>View Record</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u, i) => {
                            return (
                                <tr key={++i}>
                                    <td>{++i}</td>
                                    <td>{u.name}</td>
                                    <td>{u.phone}</td>
                                    <td>
                                        <button onClick={() => deleteUser(u.id)}>Delete</button> &nbsp;
                                        <button onClick={() => navigate(`/edit`, { state: u })}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link to={`/add`}>Add</Link>
        </div>
    )
}
export default View;