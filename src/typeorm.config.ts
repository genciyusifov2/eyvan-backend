import { DataSource, DataSourceOptions } from "typeorm";

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost', // VPS üzerinde localhost
  port: 5432, // PostgreSQL'in varsayılan portu
  username: 'admin', // PostgreSQL kullanıcısı
  password: 'Qwerty4876__', // PostgreSQL şifresi
  database: 'eyvandb', // Kullanacağınız veritabanı
  migrationsRun: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // Entity dosyalarının yolu
  synchronize: true, // Otomatik senkronizasyon
  ssl: false // SSL bağlantısı gerekiyorsa true yapabilirsiniz
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
