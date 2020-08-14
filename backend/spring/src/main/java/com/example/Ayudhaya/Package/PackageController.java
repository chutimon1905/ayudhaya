package com.example.Ayudhaya.Package;

import com.example.Ayudhaya.Country.Country;
import com.example.Ayudhaya.Country.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class PackageController {
    @Autowired
    private PackageRepository packageRepository;

    @GetMapping("/api/v1/package")
    @CrossOrigin
    public List<Package> GetAllPackage(){
        return packageRepository.findAll();
    }

    @GetMapping("/api/v1/package/{countryId}")
    @CrossOrigin
    public List<Package> GetAllPackageByCountry(@PathVariable String countryId){
        List<Package> packages = packageRepository.findByCountryListIn(countryId);
        return packages;
    }
}
