class Personne{

    constructor(nom, age, sexe){
        this.nom = "Jean"
        this.age = 18
        this.sexe = "Masculin"
    }


    boire = () => {
        console.log(this.nom + " est un développeur junior")
    }

    bagarre = (adversaire) => {
        this.adversaire = "son adversaire"
        console.log(this.nom + " met coup de point à " + this.adversaire + ". " + this.adversaire + " s'effondre")
    }

    info = () => {
       console.log(this.nom+"a"+this.age+"ans et est "+this.sexe) 
    }
}


let Pierre = new Personne("Pierre", 17, "homme")
//Pierre.nom = "Chose"
let Katy = new Personne("Katy")


Pierre.boire()

Pierre.bagarre()

Pierre.info();