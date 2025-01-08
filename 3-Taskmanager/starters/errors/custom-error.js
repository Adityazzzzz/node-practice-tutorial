class CustomAPIError extends Error{
    constructor(message,statuscode){
        super(message)
        this.statuscode= statuscode
    }
}

const createCustomError = (msg,code)=> {
    return new CustomAPIError(msg,code)
}
  
module.exports = { createCustomError, CustomAPIError}