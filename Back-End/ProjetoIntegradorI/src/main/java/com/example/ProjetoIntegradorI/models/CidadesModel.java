package com.example.ProjetoIntegradorI.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "Cidades")

public class CidadesModel {

    @Id
    @SequenceGenerator(name = "Cidades_sequence", sequenceName = "cidades_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_generator")

    private Long id;
    private String nomeCidade;
    private String Pais;

    public CidadesModel(String nomeCidade, String Pais) {
        this.nomeCidade = nomeCidade;
        this.Pais = Pais;
    }



}
