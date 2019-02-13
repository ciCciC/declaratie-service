package com.declaratie.declaratieapi.dao;

import com.declaratie.declaratieapi.interfaces.IRest;
import com.declaratie.declaratieapi.model.Product;
import com.declaratie.declaratieapi.util.HibernateUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;

import java.util.LinkedList;
import java.util.List;

@Repository
public class ProductRepository implements IRest<Product>{

    @Override
    public boolean create(Product product) {
        Transaction transaction = null;

        boolean status = false;

        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            // start a transaction
            transaction = session.beginTransaction();

            if(session.contains(product))
                return false;

            // save the object
            session.save(product);

            // commit transaction
            transaction.commit();

            status = true;

        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }

        return status;
    }

    @Override
    public Product read(long id) {
        Product toReturn = null;

        StringBuilder queryString = new StringBuilder("from Product as p where p.id=:id");

        try (Session session = HibernateUtil.getSessionFactory().openSession()) {

            toReturn = session.createQuery(queryString.toString(), Product.class)
                    .setParameter("id", id)
                    .getSingleResult();

        } catch (Exception e) {
            e.printStackTrace();
        }

        return toReturn;
    }

    @Override
    public Product update(Product product) {
        Transaction transaction = null;

        Product status = null;

        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            // start a transaction
            transaction = session.beginTransaction();

            // update the object
            session.saveOrUpdate(product);

            // commit transaction
            transaction.commit();

            status = product;

        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }
        return status;
    }

    @Override
    public boolean delete(long id) {
        Transaction transaction = null;

        boolean status = false;

        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            // start a transaction
            transaction = session.beginTransaction();

//            Product tmp = this.read(id);
//
//            if(tmp == null){
//                throw new RuntimeException("PrimaryKey ["+id+"] doesn't exists");
//            }

            // delete the object
            session.delete(this.read(id));

            // commit transaction
            transaction.commit();

            status = true;

        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }
        return status;
    }

    @Override
    public boolean delete(Product product) {

        Transaction transaction = null;

        boolean status = false;

        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            // start a transaction
            transaction = session.beginTransaction();

            // delete the object
            session.delete(product);

            // commit transaction
            transaction.commit();

            status = true;

        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
            e.printStackTrace();
        }
        return status;
    }

    public int afterDelete(long id){
        this.delete(id);
        return this.getSize();
    }

    public List<Product> addBatch(List<Product> products){

        List<Product> addedOnces = new LinkedList<>();

        for (Product p : products) {
            boolean status = this.create(p);
            if(status){
                addedOnces.add(p);
            }
        }
        return addedOnces;
    }

    public int getSize(){
        return getAll().size();
    }

    @Override
    public List<Product> getAll() {
        try (Session session = HibernateUtil.getSessionFactory().openSession()) {
            StringBuilder queryString = new StringBuilder("from Product");
            return session.createQuery(queryString.toString(), Product.class).list();
        }
    }
}
