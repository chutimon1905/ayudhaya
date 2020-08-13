package com.example.Ayudhaya;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DbInitializer implements CommandLineRunner {
    private CountryRepository countryRepository;

    public DbInitializer(CountryRepository countryRepository) {
        this.countryRepository = countryRepository;
    }
    @Override
    public void run(String... args) throws Exception{
        Country c1 = new Country(1,"Germany","A Country where Thai kings live");
        Country c2 = new Country(2,"Thailand","A Country where Thai kings does not stay");
        this.countryRepository.deleteAll();
        List<Country> counties = Arrays.asList(c1,c2);
        this.countryRepository.saveAll(counties);
    }




}
