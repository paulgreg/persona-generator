const persona = document.querySelector('#persona').content
const list = document.querySelector('ul')


const keys = [
    { cl: 'name', fn: () => chance.name() },
    { cl: 'birthday', fn: () => chance.birthday({string: true, american: false}) },
    { cl: 'profession', fn: () => `${chance.profession()} at ${chance.company()}` },
    { cl: 'email', fn: () => `<${chance.email()}>` },
    { cl: 'phone', fn: () => `Tel: ${chance.phone({ country: 'fr' })}` },
    { cl: 'address', fn: () => chance.address() },
    { cl: 'city', fn: () => chance.city() },
    { cl: 'zip', fn: () => chance.zip() },
    { cl: 'country', fn: () => chance.country({ full: true }) },
]

list.style.display = 'none'
for(let i = 0; i < 10; i++) {
    const item = document.importNode(persona, true)
    keys.forEach(({ cl, fn }) => {
        item.querySelector(`.${cl}`).textContent = String(fn())
    })
    list.appendChild(item)
}
list.style.display = ''