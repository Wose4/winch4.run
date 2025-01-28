# 1. Utiliser une image Node.js officielle
FROM node:18-alpine

# 2. Créer un répertoire de travail
WORKDIR /app

# 3. Copier uniquement les fichiers de dépendances en premier
COPY package*.json ./

# 4. Installer les dépendances
RUN npm install

# 5. Copier le reste du code (pages, etc.)
COPY . .

# 6. Construire l'application Next.js
#    -> sort le build dans le dossier .next
RUN npm run build

# 7. Exposer le port (Cloud Run écoute par défaut le port 8080)
EXPOSE 8080
ENV PORT 8080

# 8. Démarrer l'app en mode production
#    Next.js propose "next start" qui lance le serveur sur le port 3000 par défaut.
#    On force le port 8080 pour Cloud Run.
CMD ["npm", "run", "start"]