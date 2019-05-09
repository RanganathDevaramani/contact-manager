const person = {
    name : 'Rahul',
    skills : ['js', 'python', 'java'],



    detailsWithoutBind: function(){
        this.skills.forEach((skill) => {
            console.log(`${this.name} knows ${skill}`) 
        })
    },

// inside a method, if there is an arrow function, inside that function, value of this keyword is the current object

    profile : function(){
        const someFunction = () => {
            console.log(this.name)
        }
        someFunction()
        return this
    }
}


person.detailsWithoutBind()
console.log(person.profile())
