package com.tae.boardback.provider;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.nio.charset.StandardCharsets;
import java.security.Key;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.nio.charset.StandardCharsets;

@Component
public class JwtProvider {
    @Value("${secret-key}")

    private String secretkey = "secretkey";

    public String create(String email) {
        Date expriedDate = Date.from(Instant.now().plus(1, ChronoUnit.HOURS));
        Key key = Keys.hmacShaKeyFor(secretkey.getBytes(StandardCharsets.UTF_8));
        String jwt = Jwts.builder()
            .signWith(key, SignatureAlgorithm.ES256)
            .setSubject(email).setIssuedAt(new Date()).setExpiration(expriedDate)
            .compact();
        
        return jwt;

    }


    public String validate(String jwt) {
        Claims claims = null;
        Key key = Keys.hmacShaKeyFor(secretkey.getBytes(StandardCharsets.UTF_8));
        try {
            claims = Jwts.parserBuilder()
            .setSigningKey(key)
            .build()
            .parseClaimsJwt(jwt)
            .getBody();
        } catch (Exception exception) {
            exception.printStackTrace();
            return null;
        }
        return claims.getSubject();
    }
}
