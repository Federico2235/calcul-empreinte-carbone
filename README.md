# CalculEmpreinteCarbone

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.18.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



Dans le composant carbon-footprint, ajouter un attribut distanceKm de type Number et lui donner une valeur par défaut avec un nombre de kilomètres parcourus
Dans le composant carbon-footprint, ajouter un attribut consommationPour100Km de type Number et lui donner une valeur par défaut avec un nombre de kilomètres parcourus
Afficher dans le composant carbon-footprint, afficher la consommation pour 100 kms, le nombre de kilomètres et la consommation totale
Afficher un message, dans une div ou un span, dans le composant carbon-footprint si la consommation pour 100 km est supérieure à 7 litres qui indique "Attention, votre consommation est élevée"
Afficher un message, dans une div ou un span, dans le composant carbon-footprint si la consommation pour 100 km est inférieure à 4 litres qui indique "Félicitations, votre consommation est faible"
Dans le composant carbon-footprint, afficher la consommation pour 100 km en rouge si elle est supérieure à 7 litres et en vert si elle est inférieure à 4 litres
Ajouter une classe CSS haute-distance si la distance est supérieure à 500 km et une classe CSS basse-distance si la distance est inférieure à 100 km
La classe haute-distance affiche un texte en gras et en vert, la classe basse-distance affiche un texte en gras et en rouge
Ajouter un bouton +100km dans le composant carbon-footprint qui permet d'ajouter 100 km à la distance au clic sur ce bouton



Ajouter un bouton Générer voyage qui ajouter un voyage dans le tableau voyages du composant carbon-footprint avec des valeurs aléatoires (mais réalistes)
Remplacer les valeurs fixes distanceKm et consommationPour100Km par le total des voyages et la moyenne des consommations pour 100 km
Dans le composant footer, ajouter un attribut date de type Date et lui donner une valeur par défaut avec la date du jour
Afficher dans le composant footer la date du jour au format JJ/MM/AAAA, grâce à un pipe
Dans le composant carbon-footprint, utiliser un pipe pour afficher au maximum deux chiffres après la virgule pour la consommation pour 100 km



Objectifs
Mettre en place un service permettant de calculer l'empreinte carbone d'un voyage en voiture

Niveau 1
Créer un service carbon-footprint-compute qui permet de calculer l'empreinte carbone d'un voyage en voiture
Déplacer le tableau de voyage du composant carbon-footprint vers le service carbon-footprint-compute
Créer une méthode getVoyages() qui renvoie un tableau de voyages
Créer une méthode addVoyage(voyage) qui ajoute un voyage au tableau
Injecter le service carbon-footprint-compute dans le composant carbon-footprint
Appeler la méthode getVoyages() dans le composant carbon-footprint pour récupérer la liste des voyages
Appeler la méthode addVoyage(voyage) dans le composant carbon-footprint pour ajouter un voyage aléatoire
Niveau 2
Créer une méthode getResumeVoyages() qui renvoie un objet composé de deux valeurs : la distance totale en km et la consommation moyenne
Alimenter les attributs distanceKm et consommationPour100Km en appelant la méthode getResumeVoyages() dans le composant carbon-footprint
Niveau 3
Ajouter pour chaque voyage, un attribut quantiteCO2, dans le service carbon-footprint-compute (avec des valeurs arbitraires dans un premier temps)
Afficher cette quantité de CO2 dans le composant carbon-footprint
Retourner la quantité totale de CO2 dans la méthode getResumeVoyages() grâce à un attribut quantiteCO2Totale
Afficher cette quantité totale de CO2 dans le composant carbon-footprint
Calculer la quantité de CO2 par voyage avec la formule suivante : quantiteCO2 = (distanceKm * consommationPour100Km) / 100 * 2.3
