const person = {
    name : 'Rahul',
    skills : ['js', 'python', 'java'],

    detailsWithoutBind: function(){
        this.skills.forEach(function(skill){
            console.log(`${this.name} knows ${skill}`)  //here this keyword is undefined 
        })
    },
    detailsWithBind : function(){
        this.skills.forEach(function(skill){
            console.log(`${this.name} knows ${skill}`) 
        }.bind(this))
    },

    // inside a method, if there is a function, inside that function, value of this keyword is the global object 
    //not the current object

    profile : function(){
        function someFunction(){
            console.log(this.name)
        }
        someFunction()
        return this
    }
}


person.detailsWithoutBind()
person.detailsWithBind()

console.log(person.profile())
