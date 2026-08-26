# 🌐 Portfolio Professionnel — Kodjo Tsagli

Site vitrine moderne, ultra-rapide, bilingue (Français 🇫🇷 / English 🇬🇧), responsive et optimisé pour le référencement international (SEO).

Ce projet a été conçu pour présenter le profil de **Kodjo Tsagli**, **Coordinateur de Projets Internationaux & Interprète Multilingue**, auprès des recruteurs, organisations internationales, institutions publiques, ONG, partenaires et clients.

---

## 📁 1. Structure du Projet

```text
CV/
│
├── index.html              # Structure HTML5 sémantique, balises Open Graph et accessibilité
├── style.css               # Design moderne, thèmes clair/sombre, responsive sur tous écrans
├── script.js               # Moteur de traduction dynamique FR/EN, thème et interactions
├── config.js               # ⚙️ Fichier unique pour modifier facilement toutes vos données
├── robots.txt              # Configuration pour l'indexation par les moteurs de recherche
├── sitemap.xml             # Plan du site pour le référencement Google
├── README.md               # Guide d'utilisation et de déploiement
│
├── assets/
│   ├── images/             # Photos et illustrations
│   │   ├── profile-placeholder.svg
│   │   ├── project-oafic.svg
│   │   ├── project-emi.svg
│   │   ├── project-cotonou.svg
│   │   ├── project-pilot.svg
│   │   └── project-fec.svg
│   │
│   ├── documents/          # Vos CVs téléchargeables
│   │   ├── CV_Kodjo_Tsagli_FR.docx
│   │   ├── CV_Kodjo_Tsagli_EN.docx
│   │   └── (Déposez ici vos versions PDF)
│   │
│   └── icons/              # Icônes et ressources graphiques
│
└── favicon/
    └── favicon.svg         # Monogramme officiel KT en haute résolution
```

---

## 🚀 2. Comment tester le site en local sur votre ordinateur

1. **Option simple** : Faites un double-clic sur le fichier `index.html`. Il s'ouvrira immédiatement dans votre navigateur par défaut (Chrome, Edge, Firefox, Safari).
2. **Option développeur (VS Code)** : Si vous utilisez Visual Studio Code, installez l'extension **Live Server**, faites un clic droit sur `index.html` et choisissez **Open with Live Server**.

---

## ⚙️ 3. Personnalisation Facile via `config.js`

**Vous n'avez pas besoin de modifier le code HTML ou CSS pour mettre à jour vos informations !**

Ouvrez simplement le fichier `config.js` avec n'importe quel éditeur de texte (Bloc-notes, VS Code, etc.). Vous y trouverez :

* Vos coordonnées (Email, Téléphone, LinkedIn, Localisation) ;
* Vos textes en français (`fr`) et en anglais (`en`) ;
* Vos services professionnels et leurs détails ;
* Vos expériences professionnelles ;
* Vos projets réalisés ;
* Vos compétences classées par catégories ;
* Vos formations, diplômes et certifications.

Enregistrez le fichier `config.js` : vos modifications s'afficheront instantanément sur le site !

---

## 📸 4. Ajouter votre Photo de Profil et vos CVs PDF

### 1. Photo de profil
1. Déposez votre photo professionnelle au format JPG dans le dossier `assets/images/` en la nommant `profile.jpg`.
2. Dans `config.js`, à la ligne `avatar`, remplacez :
   ```javascript
   avatar: "assets/images/profile-placeholder.svg",
   ```
   par :
   ```javascript
   avatar: "assets/images/profile.jpg",
   ```

### 2. CV au format PDF
1. Exportez vos CV au format PDF sous les noms :
   - `CV_Kodjo_Tsagli_FR.pdf`
   - `CV_Kodjo_Tsagli_EN.pdf`
2. Placez-les dans le dossier `assets/documents/`.
3. Dans `config.js`, vérifiez les chemins de téléchargement :
   ```javascript
   cvDocuments: {
     fr: "assets/documents/CV_Kodjo_Tsagli_FR.pdf",
     en: "assets/documents/CV_Kodjo_Tsagli_EN.pdf"
   }
   ```

---

## 🌐 5. Guide de Publication Gratuite sur GitHub Pages (Étape par étape)

Vous pouvez héberger ce site **gratuitement et à vie** sur **GitHub Pages**.

### Étape 1 : Créer un compte GitHub (si vous n'en avez pas)
Rendez-vous sur [github.com](https://github.com/) et créez un compte gratuit.

### Étape 2 : Créer un nouveau Repository
1. Cliquez sur le bouton vert **New** (ou le `+` en haut à droite > **New repository**).
2. Nommez votre repository (par exemple : `portfolio` ou `kodjo-tsagli.github.io`).
3. Choisissez **Public**.
4. Cliquez sur **Create repository**.

### Étape 3 : Téléverser vos fichiers
1. Sur la page de votre repository, cliquez sur **Uploading an existing file**.
2. Glissez-déposez l'ensemble des fichiers et dossiers de votre dossier `CV/` :
   - `index.html`
   - `style.css`
   - `script.js`
   - `config.js`
   - `robots.txt`
   - `sitemap.xml`
   - Le dossier `assets/` (avec ses sous-dossiers `images/`, `documents/`, `icons/`)
   - Le dossier `favicon/`
3. En bas de la page, cliquez sur **Commit changes**.

### Étape 4 : Activer GitHub Pages
1. Dans votre repository, cliquez sur l'onglet **Settings** (Paramètres).
2. Dans le menu de gauche, cliquez sur **Pages** (sous la section *Code and automation*).
3. Sous **Branch**, sélectionnez la branche `main` (ou `master`), laissez le dossier `/ (root)` et cliquez sur **Save**.
4. Patientez 1 à 2 minutes. Votre site sera automatiquement en ligne à l'adresse :
   `https://votre-pseudo.github.io/portfolio/` (ou `https://votre-pseudo.github.io/`).

---

## 🔗 6. Associer un Nom de Domaine Personnalisé (Optionnel)

Si vous achetez un nom de domaine (par exemple `www.kodjo-tsagli.com` sur Namecheap, Hostinger ou OVH) :
1. Dans les paramètres de votre repository GitHub (**Settings > Pages**) ;
2. Dans la section **Custom domain**, saisissez votre domaine (ex: `www.kodjo-tsagli.com`) et cliquez sur **Save** ;
3. Cochez l'option **Enforce HTTPS** pour sécuriser le site avec un certificat SSL gratuit ;
4. Chez votre registraire de domaine, créez un enregistrement DNS `CNAME` pointant vers `votre-pseudo.github.io`.

---

## 🔒 7. Sécurité & Performance

* **Sécurité** : Aucun mot de passe, token ou clé API n'est requis ni exposé dans le code.
* **Formulaire de contact** : Conçu pour ouvrir directement le client de messagerie sécurisé de l'utilisateur avec un message pré-rempli (`mailto:`), ou prêt pour une intégration simple avec des services tiers comme [Formspree](https://formspree.io/) si souhaité.
* **Lighthouse Score** : Performance, Accessibilité, Bonnes Pratiques et SEO optimisés à 100% grâce à une architecture HTML5/CSS3/JS vanilla ultra-légère sans framework lourd.

---

© 2026 **Kodjo Tsagli**. Tous droits réservés.
