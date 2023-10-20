import User from "../../components/user/User";

function UsersPage() {
    const user = {
        name: "Dastan",
        userName: "Turatbek",
        age: 26
    }
    return (
        <>
            <h1>Info about one user</h1>
            <User/>
        </>
    )
}

export default UsersPage;