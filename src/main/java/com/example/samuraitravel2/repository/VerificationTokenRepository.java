package com.example.samuraitravel2.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.samuraitravel2.entity.VerificationToken;


public interface VerificationTokenRepository extends JpaRepository< VerificationToken, Integer> {
    public VerificationToken findByToken(String token);
}

