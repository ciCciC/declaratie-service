package com.declaratie.declaratieapi.util;

import com.declaratie.declaratieapi.model.Product;
import com.declaratie.declaratieapi.resourceManager.ResourceManager;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.cfg.Environment;
import org.hibernate.service.ServiceRegistry;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class HibernateUtil {
    private static SessionFactory sessionFactory;

    public static SessionFactory getSessionFactory() {

        Properties appProps = null;
        String appConfigPath = ResourceManager.getCurrentThreatResource("application.properties");
//        String appConfigPath = ResourceManager.getHarcodedGetPath();
        System.out.println("Appconfig: " + appConfigPath);

        if (sessionFactory == null) {
            try {
                appProps = new Properties();
                appProps.load(new FileInputStream(appConfigPath));

                Configuration configuration = new Configuration();
                configuration.setProperties(appProps);
                configuration.addAnnotatedClass(Product.class);
                ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
                        .applySettings(configuration.getProperties()).build();
                sessionFactory = configuration.buildSessionFactory(serviceRegistry);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return sessionFactory;
    }
}
