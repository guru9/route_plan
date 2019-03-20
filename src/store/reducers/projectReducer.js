const initState = {
    // dummy data
    projects: [
        { id: 1, title: 'project1', content: 'blah blah blah...' },
        { id: 2, title: 'project2', content: 'blah blah blah...' },
        { id: 3, title: 'project3', content: 'blah blah blah...' },
        { id: 4, title: 'project4', content: 'blah blah blah...' },
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer