package com.tradindemboiz.spring.services;

import com.tradindemboiz.spring.entities.Auction;
import com.tradindemboiz.spring.entities.Image;
import com.tradindemboiz.spring.repositories.ImageRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService {

    @Autowired
    ImageRepo imageRepo;

    public Image addImage(String imagePath, long id ) {
        var newImage = new Image(imagePath, id);
        return imageRepo.save(newImage);
    }
}
