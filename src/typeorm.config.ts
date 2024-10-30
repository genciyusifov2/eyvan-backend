import { DataSource, DataSourceOptions } from "typeorm";
// 
 const config:DataSourceOptions={
    type: 'postgres', // Veritabanı türü
   host: 'dpg-csb83ue8ii6s7383sjpg-a.oregon-postgres.render.com', // Veritabanı host'u
   port: 5432, // Veritabanı portu
   username: 'eyvan', // Veritabanı kullanıcı adı
   password: 'xdkWg6tpWyjHbZM7lI09jQVVhZNju3tn', // Veritabanı şifresi
   database: 'eyvan', // Kullanmak istediğiniz veritabanı adı
   migrationsTableName:"migiration",
   migrationsRun:true,
   entities: [ '/**/*.entity{.js}'], // Entity dosyalarının yolu
  //  migrations:['/**/*.migiration{.js}'],
   synchronize: true, // Geliştirme aşamasında otomatik senkronizasyon
   ssl:true
  }
  export const dataSource=new DataSource(config)
