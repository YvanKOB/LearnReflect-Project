function validation(values){
let errors = {}

if(values.email === ""){
errors.email = "Name should not be empty"
}

if(values.password ===""){
errors.password = "password did not match";
}

}
export default validation;