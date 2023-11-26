$nameInput = document.forms.person

const rowFormDataFOrmLs = localStorage.getItem($nameInput.name)

const formDataFOrmL =rowFormDataFOrmLs ? JSON.parse(rowFormDataFOrmLs) : undefined

if(formDataFOrmL){

    Object.keys(formDataFOrmL).forEach((key)=>{

$nameInput[key].value = formDataFOrmL[key]

    } )
}

document.forms.person.addEventListener('input', (e)=>{

const formDataObj = Object.fromEntries(new FormData($nameInput))
console.log({formDataObj})
    
localStorage.setItem($nameInput.name, JSON.stringify(formDataObj) )

})