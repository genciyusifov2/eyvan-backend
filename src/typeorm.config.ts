import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  host: "145.223.83.25", // Eğer VPS'ten bağlanıyorsanız localhost kullanın.
  port: 5432, // Varsayılan PostgreSQL portu
  username: "admin", // PostgreSQL kullanıcı adı
  password: "Qwerty4876__", // PostgreSQL şifresi
  database: "eyvandb", // Kullanmak istediğiniz veritabanı
  synchronize: true, // Eğer geliştirme aşamasındaysanız veritabanı otomatik senkronizasyon yapılır
  logging: true, // SQL sorgularını görmek için logging'i açabilirsiniz
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  migrationsRun: true,
  ssl:false,
    extra: {
    connectionTimeoutMillis: 5000, // Timeout for establishing a connection
  }
});

dataSource
  .initialize()
  .then(() => {
    console.log("Veritabanı bağlantısı başarılı");
  })
  .catch((error) => {
    console.error("Veritabanı bağlantısı hatası:", error);
  });



