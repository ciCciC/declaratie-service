package com.declaratie.declaratieapi.dao;

import com.declaratie.declaratieapi.model.Product;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import static org.mockito.Mockito.*;

import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.LinkedList;
import java.util.List;

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
        System.out.println("Create method test");

        Product dummyObject = spy(Product.class);
        dummyObject.setId(1L);
        dummyObject.setName("Asus");
        dummyObject.setType("Laptop");
        dummyObject.setPrice(2100);

        when(productRepository.create(dummyObject)).thenReturn(true);

        boolean actual = productRepository.create(dummyObject);
        boolean expected = true;

        assertEquals(expected, actual);

        this.printStatus(""+expected, ""+actual);
    }

    @Test
    public void read() {
        System.out.println("Read method test");

        Product dummyObject = new Product("Sony", "Mobile", 3000);
        dummyObject.setId(1);

        when(productRepository.read(anyLong())).thenReturn(dummyObject);

        Product act_prod = productRepository.read(2);
        String expected = "Sony";

        assertNotNull(act_prod);
        assertEquals(expected, act_prod.getName());

        this.printStatus(expected, act_prod.getName());
    }

    @Test
    public void update() {
        System.out.println("Update method test");

        Product dummyObject = spy(Product.class);
        dummyObject.setId(1L);
        dummyObject.setName("Asus");
        dummyObject.setType("Laptop");
        dummyObject.setPrice(2100);

        when(productRepository.read(anyLong())).thenReturn(dummyObject);

        Product toModify = productRepository.read(1L);
        toModify.setName("Apple");
        toModify.setPrice(12300);

        when(productRepository.update(toModify)).thenReturn(toModify);

        Product modified = productRepository.update(toModify);

        Product ex_prod = new Product(1L, "Apple", "Laptop", 12300);

        assertArrayEquals(new String[]{"Apple", "12300.0"},
                new String[]{dummyObject.getName(), ""+dummyObject.getPrice()});

        this.printStatus(ex_prod.toString(), dummyObject.toString());
    }

    @Test
    public void delete() {
        System.out.println("delete method test");

        when(productRepository.delete(anyLong())).thenReturn(true);

        boolean actual = productRepository.delete(1);
        boolean expected = true;

        assertEquals(expected, actual);

        this.printStatus(""+expected, ""+actual);
    }

    @Test
    public void getAll() {
        System.out.println("getAll method test");

        List<Product> productList = new LinkedList<>();

        for (int i = 0; i < 4; i++) {
            Product toAdd = new Product("Asus"+i, "Laptop", 3100+i);
            toAdd.setId(i);
            productList.add(toAdd);
        }

        when(productRepository.getAll()).thenReturn(productList);

        List<Product> target = productRepository.getAll();

        assertNotNull(target);

        int ex_size = 4;
        assertEquals(ex_size, target.size());

        Product act_prod = target.get(0);
        Product ex_prod = new Product("Asus0", "Laptop", 3100);
        ex_prod.setId(0);

        assertArrayEquals(new String[]{""+ex_prod.getId(), ex_prod.getName(), ex_prod.getType(), ""+ex_prod.getPrice()},
                new String[]{""+act_prod.getId(), act_prod.getName(), act_prod.getType(), ""+act_prod.getPrice()});

        this.printStatus(ex_prod.toString(), act_prod.toString());
        this.printStatus(""+ex_size, ""+target.size());

    }

    private void printStatus(String expected, String actual){
        System.out.println("Expected: " + expected + ",\t" + "Actual: " + actual);
    }
}
