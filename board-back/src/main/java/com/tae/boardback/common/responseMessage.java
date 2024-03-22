package com.tae.boardback.common;

public interface responseMessage {
        //http status 200
        String SUCCESS = "Success";

        //http status 400
        String VALIDATION_FAILED = "Validation Failed";
        String DUPLICATE_EMAIL = "Duplicated Email";
        String DUPLICATE_NICKNAME = "Duplicated Nickname";
        String DUPLICATE_TEL_NUMBER = "Duplicated Telnumber";
        String NOT_EXISTED_USER = "User not exsited";
        String NOT_EXSITED_BOARD = "board not exsited";
    
        //401
        String SIGN_IN_FAIL = "Signin Failed";
        String AUTHORIZATION_FAIL = "Authorization Failed";
    
        //403
        String NO_PERMISSION = "No Permission";
    
        //500
        String DATABASE_ERROR = "DataBase Error";
}
