const skills = [
    {id: 0, skill: 'python', pro: true},
    {id: 1, skill: 'js', pro: true},
    {id: 2, skill: 'css', pro: false}
]

module.exports = {
    getAll,
    getOne,
    create
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skills) {
    skills.id = Date.now() % 1000000
    skills.push(todo)
}