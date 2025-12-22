# Setup Development Website Desa Pemerihan

> Ini adalah setup resmi untuk menginstall dan menjalankan development environtment website Desa Pemerihan.

## Dependency

1. nodejs24
2. docker/podman
3. docker compose/podman compose

### Setup

> Pastikan .env sudah berada di root project.

- Buat db local menggunakan compose
- Jika menggunakan podman ubah command docker menjadi podman (example: docker compose up -d menjadi podman compose up -d)

## Diharuskan melakukan formatting "npm run format" setiap kali ingin melakukan pull request.

### 1. Buat container postgres

```sh
docker compose up -d
```

### 2. Install dependensi package.json

```sh
npm install
```

### 3. Jalankan migration prisma

```sh
npx prisma db push
```

### 4. Buat prisma client artifacts (typescript things, you don't need to think about it)

```sh
npx prisma generate
```

### 5. Runing local development

```sh
npm run dev
```

## Usefull Commands:

> Beberapa command yang mungkin akan berguna

### 1. Reset container dan volume db

```sh
docker compose down --rmi
```

### 2. Cek status container

```sh
docker compose ps
```

### 3. Masuk ke psql di container postgres

```sh
podman exec -it web-desa-pemerihan_db_1 psql -U postgres
```

### 4. Lihat isi db secara interaktif

```sh
npm run studio
```
