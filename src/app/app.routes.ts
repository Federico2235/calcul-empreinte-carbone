import { Routes } from '@angular/router';
import {CarbonFootprint} from './carbon-footprint/carbon-footprint';
import {Home} from './home/home';
import {Profile} from './profile/profile';
import {navGuard} from './nav-guard';

export const routes: Routes = [
  {path:"",component : Home},
  {path: "cfp",component : CarbonFootprint,canActivate : [navGuard]},
  {path: "profile/:user",component:Profile ,canActivate : [navGuard]}
];
















// Niveau 1
// Mettre en place le module de routing dans le projet
// Ajouter la balise <router-outlet></router-outlet> dans le composant app.component.html
// Rediriger la route par défaut vers le composant CarbonFootPrint et vérifier que tout fonctionne de nouveau
// Créer un composant home qui affiche un message de bienvenue (futur page de connexion) et un bouton pour accèder à la page CarbonFootPrint
// Rediriger désormais la route par défaut vers la page home
// Ajouter une route vers la page CarbonFootPrint
// Créer un composant profile qui affiche le nom de l'utilisateur (passé en paramètre)
// Ajouter un bouton dans le composant header pour visualiser le profil de l'utilisateur
// Niveau 2
// Créer un service user
// Créer une méthode login(username) qui permet de se connecter avec un nom d'utilisateur
// Créer une méthode getUsername() qui permet de récupérer le nom d'utilisateur, si aucun nom d'utilisateur n'a été stocké, renvoyer une chaine de caractère vide
// Au click sur le bouton de la page home, appeler la méthode login(username) du service user pour se connecter avec le nom d'utilisateur Jean
// Afficher le nom d'utilisateur sur la page header (en utilisant la méthode getUsername() du service UserService) et passer ce paramètre à la navigation vers la page profile
// Mettre en place une barre de navigation avec le routerLinkActive
// Niveau 3
// Créer un guard qui empêche la navigation vers les pages CarbonFootPrint et profile si l'utilisateur n'est pas connecté et qui redirige vers la page home
