import React, { Component } from "react";
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Input from '../../../components/UI/Input/Input';
class ContactData extends Component {
    
    state = {
        orderForm:{
            name:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Name',
                    value:''
                }
            },
            stree:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Street',
                    value:''
                }
            },
            country:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Country',
                    value:''
                }
            },
            zipCode:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Zip Code',
                    value:''
                }
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your Email',
                    value:''
                }
            },
            deliveryMethod:{
                elementType:'select',
                elementConfig:{
                    options:[
                        {value:'fastes', displayValue:'Fastest'},
                        {value:'cheapest', displayValue:'Cheapest'},
                    ]
                }
            }
        },
        loading:false

    }
 
    render(){
        return(
            <div className={classes.ContactData}>
                <h4> Enter your Contact Data </h4>
                <form>
                    <Input elementType='...' elementConfig='...' value='...' />
                    <Input inputtype="input" type="text" name="street" placeholder="Street" />
                    <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
                    <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="success"> ORDER </Button>
                </form>
            </div>
        )
    }
}


export default ContactData;