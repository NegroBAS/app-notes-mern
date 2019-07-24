
export const create = async newNote => {
    let config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('usertoken')
        },
        body: JSON.stringify(newNote)
    }
    let res = await fetch('http://localhost:8000/api/note', config);
    let json = await res.json();
    return json;
}

export const get_note = async noteId => {
    let config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('usertoken')
        },
    }
    let res = await fetch(`http://localhost:8000/api/note/${noteId}`, config);
    let json = await res.json();
    return json;
}

export const update_note = async (noteId, noteUpdated) => {
    let config = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('usertoken')
        },
        body:JSON.stringify(noteUpdated)
    }
    let res = await fetch(`http://localhost:8000/api/note/${noteId}`, config);
    let json = await res.json();
    return json;
}