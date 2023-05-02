# Easeat

Bienvenue!
"Easeat" est un projet qui vise à fournir un dashboard permettant de surveiller l'état de votre frigo selon le profil sélectionné.

## Installation

Voici les étapes à suivre pour installer et exécuter le projet "Easeat" :

- Assurez-vous que vous disposez de Node. Si vous ne possédez pas Node, [voici un lien vers le téléchargement / l'installation](https://nodejs.org/en/download).
- Téléchargez le code source du projet depuis le dépôt Git : ouvrez un terminal, puis lancez la commande suivante :
  `git clone https://github.com/AdamOuali/Easeat.git`.
- Placez-vous dans le répertoire racine : `cd ./Easeat`
- Puis téléchargez les dépendances nécessaires : `npm install`

Une fois toutes les dépendances installées, lancez la commande suivante vous permettant de lancer le back et le front en même temps (et donc l'ensemble du projet) : `npm run-script easeat`

Une fois l'application lancée, vous pourrez accéder à l'interface web à l'URL notée dans le terminal. Si votre port n'est pas réservé par défaut, l'url d'accès est la suivante : `http://localhost:5173/`.
De plus le back tourne sur le port 3000. Il est donc accessible depuis l'url d'accès suivante : `http://localhost:3000/api/<endpoint>`.

## Documentation API

La documentation de l'API est disponible [ici](https://documenter.getpostman.com/view/27176202/2s93eU3unF).
