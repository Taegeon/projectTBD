package com.tae.boardback.provider;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtProvider {
    private String secretkey = "secretkey"

    public String create(String email) {
        Date expriedDate = Date.from(Instant.now().plus(1, ChronoUnit.HOURS));
        String jwt = Jwts.builder()
            .signWith(SignatureAlgorithm.ES256, secretkey)
            .setSubject(email).setIssuedAt(new Date()).setExpiration(expriedDate)
            .compact();
        
        return jwt;

    }


    public String validate(String jwt) {
        Claims claims = null;
        try {
            claims = Jwts.parser().setSigningKey(secretkey)
            .parseClaimsJwt(jwt).getBody();
        } catch (Exception exception) {
            exception.printStackTrace();
            return null;
        }
        return claims.getSubject();
    }
}
