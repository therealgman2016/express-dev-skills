const skills = [
    {id: 0, skill: 'python', pro: true},
    {id: 1, skill: 'js', pro: true},
    {id: 2, skill: 'css', pro: false}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skills.push(skill)
}

function deleteOne(id){
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}