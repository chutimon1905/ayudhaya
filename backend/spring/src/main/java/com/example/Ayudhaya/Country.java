package com.example.Ayudhaya;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Country {
    @Id
    private int id;
    private String name;
    private String description;

    public Country(int id, String name, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}
