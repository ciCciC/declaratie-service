package com.declaratie.declaratieapi.dao;

import com.declaratie.declaratieapi.model.Product;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ProductRepositoryTest {

    @Autowired
    private ProductRepository productRepository;
    private Product toCreate;

    @Test
    public void create() {

        toCreate = new Product();
        toCreate.setName("Sony");
        toCreate.setType("Mobile");
        toCreate.setPrice(3000);

        Product tmp = productRepository.create(toCreate);

        Product target = productRepository.read(tmp.getId());

        assertTrue("Test create process: ", toCreate.getId() == target.getId());
    }

//    @Test
//    public void read() {
//    }

    @Test
    public void update() {
        toCreate = new Product();
        toCreate.setName("Sony");
        toCreate.setType("Mobile");
        toCreate.setPrice(3000);

        Product tmp = productRepository.create(toCreate);

        Product toModify = productRepository.read(tmp.getId());
        toModify.setName("Apple");
        toModify.setPrice(12300);

        Product modified = productRepository.update(toModify);

        Product target = productRepository.read(modified.getId());

//        assertTrue("Test modify process: ", toModify.getId() == target.getId());
//        assertEquals("Test name: ", target.getName(), "Apple");
        assertArrayEquals(new String[]{target.getName(), ""+target.getPrice()},
                new String[]{"Apple", "12300.0"});
    }

//    @Test
//    public void delete() {
//    }
//
//    @Test
//    public void getAll() {
//    }
}
