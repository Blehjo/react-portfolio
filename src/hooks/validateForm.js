import {useState} from 'react'
import {omit} from 'lodash'

export default function ValidateForm(callback) {


    const[errors, setErrors] = useState({});

    const validate = (event, name, value) => {

        switch(name) {
            case 'contactname':
                if(value.length < 2){
                    setErrors({
                        ...errors,
                        contactname:'please enter a name'
                    })
                }else{
                    let newObj = omit(errors, "contactname");
                    setErrors(newObj);
                }
                break;
            case 'email':
                if(!new RegExp( /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z\.]{2,6})$/).test(value)
                ){
                    setErrors({
                        ...errors,
                        email:'Enter a valid email'
                    })
                }else{
                    let newObj = omit(errors, "email");
                    setErrors(newObj);
                }
                break;
            case 'message':
                if(value.length <=2){
                    setErrors({
                        ...errors,
                        message:'please enter a message'
                    })
                }else{
                    let newObj = omit(errors, "message");
                    setErrors(newObj)
                }
                break;
            default:
                break;
        }
    }

    const handleChange = (event)=> {
        event.persist();
        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);
  
    }

    return{
        errors,
        handleChange,
    }
}