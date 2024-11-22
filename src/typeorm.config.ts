import { DataSource, DataSourceOptions } from "typeorm";

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'dpg-csb83ue8ii6s7383sjpg-a.oregon-postgres.render.com',
  port: 5432,
  username: 'eyvan',
  password: 'xdkWg6tpWyjHbZM7lI09jQVVhZNju3tn',
  database: 'eyvan',
  migrationsTableName: "migration", // Düzgün yazım
  migrationsRun: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // Entity yolunun doğru olması için
  migrations: [__dirname + '/**/*.migration{.ts,.js}'], // Migration yolunun doğru olması için
  synchronize: false, // Üretim için false yapın
  ssl: {
    rejectUnauthorized: false // SSL parametresi gerekebilir
  }
};

export const dataSource = new DataSource(config);

// Veritabanı bağlantısını test etme
dataSource
  .initialize()
  .then(() => {
    console.log('Veritabanı bağlantısı başarılı');
  })
  .catch((error) => {
    console.error('Veritabanı bağlantısı hatası:', error);
  });
