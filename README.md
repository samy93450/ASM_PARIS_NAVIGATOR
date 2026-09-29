# ASM Paris Navigator

Application de navigation parisienne au style **ASM Technologies**, destinée à la consultation d’itinéraires Métro / RER / Bus, avec traduction et impression.

## Fonctionnalités

- Interface bleu électrique ASM Technologies
- Navigation Métro / RER / Bus
- Chargement des lignes et arrêts de bus via les données Île-de-France Mobilités
- Recherche et sélection de stations
- Traduction de l’interface
- Impression d’un itinéraire
- Application de bureau Electron sécurisée (`contextIsolation`, sandbox, Node désactivé dans le renderer)

## Prérequis

- Windows 10/11 recommandé
- Node.js 20 ou supérieur
- npm

## Lancer en développement

```bash
npm install
npm start
```

## Vérifier le projet

```bash
npm run check
```

## Créer l’application Windows

```bash
npm run dist:win
```

Les fichiers générés sont placés dans `dist/`.

## Publication GitHub

Le dépôt inclut deux workflows GitHub Actions :

- **CI** : vérifie automatiquement le projet à chaque push et pull request.
- **Release Windows** : lors de l’envoi d’un tag `v*` (ex. `v1.0.0`), compile l’application Windows et crée une GitHub Release avec l’installateur.

### Première publication

```bash
git init
git add .
git commit -m "Initial release - ASM Paris Navigator"
git branch -M main
git remote add origin https://github.com/VOTRE-COMPTE/asm-paris-navigator.git
git push -u origin main
```

### Publier une version Windows

```bash
git tag v1.0.0
git push origin v1.0.0
```

GitHub Actions construit ensuite automatiquement la version Windows et l’ajoute dans **Releases**.

## Données externes

Certaines fonctions Bus interrogent l’API publique Île-de-France Mobilités. Une connexion Internet est donc nécessaire pour ces données dynamiques.

## Sécurité

Merci de consulter [SECURITY.md](SECURITY.md) avant de signaler une vulnérabilité.

## Licence

Copyright © ASM Technologies. Tous droits réservés. Voir [LICENSE](LICENSE).
