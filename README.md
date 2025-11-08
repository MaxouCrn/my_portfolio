# Portfolio - Maxime Caron

Portfolio personnel développé avec React et Vite.

## Technologies utilisées

### Frontend
- **React** 18.3.1
- **Tailwind CSS** 3.4.4
- **AOS** 2.3.4 (Animations au scroll)

### Build & Outils
- **Vite** 7.2.2
- **PostCSS** 8.5.1
- **Autoprefixer** 10.4.20

### Services
- **EmailJS** 4.4.1 (Envoi d'emails)

## Installation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm

### Étapes d'installation

1. **Cloner le projet**
```bash
git clone <url-du-repo>
cd W-PRO-390-LIL-4-1-portfoliotitre-maxime.caron
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer EmailJS (optionnel)**

Créer un fichier `.env` à la racine :
```
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```

4. **Lancer l'application en développement**
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

5. **Build de production**
```bash
npm run build
```

Les fichiers seront générés dans le dossier `dist/`

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée le build de production
- `npm run preview` - Prévisualise le build de production
