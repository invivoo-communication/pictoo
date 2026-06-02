# Pictoo — The Icebreaker

Petit site web **statique** (sans backend) développé par INVIVOO. C'est un
« ice-breaker » : au clic sur **Start**, une série de pictogrammes défile de
plus en plus lentement, accompagnée de bruitages, puis s'arrête sur une
question aléatoire (« Ton livre préféré ? », « Ta destination de rêve ? »…)
pour lancer la discussion. Un bloc d'appel à l'action (« Join us ») apparaît
ensuite.

## Aperçu technique

Aucune dépendance, aucun build, aucun serveur applicatif : ce sont uniquement
des fichiers servis tels quels par n'importe quel serveur web statique.

| Techno         | Usage                                   |
| -------------- | --------------------------------------- |
| HTML5          | Structure (`index.html`)                |
| CSS3           | Styles et animations (`style.css`)      |
| JavaScript ES6 | Logique du tirage aléatoire (`script.js`) |

## Structure du projet

```
pictoo/
├── index.html        # Page unique de l'application
├── style.css         # Styles + animations
├── script.js         # Logique : liste des questions, tirage, sons
├── CNAME             # Domaine personnalisé GitHub Pages (pictoo.invivoo.com)
├── fonts/
│   └── Inkarus-Regular.otf
├── img/              # Pictogrammes (.png) + logos (.svg)
│   ├── question_mark.png
│   ├── books.png, chocolate.png, drink.png, ...
│   ├── logo-invivoo-white-gradient.svg
│   └── mini-logo-invivoo.svg
└── sounds/           # Bruitages
    ├── flop.mp3      # son de défilement
    └── victory.mp3   # son de fin
```

> Toutes les questions/pictogrammes sont déclarés dans le tableau `items` en
> haut de `script.js`. Pour ajouter une question, ajoute une entrée
> `{ img, title, sentence }` et dépose l'image correspondante dans `img/`.

## Lancer en local

Le site doit être servi via HTTP (l'ouverture directe du fichier `index.html`
peut bloquer le chargement des sons/images selon le navigateur). Choisis l'une
de ces méthodes :

```bash
# Python 3 (déjà installé sur la plupart des machines)
python3 -m http.server 8000

# ou Node.js
npx serve .

# ou PHP
php -S localhost:8000
```

Puis ouvre <http://localhost:8000>.

## Déployer ailleurs

Comme c'est un site 100 % statique, il se déploie partout :

### GitHub Pages (configuration actuelle)
1. Pousser le contenu sur une branche du dépôt.
2. Dans **Settings → Pages**, choisir la branche à servir (racine `/`).
3. Le fichier `CNAME` configure le domaine `pictoo.invivoo.com`.
   Supprime-le ou modifie-le si tu utilises un autre domaine.

### Autres hébergeurs statiques
Glisser-déposer le dossier complet, ou pointer le hébergeur vers le dépôt :
- **Netlify** : déposer le dossier, ou « New site from Git ». Pas de build,
  répertoire de publication = racine.
- **Vercel** : importer le dépôt, framework = « Other », output = racine.
- **Cloudflare Pages**, **Surge**, **Firebase Hosting**, **AWS S3 + CloudFront**…
- **Serveur classique** (Nginx/Apache) : copier les fichiers dans le
  répertoire web (`/var/www/html` par ex.).

## Reproduire de zéro

Pour recréer l'app ailleurs, il suffit de copier les 5 éléments :
`index.html`, `style.css`, `script.js`, et les dossiers `img/`, `sounds/`,
`fonts/`. Aucune installation de dépendances n'est nécessaire.
