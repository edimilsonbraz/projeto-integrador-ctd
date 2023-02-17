package com.example.ProjetoIntegradorI.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "Usuario")

public class UsuarioModel {

    @Id
    @SequenceGenerator(name = "Usuario_sequence", sequenceName = "usuario_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_generator")

    private Long id;
    private String nome;
    private String sobrenome;
    private String email;
    private String senha;

    public UsuarioModel(String nome, String sobrenome, String email, String senha) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.senha = senha;
    }
}
