package com.tradindemboiz.spring.services;

import com.tradindemboiz.spring.dto.AuctionCreateDto;
import com.tradindemboiz.spring.dtos.SocketDto;
import com.tradindemboiz.spring.entities.Auction;
import com.tradindemboiz.spring.entities.Image;
import com.tradindemboiz.spring.entities.User;
import com.tradindemboiz.spring.repositories.AuctionRepo;
import com.tradindemboiz.spring.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.net.Socket;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class AuctionService {

    @Autowired
    AuctionRepo auctionRepo;

    @Autowired
    UserRepo userRepo;

    @Autowired
    SocketService socketService;

    @Autowired
    ImageService imageService;

    public List<Auction> getAllAuctions(String searchString) {
        if (searchString != null && !searchString.isEmpty()) {

            var searchArray = Arrays.stream(searchString.split(" "))
                    .filter(s -> !s.isEmpty())
                    .collect(Collectors.toList());
            List<Auction> results = new ArrayList<>();
            for (var searchQuery : searchArray) {
                var auctions = auctionRepo.findAllAuctionBySearchQuery(searchQuery);
                if (!auctions.isEmpty()) {
                    auctions.stream()
                            .filter(auction -> auction != null && !results.contains(auction))
                            .forEach(results::add);
                }
            }
            // this if made bugs in frontend rendering
            //if (results.isEmpty()) {
            //   throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Found no results on query: " + searchString);
            // }
            return results;
        }

        return auctionRepo.findByOrderByTimestampDesc();
    }

    public List<Auction> getAllAuctionsByUserId(long userId) {
        if (userRepo.existsById(userId)) {
            return auctionRepo.findAllByUserId(userId);
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "An user with that id does not exist.");

    }

    public Auction getAuctionById(long id) {
        return auctionRepo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "The auction with that id does not exist."));
    }

    public Auction addAuction(AuctionCreateDto auctionToAdd) {

        User user = userRepo.findById(auctionToAdd.getUser()).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "couldn't find user"));

        Auction auction = new Auction(auctionToAdd, user);
        Auction newAuction = auctionRepo.save(auction);

        HashSet<Image> images = new HashSet<>();

        for (var imagePath : auctionToAdd.getImages()) {
            images.add(imageService.addImage(imagePath, newAuction.getAuction_id()));
        }

        newAuction.setImages(images);
        newAuction = auctionRepo.save(newAuction);

        socketService.prepareSendToAll(new SocketDto("newAuction", newAuction));

        return newAuction;
    }

    public void updateAuction(Auction auction, long id) {
        if (!auctionRepo.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "The auction with that id does not exist.");
        }
        auction.setAuction_id(id);
        auctionRepo.save(auction);
    }

    public void deleteAuction(long id) {
        if (!auctionRepo.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "The auction with that id does not exist.");
        }
        auctionRepo.deleteById(id);
    }
}
