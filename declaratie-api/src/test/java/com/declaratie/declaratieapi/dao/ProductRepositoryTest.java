package com.declaratie.declaratieapi.dao;

import com.declaratie.declaratieapi.model.Product;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import static org.mockito.Mockito.*;

import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ProductRepositoryTest {

    @Mock
    private ProductRepository productRepository;

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void create() {

        Product dummyObject = mock(Product.class);

        // define return value for method getUniqueId()
        when(dummyObject.getId()).thenReturn(43L);

        // use mock in test....
        assertEquals(dummyObject.getId(), 43L);

//        when(productRepository.create(any(Product.class))).thenReturn(dummyObject);
//
//        Product tmp = productRepository.create(dummyObject);
//
//        Product target = productRepository.read(tmp.getId());
//
//        assertTrue("Test create process: ", toCreate.getId() == target.getId());
    }

    @Test
    public void read() {
        Product dummyObject = new Product("Sony", "Mobile", 3000);
        dummyObject.setId(1);

        when(productRepository.read(anyLong())).thenReturn(dummyObject);

        Product target = productRepository.read(2);

        assertNotNull(target);
        assertEquals("Sony", target.getName());
    }

    @Test
    public void update() {
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
