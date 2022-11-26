package com.ruet.sac.repository;

import com.ruet.sac.entity.Alumnus;
import com.ruet.sac.entity.Brunch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AlumnusRepository extends JpaRepository<Alumnus, Integer> {

    @Query("Select al.status from Alumnus al where al.id=:studentId")
    Integer findStatusByStudentId(Integer studentId);
}