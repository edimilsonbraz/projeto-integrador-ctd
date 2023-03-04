package com.example.ProjetoIntegradorI.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.mapping.List;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor

@Entity
@Table(name = "Produtos")

public class ProdutosModel {

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "Produtos_Categoria",
            joinColumns = { @JoinColumn(name = "produtos_id") },
            inverseJoinColumns = { @JoinColumn(name = "categoria_id") }
    )
    Set<CategoriaModel> categoriaModelSet = new HashSet<>();

    @Id
    @SequenceGenerator(name = "Produtos_sequence", sequenceName = "produtos_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence_generator")

    private Long id;
    private String nomeProduto;
    private String descricaoProduto;
    private List categorias;

    public ProdutosModel(String nomeProduto, String descricaoProduto) {
        this.nomeProduto = nomeProduto;
        this.descricaoProduto = descricaoProduto;
    }

}
