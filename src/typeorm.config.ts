import { DataSource, DataSourceOptions } from "typeorm";

 const config:DataSourceOptions={
    type: 'postgres', // Veritabanı türü
   host: 'localhost', // Veritabanı host'u
   port: 5432, // Veritabanı portu
   username: 'yusifovgenci', // Veritabanı kullanıcı adı
   password: 'west5566', // Veritabanı şifresi
   database: 'database-eyvan2', // Kullanmak istediğiniz veritabanı adı
   migrationsTableName:"migiration",
   migrationsRun:true,
   entities: [ '/**/*.entity{.js}'], // Entity dosyalarının yolu
  //  migrations:['/**/*.migiration{.js}'],
   synchronize: true, // Geliştirme aşamasında otomatik senkronizasyon
   ssl:false
  }
  export const dataSource=new DataSource(config)
