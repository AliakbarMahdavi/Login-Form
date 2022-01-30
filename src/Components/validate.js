export const validate = (data, type) => {

    const errors = {};



    if (!data.Email) {
       errors.Email = "Email Required"; 
    }
    else if (!/\S+@\S+\.\S+/.test(data.Email)) {
        errors.Email = "Email address is invalid";
    }else{
        delete errors.Email;
    }


    if (!data.Password) {
        errors.Password = "Password Required";
    }
    else if (data.Password.length <= 6) {
        errors.Password = "Password is too short"
    }else{
        delete errors.Password;
    }


    if(type === "signup") {
        if (!data.Name.trim()) {
            errors.Name = "Name Required";
        }else{
            delete errors.Name;
        }
    
        if (!data.ConfirmPassword) {
            errors.ConfirmPassword = "Password Required";
        }
        else if (data.ConfirmPassword !== data.Password){
            errors.ConfirmPassword = "Password is not match"
        }else{
            delete errors.ConfirmPassword; 
        }
    
    
        if (!data.isAccepted) {
            errors.isAccepted = "Accept our regulations";
        }else{
            delete errors.isAccepted;
        }
    
    }
    
   
    return errors
}