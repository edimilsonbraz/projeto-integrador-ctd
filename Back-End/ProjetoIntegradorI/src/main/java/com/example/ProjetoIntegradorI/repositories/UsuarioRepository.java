package com.example.ProjetoIntegradorI.repositories;

import com.example.ProjetoIntegradorI.models.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long> {
}
