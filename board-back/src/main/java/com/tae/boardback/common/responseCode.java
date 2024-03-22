package com.tae.boardback.common;

public interface responseCode {
    //http status 200
    String SUCCESS = "SU";



    //http status 400
    String VALIDATION_FAILED = "VF";
    String DUPLICATE_EMAIL = "DE";
    String DUPLICATE_NICKNAME = "DN";
    String DUPLICATE_TEL_NUMBER = "DT";
    String NOT_EXISTED_USER = "NU";
    String NOT_EXSITED_BOARD = "NB";

    //401
    String SIGN_IN_FAIL = "SF";
    String AUTHORIZATION_FAIL = "AF";

    //403
    String NO_PERMISSION = "NP";

    //500
    String DATABASE_ERROR = "DBE";
    



}
