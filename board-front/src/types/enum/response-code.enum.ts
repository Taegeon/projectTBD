enum ResponseCode {
    //http status 200
    SUCCESS = "SU" ,

    //http status 400
    VALIDATION_FAILED = "VF" ,
    DUPLICATE_EMAIL = "DE" ,
    DUPLICATE_NICKNAME = "DN" ,
    DUPLICATE_TEL_NUMBER = "DT" ,
    NOT_EXISTED_USER = "NU" ,
    NOT_EXSITED_BOARD = "NB" ,

    //401
    SIGN_IN_FAIL = "SF" ,
    AUTHORIZATION_FAIL = "AF" ,

    //403
    NO_PERMISSION = "NP" ,

    //500
    DATABASE_ERROR = "DBE" ,
    
}

export default ResponseCode;