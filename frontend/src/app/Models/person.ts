import { Role } from './role';

export class Person {
    id: string;
    nom: string;
    prenom: string ;
    password: string;
    role: Role;
    email: string;
    roles: string[];
    dateNaiss: string;
    adresse: string;
    telephone: string;
    pays: string;
    adresseCab: string;
    dateDip: string ;
    maladie: string;
    pseudo: string;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Article", mappedBy="personne", orphanRemoval=true)
     */
    private $articles;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Role", inversedBy="personnes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $role;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $photo;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Consultation", mappedBy="medecin")
     */
    private $consultations;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Consultation", mappedBy="user",orphanRemoval=true)
     */
    private $consultationsOfUser;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\User", inversedBy="abonnants")
     */
    // mes abonnes
    private $abonnes;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\User", mappedBy="abonnes")
     */
    // les personnes eli 3meltlhom abonner
    private $abonnants;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Post", mappedBy="user", orphanRemoval=true)
     */
    private $posts;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Reaction", mappedBy="user", orphanRemoval=true)
     */
    private $reacts;
}
