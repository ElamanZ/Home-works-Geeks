import React, {useState} from 'react';

function ContactsPage() {
    const [contacts, setContacts] = useState("")

    const changeInput = (event) => {
        setContacts(event.target.value)
    }
    const addBtn = () => {
        console.log(contacts)
        setContacts("")
    }
    const clearBtn = () => {
        setContacts("")
    }
    return (
        <>
            <h1>Contacts</h1>
            <input
                type="text"
                placeholder={"Введите ваше имя"}
                value={contacts}
                onChange={changeInput}
            />
            <button onClick={addBtn}>Add</button>
            <button onClick={clearBtn}>Clear</button>
        </>
    );
}

export default ContactsPage;