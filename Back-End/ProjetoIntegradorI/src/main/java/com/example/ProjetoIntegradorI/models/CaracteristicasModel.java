package com.example.ProjetoIntegradorI.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "Caracteristicas")

public class CaracteristicasModel {
    @Id
    @SequenceGenerator(name = "Caracteristicas_sequence", sequenceName = "caracteristicas_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_generator")

    private Long id;
    private String nomeCaracteristica;
    private String iconeCaracteristica;

    public CaracteristicasModel(String nomeCaracteristica, String iconeCaracteristica) {
        this.nomeCaracteristica = nomeCaracteristica;
        this.iconeCaracteristica = iconeCaracteristica;
    }
}
