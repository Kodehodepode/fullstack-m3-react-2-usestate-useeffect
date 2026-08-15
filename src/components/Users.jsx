import { useState } from "react"
import styled from "styled-components";

const UserList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-items: space-evenly;
    gap: 20px;
    padding: 20px;
`;

const UserCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    min-width: 250px;
    width: 100%;
    padding: 15px;
    border-radius: 8px;
    background: whitesmoke;
`;

const UserForm = styled.form`
    width: 250px;
    display: flex;
    flex-direction: column;
    input, button {
        width: 100%;
        margin: 0px;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid grey;
    }
    * { margin: 10px 0px; }
    h4 { margin: 0px 0px 4px 0px;}
    button { margin-top: 10px; }
`;

const mockData = [
    { username: 'Ola Normann', email: 'ola.normann@norge.no'},
    { username: 'Torleif', email: 'torleif@kodehode.no' },
    { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
    { username: 'Sander', email: 'sander@kodehode.no' },
];

export default function Users() {

    const [users, setUsers] = useState(mockData);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    //const submitHandler = (e) => {
    const onAdd = (e) => {
        // Navnekonvensjon: onAdd

        e.preventDefault();
        /*

        // Første måte jeg gjorde det på (tar vare på for å se på senere)
        // Dette er ikke react-måten å gjøre ting på:

        // Gjør om form-data til et objekt med input-navnene som nøkler
        const data = Object.fromEntries(new FormData(e.target));

        setUsers(()=> (
            [...users, {username: data.username, email: data.email}]
        ));
        
        // I react setter vi feltverdien i skjemaet til å være en tilstandsvariabel og henter ut den tilstandsvariabelen
        
        */
        setUsers(()=> (
            [...users, {username, email}]
        ));

        e.target.reset();
    }

    return (
        <>
        <UserList>
            {users.map((user, index) => (<UserCard key={index}><h4>{user.username}</h4><p>{user.email}</p></UserCard>))}
        </UserList>
        <UserForm onSubmit={onAdd}>
            <h3>Legg til bruker</h3>
            <label>
                <h4>Brukernavn</h4>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={ e => setUsername(e.target.value) }
                    required>
                </input>
            </label>
            <label>
                <h4>Epost</h4>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={ e => setEmail(e.target.value) }
                    required>
                </input>
            </label>
            <button type="submit">Legg til</button>
        </UserForm>
        </>
    );
}