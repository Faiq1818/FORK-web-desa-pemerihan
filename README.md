# Setup Development Website Desa Pemerihan

> Ini adalah setup resmi untuk menginstall dan menjalankan development environtment website Desa Pemerihan.
> Readme dan setup environment ini ditulis dan dirakit 90% tanpa AI oleh Faiq, jika ada masalah sebaiknya tanyakan langsung ke ts

## Installation

1. nodejs24
2. docker/podman
3. docker compose/podman compose

### Setup
> Setup ini harus dijalankan sekali saja saat belum ada development environment atau saat setelah mereset container dan volume
### 1. Setup postgres:
- Buat db local menggunakan compose
- Jika menggunakan podman ubah command docker menjadi podman (example: docker compose up -d menjadi podman compose up -d)
###### Buat container postgres
```sh
docker compose up -d
```
###### Lalu jalankan migration prisma
> jangan lupa install dependensi di package.json (run npm install)
```sh
npx prisma db push
```

#### Usefull Commands:
- Beberapa command yang mungkin akan berguna
###### Reset container dan volume db
```sh
docker compose down --rmi
```
###### Cek status container
```sh
docker compose ps
```
###### Masuk ke psql di container postgres
```sh
podman exec -it web-desa-pemerihan_db_1 psql -U postgres
```

