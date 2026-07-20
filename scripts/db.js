let books = [
    {
        name: "Die Geheimnisse des Ozeans",
        author: "Felix Stern",
        likes: 1250,
        liked: true,
        price: 19.99,
        publishedYear: 2018,
        genre: "Fantasy",
        comments: [
            {
                name: "Leser123",
                comment:
                    "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
            },
            {
                name: "UserLady",
                comment:
                    "Das Buch war spannend und leicht zu lesen. Die Handlung hat mich bis zum Ende gefesselt.",
            },
            {
                name: "Leser123",
                comment:
                    "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
            },
            {
                name: "UserLady",
                comment:
                    "Das Buch war spannend und leicht zu lesen. Die Handlung hat mich bis zum Ende gefesselt.",
            },
        ],
    },
    {
        name: "Der vergessene Pfad",
        author: "Elias Becker",
        likes: 980,
        liked: false,
        price: 14.5,
        publishedYear: 2021,
        genre: "Fantasy",
        comments: [
            {
                name: "Gandalf01",
                comment:
                    "Mir haben die Figuren gut gefallen, weil sie glaubwürdig und interessant waren.",
            },
            {
                name: "Mr. TRex",
                comment:
                    "Die Geschichte war unterhaltsam, hatte aber an manchen Stellen einige Längen.",
            }
        ],
    },
    {
        name: "Die Farben des Himmels",
        author: "Anna Müller",
        likes: 1520,
        liked: true,
        price: 22.95,
        publishedYear: 2019,
        genre: "Romantik",
        comments: [
            {
                name: "Maya L.",
                comment:
                    "Der Schreibstil war angenehm und verständlich. Ich konnte mir die Szenen gut vorstellen.",
            },
            {
                name: "Martin_Halt",
                comment:
                    "Das Ende war überraschend und hat gut zur Geschichte gepasst.",
            }
        ],
    },
    {
        name: "Das Rätsel der Zeit",
        author: "Elias Thorne",
        likes: 750,
        liked: false,
        price: 18.0,
        publishedYear: 2020,
        genre: "Science-Fiction",
        comments: [
            {
                name: "Mulle04",
                comment:
                    "Das Buch hat mich zum Nachdenken gebracht und ist mir noch lange im Gedächtnis geblieben.",
            },
            {
                name: "Der Reisende",
                comment:
                    "Manche Kapitel waren etwas lang, insgesamt hat mir das Buch aber gut gefallen.",
            }
        ],
    },
    {
        name: "Der letzte Wächter",
        author: "Julia Vogel",
        likes: 1300,
        liked: true,
        price: 16.75,
        publishedYear: 2017,
        genre: "Fantasy",
        comments: [
            {
                name: "SpongeBob",
                comment:
                    "Ich würde das Buch weiterempfehlen, weil es spannend und abwechslungsreich ist.",
            },
            {
                name: "Patrick",
                comment:
                    "Das Thema wurde interessant behandelt und hat meine Neugier geweckt.",
            }
        ],
    },
    {
        name: "Im Schatten des Mondes",
        author: "Elena Weiss",
        likes: 890,
        liked: false,
        price: 12.3,
        publishedYear: 2022,
        genre: "Science-Fiction",
        comments: [
            {
                name: "Snob123",
                comment:
                    "Insgesamt war das Buch lesenswert und hat meine Erwartungen erfüllt.",
            },
            {
                name: "Frieda Soda",
                comment:
                    "Das Buch hat mich von der ersten bis zur letzten Seite begeistert.",
            }
        ],
    },
    {
        name: "Jenseits der Sterne",
        author: "Elias Sterner",
        likes: 1450,
        liked: true,
        price: 21.0,
        publishedYear: 2015,
        genre: "Science-Fiction",
        comments: [
            {
                name: "Mauli15",
                comment:
                    "Die Geschichte war emotional und hat mich berührt.",
            },
            {
                name: "Master X",
                comment:
                    "Ich fand die Handlung originell und abwechslungsreich.",
            }
        ],
    },
    {
        name: "Das verborgene Königreich",
        author: "Maximilian Schwarz",
        likes: 920,
        liked: false,
        price: 17.5,
        publishedYear: 2020,
        genre: "Fantasy",
        comments: [
            {
                name: "JohnDoe",
                comment:
                    "Die Hauptfigur war sympathisch und ihre Entwicklung war spannend.",
            },
            {
                name: "JaneDoe",
                comment:
                    "Das Buch war leicht verständlich und gut aufgebaut.",
            }
        ],
    },
    {
        name: "Liebe in Zeiten des Krieges",
        author: "Elisa Becker",
        likes: 1800,
        liked: true,
        price: 19.99,
        publishedYear: 2016,
        genre: "Romantik",
        comments: [
            {
                name: "SoftGun01",
                comment:
                    "Einige Wendungen waren unerwartet und haben die Geschichte spannend gemacht.",
            },
            {
                name: "Mary Poppins",
                comment:
                    "Der Anfang war etwas langsam, aber danach wurde das Buch richtig interessant.",
            }
        ],
    },
    {
        name: "Aliens",
        author: "Hans R. Giger",
        likes: 1500,
        liked: true,
        price: 24.99,
        publishedYear: 2020,
        genre: "Science-Fiction",
        comments: [
            {
                name: "Superman",
                comment:
                    "Die Beschreibungen waren lebendig und haben die Handlung greifbar gemacht.",
            },
            {
                name: "Miraculix",
                comment:
                    "Das Buch war informativ und gleichzeitig unterhaltsam.",
            }
        ],
    },
    {
        name: "Die Reise zum magischen Berg",
        author: "Lea Müller",
        likes: 1420,
        liked: true,
        price: 19.99,
        publishedYear: 2019,
        genre: "Fantasy-Abenteuer",
        comments: [
            {
                name: "Tante Emma",
                comment:
                    "Ich konnte mich gut in die Figuren hineinversetzen.",
            },
            {
                name: "Mutti_32",
                comment:
                    "Das Ende hätte für meinen Geschmack ausführlicher sein können.",
            }
        ],
    },
    {
        name: "Die Weiten des Universums",
        author: "Julia Becker",
        likes: 1200,
        liked: true,
        price: 22.99,
        publishedYear: 2022,
        genre: "Science-Fiction",
        comments: [
            {
                name: "Annegret",
                comment:
                    "Die Geschichte war fantasievoll und voller Überraschungen.",
            },
            {
                name: "Merlin_08",
                comment:
                    "Ich würde dieses Buch auf jeden Fall noch einmal lesen.",
            }
        ],
    },
];