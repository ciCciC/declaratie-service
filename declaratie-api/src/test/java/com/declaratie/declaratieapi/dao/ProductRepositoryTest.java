package com.declaratie.declaratieapi.dao;

import com.declaratie.declaratieapi.model.Product;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import static org.mockito.Mockito.*;

import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.mockito.stubbing.OngoingStubbing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(MockitoJUnitRunner.class)
public class ProductRepositoryTest {

    @Mock
    private ProductRepository productRepository;

    @Before
    public void setUp() throws Exception {
        System.out.println("Before");
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void create() {
        System.out.println("Create");

        Product dummyObject = spy(Product.class);
        dummyObject.setId(1L);
        dummyObject.setName("Asus");
        dummyObject.setType("Laptop");
        dummyObject.setPrice(2100);

        when(productRepository.create(dummyObject)).thenReturn(true);

        boolean result = productRepository.create(dummyObject);

        assertEquals(true, result);
    }

    @Test
    public void read() {
        System.out.println("Read");

        Product dummyObject = new Product("Sony", "Mobile", 3000);
        dummyObject.setId(1);

        when(productRepository.read(anyLong())).thenReturn(dummyObject);

        Product target = productRepository.read(2);

        assertNotNull(target);
        assertEquals("Sony", target.getName());
    }

    @Test
    public void update() {
        System.out.println("Update");

//        toCreate = new Product();
//        toCreate.setName("Sony");
//        toCreate.setType("Mobile");
//        toCreate.setPrice(3000);
//
//        Product tmp = productRepository.create(toCreate);
//
//        Product toModify = productRepository.read(tmp.getId());
//        toModify.setName("Apple");
//        toModify.setPrice(12300);
//
//        Product modified = productRepository.update(toModify);
//
//        Product target = productRepository.read(modified.getId());
//
//        assertArrayEquals(new String[]{target.getName(), ""+target.getPrice()},
//                new String[]{"Apple", "12300.0"});
    }

//    @Test
//    public void delete() {
//    }
//
//    @Test
//    public void getAll() {
//    }
}
