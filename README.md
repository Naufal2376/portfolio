# 🚀 Personal Portfolio with Laravel & React

[![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org)
[![Filament](https://img.shields.io/badge/Filament-FFD700?style=for-the-badge&logo=filament&logoColor=black)](https://filamentphp.com)
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://php.net)

## 📖 Overview

This project combines Laravel's powerful backend with React's dynamic frontend capabilities. It features:
- 🎨 Modern landing page built with React
- 📊 Admin dashboard powered by Filament
- 🔐 Authentication system using Laravel Breeze
- 🛠 CRUD operations for portfolio management

## 🗂 Project Structure

```plaintext
/portfolio
├── app/
├── resources/
│   ├── js/        # React components & logic
│   └── views/     # Blade templates
├── routes/
├── database/
└── public/
```

## ⚙️ Prerequisites

- PHP ^8.1
- Node.js & NPM
- Composer
- MySQL/PostgreSQL
- Git

## 🚀 Installation Steps

### 1️⃣ Clone the Repository
```bash
git clone <your-repo-url>
cd portfolio
```

### 2️⃣ Install PHP Dependencies
```bash
composer install
```

### 3️⃣ Setup Environment File
```bash
cp .env.example .env
php artisan key:generate
```

### 4️⃣ Configure Database
```bash
# Update .env file with your database credentials
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### 5️⃣ Install Laravel Breeze with React
```bash
composer require laravel/breeze --dev
php artisan breeze:install react
```

### 6️⃣ Install Filament
```bash
composer require filament/filament
php artisan filament:install --panels

# Create admin user
php artisan make:filament-user
```

### 7️⃣ Run Migrations
```bash
php artisan migrate
```

### 8️⃣ Install Frontend Dependencies
```bash
npm install
```

### 9️⃣ Build Assets
```bash
npm run dev
```

### 🔟 Start the Development Server
```bash
# In terminal 1
php artisan serve

# In terminal 2
npm run dev
```

## 🌐 Access Points

- 🏠 Frontend: `http://localhost:8000`
- ⚙️ Admin Panel: `http://localhost:8000/admin`

## 🛠 Development

### Frontend (React)
- Located in `resources/js`
- Components in `resources/js/Components`
- Pages in `resources/js/Pages`
- Use `npm run dev` for hot-reload

### Backend (Laravel & Filament)
- CRUD resources in `app/Filament/Resources`
- Models in `app/Models`
- Controllers in `app/Http/Controllers`

## 🔒 Security

Remember to:
- Update `.env` with secure credentials
- Configure proper authentication
- Set up proper file permissions
- Enable HTTPS in production
