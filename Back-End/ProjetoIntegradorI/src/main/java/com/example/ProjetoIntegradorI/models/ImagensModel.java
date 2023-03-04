package com.example.ProjetoIntegradorI.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "Imagens")

public class ImagensModel {

    @Id
    @SequenceGenerator(name = "Imagens_sequence", sequenceName = "imagens_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_generator")

    private Long id;
    private String tituloImagem;
    private String urlImagem;

    public ImagensModel(String tituloImagem, String urlImagem) {
        this.tituloImagem = tituloImagem;
        this.urlImagem = urlImagem;
    }

}
