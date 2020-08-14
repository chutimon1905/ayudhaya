package com.example.Ayudhaya.Country;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class CountryController {

    @Autowired
    private CountryRepository countryRepository;

    @GetMapping("/api/v1/country")
    @CrossOrigin
    public List<Country> GetAllCountries(){
        return countryRepository.findAll();
    }
}
