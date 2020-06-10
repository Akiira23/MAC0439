// Aqui não usamos mais a tabela de participantes, pois estes estão agregados dentro da tabela de partidas

// Vale também mencionar que abrimos mão do objeto de Projetos, pois o intuito de uso deles não estava muito claro, assim
// como seu uso não parecer essencial para as funcionalidades da ferramenta
use FantasyDreams;
DBQuery.shellBatchSize = 400;
db.torneios.insertMany(
[
  {
    "nome": "Boomer Showdown",
    "esporte": "amarelinha",
    "partidas": [
      {
        "placar": "4-1",
        "duracao": "3h19m39s",
        "times": [
          {
            "nome": "Punk Limestones",
            "treinador": {
              "nome": "Cameron Daniel",
              "genero": "masculino",
              "idade": 29
            },
            "participantes": [
              {
                "nome": "Rios Dotson",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Rowe Barnes",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Soto Calderon",
                "genero": "masculino",
                "idade": 30
              },
              {
                "nome": "Sofia Gomez",
                "genero": "feminino",
                "idade": 24
              },
              {
                "nome": "Stacy Barber",
                "genero": "feminino",
                "idade": 45
              },
              {
                "nome": "Tameka Wood",
                "genero": "feminino",
                "idade": 25
              },
              {
                "nome": "Jeanie Hicks",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Lena Blackburn",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Ora Smith",
                "genero": "feminino",
                "idade": 26
              },
              {
                "nome": "Hudson Velez",
                "genero": "masculino",
                "idade": 46
              }
            ]
          },
          {
            "nome": "Punk Sextons",
            "treinador": {
              "nome": "Robbins Kane",
              "genero": "masculino",
              "idade": 18
            },
            "participantes": [
              {
                "nome": "Lilian Conner",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Beach Meadows",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Manuela Kerr",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Alyce Shaffer",
                "genero": "feminino",
                "idade": 31
              },
              {
                "nome": "Ryan Maddox",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "York Blair",
                "genero": "masculino",
                "idade": 46
              },
              {
                "nome": "Elma Dennis",
                "genero": "feminino",
                "idade": 29
              },
              {
                "nome": "Davis Haynes",
                "genero": "masculino",
                "idade": 38
              },
              {
                "nome": "Morse Levine",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Kerr Baird",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Payne Curry",
                "genero": "masculino",
                "idade": 38
              },
              {
                "nome": "Angelita Alvarado",
                "genero": "feminino",
                "idade": 41
              }
            ]
          }
        ]
      },
      {
        "placar": "5-8",
        "duracao": "1h3m57s",
        "times": [
          {
            "nome": "The Charcos",
            "treinador": {
              "nome": "Wilder Larson",
              "genero": "masculino",
              "idade": 25
            },
            "participantes": [
              {
                "nome": "Mckay Reilly",
                "genero": "masculino",
                "idade": 45
              },
              {
                "nome": "Velazquez Walton",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Willis Kelley",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Joanna Cox",
                "genero": "feminino",
                "idade": 19
              },
              {
                "nome": "Stacie Hensley",
                "genero": "feminino",
                "idade": 37
              },
              {
                "nome": "Hilary Thornton",
                "genero": "feminino",
                "idade": 26
              },
              {
                "nome": "Misty Greer",
                "genero": "feminino",
                "idade": 16
              },
              {
                "nome": "Edwina Barker",
                "genero": "feminino",
                "idade": 45
              },
              {
                "nome": "Owen Fernandez",
                "genero": "masculino",
                "idade": 40
              },
              {
                "nome": "Susan Palmer",
                "genero": "feminino",
                "idade": 33
              },
              {
                "nome": "Taylor Simpson",
                "genero": "masculino",
                "idade": 17
              }
            ]
          },
          {
            "nome": "Ferocious Laureltons",
            "treinador": {
              "nome": "Luisa Lee",
              "genero": "feminino",
              "idade": 31
            },
            "participantes": [
              {
                "nome": "Stout Flynn",
                "genero": "masculino",
                "idade": 21
              },
              {
                "nome": "Stewart Ashley",
                "genero": "masculino",
                "idade": 20
              },
              {
                "nome": "Frederick Gallegos",
                "genero": "masculino",
                "idade": 25
              },
              {
                "nome": "Osborne Barlow",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Dixie Duffy",
                "genero": "feminino",
                "idade": 37
              },
              {
                "nome": "Hanson Riddle",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Dickerson Moon",
                "genero": "masculino",
                "idade": 36
              },
              {
                "nome": "Sheryl Brock",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Brock Rasmussen",
                "genero": "masculino",
                "idade": 41
              }
            ]
          }
        ]
      },
      {
        "placar": "4-8",
        "duracao": "2h44m29s",
        "times": [
          {
            "nome": "Explosive Osages",
            "treinador": {
              "nome": "Lana Hart",
              "genero": "feminino",
              "idade": 25
            },
            "participantes": [
              {
                "nome": "Macdonald Nichols",
                "genero": "masculino",
                "idade": 21
              },
              {
                "nome": "Massey Guzman",
                "genero": "masculino",
                "idade": 48
              },
              {
                "nome": "Weiss Farley",
                "genero": "masculino",
                "idade": 20
              },
              {
                "nome": "Allison Hodge",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Wright Boone",
                "genero": "masculino",
                "idade": 23
              },
              {
                "nome": "Janice Mullen",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Davenport Morin",
                "genero": "masculino",
                "idade": 22
              },
              {
                "nome": "Tamera Burton",
                "genero": "feminino",
                "idade": 36
              },
              {
                "nome": "Deanne Kirby",
                "genero": "feminino",
                "idade": 29
              }
            ]
          },
          {
            "nome": "Silver Sehilis",
            "treinador": {
              "nome": "Yates Ferguson",
              "genero": "masculino",
              "idade": 48
            },
            "participantes": [
              {
                "nome": "Lou Walsh",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Craft Chang",
                "genero": "masculino",
                "idade": 38
              },
              {
                "nome": "Navarro Curtis",
                "genero": "masculino",
                "idade": 42
              },
              {
                "nome": "Judith Mendez",
                "genero": "feminino",
                "idade": 15
              },
              {
                "nome": "Guadalupe Burris",
                "genero": "feminino",
                "idade": 33
              },
              {
                "nome": "Rosalyn Cross",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Branch Gray",
                "genero": "masculino",
                "idade": 34
              },
              {
                "nome": "Knox Hines",
                "genero": "masculino",
                "idade": 16
              },
              {
                "nome": "Pacheco Vargas",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Adela Parker",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Margaret White",
                "genero": "feminino",
                "idade": 21
              },
              {
                "nome": "Latisha Case",
                "genero": "feminino",
                "idade": 16
              }
            ]
          }
        ]
      },
      {
        "placar": "2-8",
        "duracao": "1h29m35s",
        "times": [
          {
            "nome": "Blue Sunrivers",
            "treinador": {
              "nome": "Warner Sandoval",
              "genero": "masculino",
              "idade": 34
            },
            "participantes": [
              {
                "nome": "Lacey Cobb",
                "genero": "feminino",
                "idade": 45
              },
              {
                "nome": "Joanne Fuentes",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Dodson Austin",
                "genero": "masculino",
                "idade": 33
              },
              {
                "nome": "Burks Sykes",
                "genero": "masculino",
                "idade": 23
              },
              {
                "nome": "Lucille Hurley",
                "genero": "feminino",
                "idade": 47
              },
              {
                "nome": "Susana Solis",
                "genero": "feminino",
                "idade": 38
              },
              {
                "nome": "Bennett Michael",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Simmons Eaton",
                "genero": "masculino",
                "idade": 25
              },
              {
                "nome": "Hester Baker",
                "genero": "masculino",
                "idade": 38
              },
              {
                "nome": "Mcconnell Silva",
                "genero": "masculino",
                "idade": 30
              }
            ]
          },
          {
            "nome": "Punk Ogemas",
            "treinador": {
              "nome": "Iva Johnson",
              "genero": "feminino",
              "idade": 27
            },
            "participantes": [
              {
                "nome": "Swanson Nielsen",
                "genero": "masculino",
                "idade": 45
              },
              {
                "nome": "Ola Harrington",
                "genero": "feminino",
                "idade": 15
              },
              {
                "nome": "Castillo Miles",
                "genero": "masculino",
                "idade": 26
              },
              {
                "nome": "Ortiz Stark",
                "genero": "masculino",
                "idade": 46
              },
              {
                "nome": "Collier Rodriquez",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Keisha Hunter",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Cummings Knox",
                "genero": "masculino",
                "idade": 46
              },
              {
                "nome": "Wilda Schneider",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Meghan Hayden",
                "genero": "feminino",
                "idade": 29
              },
              {
                "nome": "Dennis Valentine",
                "genero": "masculino",
                "idade": 18
              }
            ]
          }
        ]
      },
      {
        "placar": "1-5",
        "duracao": "2h15m1s",
        "times": [
          {
            "nome": "Red Johnsonburgs",
            "treinador": {
              "nome": "Hunt Foley",
              "genero": "masculino",
              "idade": 18
            },
            "participantes": [
              {
                "nome": "Martin Salazar",
                "genero": "masculino",
                "idade": 26
              },
              {
                "nome": "Amelia Cantu",
                "genero": "feminino",
                "idade": 33
              },
              {
                "nome": "Angel Armstrong",
                "genero": "feminino",
                "idade": 19
              },
              {
                "nome": "Mcclure Russo",
                "genero": "masculino",
                "idade": 22
              },
              {
                "nome": "Grimes Dickson",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Richard Kennedy",
                "genero": "masculino",
                "idade": 30
              },
              {
                "nome": "Justine Wilson",
                "genero": "feminino",
                "idade": 40
              },
              {
                "nome": "Jamie Grant",
                "genero": "feminino",
                "idade": 37
              },
              {
                "nome": "Opal Barrett",
                "genero": "feminino",
                "idade": 17
              },
              {
                "nome": "Ivy Park",
                "genero": "feminino",
                "idade": 36
              },
              {
                "nome": "Nona Wynn",
                "genero": "feminino",
                "idade": 38
              }
            ]
          },
          {
            "nome": "Ferocious Shastas",
            "treinador": {
              "nome": "Robertson Spears",
              "genero": "masculino",
              "idade": 40
            },
            "participantes": [
              {
                "nome": "Graves Alvarez",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Cleo Justice",
                "genero": "feminino",
                "idade": 38
              },
              {
                "nome": "Quinn Bright",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Murray Montoya",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Celina Moss",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Holmes Fox",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Christa Green",
                "genero": "feminino",
                "idade": 42
              },
              {
                "nome": "Aline Phelps",
                "genero": "feminino",
                "idade": 30
              },
              {
                "nome": "Cheri Figueroa",
                "genero": "feminino",
                "idade": 29
              }
            ]
          }
        ]
      },
      {
        "placar": "1-7",
        "duracao": "2h18m29s",
        "times": [
          {
            "nome": "Punk Morningsides",
            "treinador": {
              "nome": "Wendy Small",
              "genero": "feminino",
              "idade": 28
            },
            "participantes": [
              {
                "nome": "Norma Robertson",
                "genero": "feminino",
                "idade": 47
              },
              {
                "nome": "Adrian Rojas",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Mamie Vasquez",
                "genero": "feminino",
                "idade": 30
              },
              {
                "nome": "Hyde Bauer",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Luann Lott",
                "genero": "feminino",
                "idade": 40
              },
              {
                "nome": "Carmella Hampton",
                "genero": "feminino",
                "idade": 17
              },
              {
                "nome": "Campos Newman",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Patsy Bradshaw",
                "genero": "feminino",
                "idade": 17
              },
              {
                "nome": "Mcgowan Mclaughlin",
                "genero": "masculino",
                "idade": 23
              }
            ]
          },
          {
            "nome": "Punk Dennards",
            "treinador": {
              "nome": "Erin Mckee",
              "genero": "feminino",
              "idade": 30
            },
            "participantes": [
              {
                "nome": "Cunningham Wiggins",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Dena Estes",
                "genero": "feminino",
                "idade": 41
              },
              {
                "nome": "Rodgers Hernandez",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Tanya Olsen",
                "genero": "feminino",
                "idade": 39
              },
              {
                "nome": "Salazar Barr",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Wilkinson Bush",
                "genero": "masculino",
                "idade": 29
              },
              {
                "nome": "Anne Rogers",
                "genero": "feminino",
                "idade": 18
              },
              {
                "nome": "Allyson Merritt",
                "genero": "feminino",
                "idade": 17
              },
              {
                "nome": "Jayne Harding",
                "genero": "feminino",
                "idade": 43
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nome": "Boomer Showdown",
    "esporte": "amarelinha",
    "partidas": [
      {
        "placar": "8-2",
        "duracao": "2h11m27s",
        "times": [
          {
            "nome": "Punk Libertytowns",
            "treinador": {
              "nome": "Tina Contreras",
              "genero": "feminino",
              "idade": 24
            },
            "participantes": [
              {
                "nome": "Imogene Pacheco",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "Jennifer Woodward",
                "genero": "feminino",
                "idade": 43
              },
              {
                "nome": "Marylou Pena",
                "genero": "feminino",
                "idade": 39
              },
              {
                "nome": "Knapp York",
                "genero": "masculino",
                "idade": 21
              },
              {
                "nome": "Adams Kelly",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "Marcy Rivera",
                "genero": "feminino",
                "idade": 34
              },
              {
                "nome": "Marisa Hardin",
                "genero": "feminino",
                "idade": 24
              },
              {
                "nome": "Whitfield Jimenez",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Christi Colon",
                "genero": "feminino",
                "idade": 32
              },
              {
                "nome": "Ramona Clay",
                "genero": "feminino",
                "idade": 38
              },
              {
                "nome": "Sylvia Patel",
                "genero": "feminino",
                "idade": 42
              },
              {
                "nome": "Stephanie Gordon",
                "genero": "feminino",
                "idade": 16
              }
            ]
          },
          {
            "nome": "Blue Snydervilles",
            "treinador": {
              "nome": "Andrea Hudson",
              "genero": "feminino",
              "idade": 36
            },
            "participantes": [
              {
                "nome": "Parks Patterson",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "Annie Mcdaniel",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Taylor Cook",
                "genero": "feminino",
                "idade": 47
              },
              {
                "nome": "Briana Lawson",
                "genero": "feminino",
                "idade": 15
              },
              {
                "nome": "Kendra Wells",
                "genero": "feminino",
                "idade": 38
              },
              {
                "nome": "Floyd Pace",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Hughes Fleming",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Roberson Alford",
                "genero": "masculino",
                "idade": 35
              },
              {
                "nome": "Lilia Swanson",
                "genero": "feminino",
                "idade": 27
              },
              {
                "nome": "Shannon Daugherty",
                "genero": "feminino",
                "idade": 19
              }
            ]
          }
        ]
      },
      {
        "placar": "8-5",
        "duracao": "3h9m17s",
        "times": [
          {
            "nome": "Silver Freelandvilles",
            "treinador": {
              "nome": "Kaufman Oconnor",
              "genero": "masculino",
              "idade": 29
            },
            "participantes": [
              {
                "nome": "Priscilla Nixon",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Kane Burnett",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Koch Caldwell",
                "genero": "masculino",
                "idade": 25
              },
              {
                "nome": "Carla Madden",
                "genero": "feminino",
                "idade": 34
              },
              {
                "nome": "Beth Mccormick",
                "genero": "feminino",
                "idade": 43
              },
              {
                "nome": "Lawrence Singleton",
                "genero": "masculino",
                "idade": 40
              },
              {
                "nome": "Greta Macias",
                "genero": "feminino",
                "idade": 39
              },
              {
                "nome": "Wiggins Monroe",
                "genero": "masculino",
                "idade": 22
              },
              {
                "nome": "Rachel Mejia",
                "genero": "feminino",
                "idade": 16
              },
              {
                "nome": "Phyllis Short",
                "genero": "feminino",
                "idade": 21
              },
              {
                "nome": "Mcfadden Boyer",
                "genero": "masculino",
                "idade": 38
              }
            ]
          },
          {
            "nome": "Awesome Webstervilles",
            "treinador": {
              "nome": "Eloise Lynn",
              "genero": "feminino",
              "idade": 21
            },
            "participantes": [
              {
                "nome": "Elena Preston",
                "genero": "feminino",
                "idade": 21
              },
              {
                "nome": "Charlotte Blevins",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Charlene Wheeler",
                "genero": "feminino",
                "idade": 41
              },
              {
                "nome": "Bender Hayes",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Moore Richard",
                "genero": "masculino",
                "idade": 19
              },
              {
                "nome": "Jean Burch",
                "genero": "feminino",
                "idade": 27
              },
              {
                "nome": "Talley Franco",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Morales Hobbs",
                "genero": "masculino",
                "idade": 21
              },
              {
                "nome": "Lambert Rios",
                "genero": "masculino",
                "idade": 45
              },
              {
                "nome": "West Bradford",
                "genero": "masculino",
                "idade": 24
              },
              {
                "nome": "Billie Gardner",
                "genero": "feminino",
                "idade": 37
              },
              {
                "nome": "Hardin Stanton",
                "genero": "masculino",
                "idade": 27
              }
            ]
          }
        ]
      },
      {
        "placar": "3-4",
        "duracao": "2h40m1s",
        "times": [
          {
            "nome": "Blue Halls",
            "treinador": {
              "nome": "Heather Whitley",
              "genero": "feminino",
              "idade": 26
            },
            "participantes": [
              {
                "nome": "Ortega Rhodes",
                "genero": "masculino",
                "idade": 22
              },
              {
                "nome": "Elisa Juarez",
                "genero": "feminino",
                "idade": 19
              },
              {
                "nome": "Elba Roberson",
                "genero": "feminino",
                "idade": 39
              },
              {
                "nome": "Serrano Oneal",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Conrad Bean",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Beard Gilliam",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Norton Whitney",
                "genero": "masculino",
                "idade": 33
              },
              {
                "nome": "Pansy Hogan",
                "genero": "feminino",
                "idade": 25
              },
              {
                "nome": "Richards Lang",
                "genero": "masculino",
                "idade": 42
              }
            ]
          },
          {
            "nome": "Ferocious Valmys",
            "treinador": {
              "nome": "Estes Mccoy",
              "genero": "masculino",
              "idade": 43
            },
            "participantes": [
              {
                "nome": "Luella Nicholson",
                "genero": "feminino",
                "idade": 34
              },
              {
                "nome": "May Hinton",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Kemp Sanford",
                "genero": "masculino",
                "idade": 34
              },
              {
                "nome": "Randi Gross",
                "genero": "feminino",
                "idade": 42
              },
              {
                "nome": "Cheryl Chen",
                "genero": "feminino",
                "idade": 29
              },
              {
                "nome": "Cathleen Wright",
                "genero": "feminino",
                "idade": 45
              },
              {
                "nome": "Bradshaw Bartlett",
                "genero": "masculino",
                "idade": 25
              },
              {
                "nome": "Glenna Cooper",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Christian Campos",
                "genero": "feminino",
                "idade": 45
              },
              {
                "nome": "Holt Bruce",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Maldonado Hawkins",
                "genero": "masculino",
                "idade": 24
              },
              {
                "nome": "Turner Randall",
                "genero": "masculino",
                "idade": 20
              }
            ]
          }
        ]
      },
      {
        "placar": "0-3",
        "duracao": "1h24m7s",
        "times": [
          {
            "nome": "Red Roderfields",
            "treinador": {
              "nome": "Kate Dickerson",
              "genero": "feminino",
              "idade": 28
            },
            "participantes": [
              {
                "nome": "Becker Moses",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Thornton Stanley",
                "genero": "masculino",
                "idade": 22
              },
              {
                "nome": "Olive Moore",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "Lang Greene",
                "genero": "masculino",
                "idade": 25
              },
              {
                "nome": "Shana Vincent",
                "genero": "feminino",
                "idade": 40
              },
              {
                "nome": "Haley Franks",
                "genero": "feminino",
                "idade": 34
              },
              {
                "nome": "Kerri Robles",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Judy Wilder",
                "genero": "feminino",
                "idade": 24
              },
              {
                "nome": "Parsons Sharpe",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Ware Jarvis",
                "genero": "masculino",
                "idade": 46
              },
              {
                "nome": "Edna Humphrey",
                "genero": "feminino",
                "idade": 34
              }
            ]
          },
          {
            "nome": "Ferocious Norfolks",
            "treinador": {
              "nome": "Cotton Hopkins",
              "genero": "masculino",
              "idade": 37
            },
            "participantes": [
              {
                "nome": "Nixon Noel",
                "genero": "masculino",
                "idade": 45
              },
              {
                "nome": "Ginger Stevens",
                "genero": "feminino",
                "idade": 39
              },
              {
                "nome": "Amy Soto",
                "genero": "feminino",
                "idade": 16
              },
              {
                "nome": "Ester Casey",
                "genero": "feminino",
                "idade": 44
              },
              {
                "nome": "Cherry Goodman",
                "genero": "feminino",
                "idade": 26
              },
              {
                "nome": "Ray Parsons",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Alexander Cohen",
                "genero": "masculino",
                "idade": 18
              },
              {
                "nome": "Katheryn Mcbride",
                "genero": "feminino",
                "idade": 38
              },
              {
                "nome": "Shepard Cummings",
                "genero": "masculino",
                "idade": 25
              },
              {
                "nome": "Franks Chambers",
                "genero": "masculino",
                "idade": 38
              },
              {
                "nome": "Rosetta Noble",
                "genero": "feminino",
                "idade": 42
              },
              {
                "nome": "Bridget Cochran",
                "genero": "feminino",
                "idade": 22
              }
            ]
          }
        ]
      },
      {
        "placar": "0-3",
        "duracao": "2h27m41s",
        "times": [
          {
            "nome": "Explosive Shafts",
            "treinador": {
              "nome": "Hopper Mathews",
              "genero": "masculino",
              "idade": 42
            },
            "participantes": [
              {
                "nome": "Waller Espinoza",
                "genero": "masculino",
                "idade": 25
              },
              {
                "nome": "Benson Meyers",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Santiago Potter",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Hendrix Morrow",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Flores Bond",
                "genero": "masculino",
                "idade": 45
              },
              {
                "nome": "Barbara Schwartz",
                "genero": "feminino",
                "idade": 16
              },
              {
                "nome": "Holland Horton",
                "genero": "masculino",
                "idade": 22
              },
              {
                "nome": "Jeannine Allen",
                "genero": "feminino",
                "idade": 27
              },
              {
                "nome": "Margie Cruz",
                "genero": "feminino",
                "idade": 33
              },
              {
                "nome": "Howell Riggs",
                "genero": "masculino",
                "idade": 42
              },
              {
                "nome": "Marie Bird",
                "genero": "feminino",
                "idade": 45
              }
            ]
          },
          {
            "nome": "Awesome Eflands",
            "treinador": {
              "nome": "Linda Watts",
              "genero": "feminino",
              "idade": 40
            },
            "participantes": [
              {
                "nome": "Thelma Conley",
                "genero": "feminino",
                "idade": 47
              },
              {
                "nome": "Esperanza Brown",
                "genero": "feminino",
                "idade": 43
              },
              {
                "nome": "Avis Carter",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Carney Gould",
                "genero": "masculino",
                "idade": 36
              },
              {
                "nome": "Rosanna Thomas",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Terri Brady",
                "genero": "feminino",
                "idade": 17
              },
              {
                "nome": "Aguilar Murray",
                "genero": "masculino",
                "idade": 34
              },
              {
                "nome": "Ford Garza",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Cook Mendoza",
                "genero": "masculino",
                "idade": 29
              },
              {
                "nome": "Contreras Weeks",
                "genero": "masculino",
                "idade": 46
              },
              {
                "nome": "Oneill Ramirez",
                "genero": "masculino",
                "idade": 33
              },
              {
                "nome": "Janie Wilkins",
                "genero": "feminino",
                "idade": 34
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nome": "Exploding EVO",
    "esporte": "volei",
    "partidas": [
      {
        "placar": "0-3",
        "duracao": "2h24m55s",
        "times": [
          {
            "nome": "Explosive Jeffs",
            "treinador": {
              "nome": "Amber Villarreal",
              "genero": "feminino",
              "idade": 37
            },
            "participantes": [
              {
                "nome": "Deleon West",
                "genero": "masculino",
                "idade": 21
              },
              {
                "nome": "Wilma Thompson",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "Bethany Blankenship",
                "genero": "feminino",
                "idade": 21
              },
              {
                "nome": "Dolly Morton",
                "genero": "feminino",
                "idade": 40
              },
              {
                "nome": "Hartman Ellison",
                "genero": "masculino",
                "idade": 29
              },
              {
                "nome": "Wiley Riley",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Melisa Ray",
                "genero": "feminino",
                "idade": 17
              },
              {
                "nome": "Toni Britt",
                "genero": "feminino",
                "idade": 29
              },
              {
                "nome": "Latasha Bennett",
                "genero": "feminino",
                "idade": 36
              },
              {
                "nome": "Rosemarie Marks",
                "genero": "feminino",
                "idade": 16
              }
            ]
          },
          {
            "nome": "Blue Darbydales",
            "treinador": {
              "nome": "Boyd Hubbard",
              "genero": "masculino",
              "idade": 37
            },
            "participantes": [
              {
                "nome": "Stark Sweet",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Shelley Perez",
                "genero": "feminino",
                "idade": 24
              },
              {
                "nome": "Welch Brooks",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Valentine Morrison",
                "genero": "masculino",
                "idade": 18
              },
              {
                "nome": "Barnes Rollins",
                "genero": "masculino",
                "idade": 47
              },
              {
                "nome": "Sheena Bishop",
                "genero": "feminino",
                "idade": 36
              },
              {
                "nome": "Graham Stafford",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "Rivera Shields",
                "genero": "masculino",
                "idade": 48
              },
              {
                "nome": "Lyons Finch",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Sanford Delaney",
                "genero": "masculino",
                "idade": 16
              },
              {
                "nome": "Anna Long",
                "genero": "feminino",
                "idade": 31
              }
            ]
          }
        ]
      },
      {
        "placar": "3-4",
        "duracao": "3h17m36s",
        "times": [
          {
            "nome": "Blue Laffertys",
            "treinador": {
              "nome": "Luna Lindsey",
              "genero": "masculino",
              "idade": 15
            },
            "participantes": [
              {
                "nome": "Briggs Duke",
                "genero": "masculino",
                "idade": 26
              },
              {
                "nome": "Blanchard Bryan",
                "genero": "masculino",
                "idade": 38
              },
              {
                "nome": "Williamson Hall",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Spears Valdez",
                "genero": "masculino",
                "idade": 20
              },
              {
                "nome": "Lynda Gibson",
                "genero": "feminino",
                "idade": 15
              },
              {
                "nome": "Hollie Gibbs",
                "genero": "feminino",
                "idade": 34
              },
              {
                "nome": "Mabel Leach",
                "genero": "feminino",
                "idade": 19
              },
              {
                "nome": "Rachael Ortiz",
                "genero": "feminino",
                "idade": 28
              },
              {
                "nome": "John Nolan",
                "genero": "feminino",
                "idade": 27
              }
            ]
          },
          {
            "nome": "Ferocious Rivertons",
            "treinador": {
              "nome": "Edwards Hill",
              "genero": "masculino",
              "idade": 38
            },
            "participantes": [
              {
                "nome": "Hess Atkinson",
                "genero": "masculino",
                "idade": 48
              },
              {
                "nome": "Joann Woods",
                "genero": "feminino",
                "idade": 39
              },
              {
                "nome": "Roxanne Marsh",
                "genero": "feminino",
                "idade": 36
              },
              {
                "nome": "Tabatha Shepard",
                "genero": "feminino",
                "idade": 41
              },
              {
                "nome": "Wheeler Buck",
                "genero": "masculino",
                "idade": 47
              },
              {
                "nome": "Matthews Gill",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Ferguson Barry",
                "genero": "masculino",
                "idade": 47
              },
              {
                "nome": "Frankie Cooke",
                "genero": "feminino",
                "idade": 19
              },
              {
                "nome": "Ruiz Owens",
                "genero": "masculino",
                "idade": 23
              },
              {
                "nome": "Craig Banks",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Whitney Hughes",
                "genero": "masculino",
                "idade": 18
              },
              {
                "nome": "Ruth Combs",
                "genero": "feminino",
                "idade": 25
              }
            ]
          }
        ]
      },
      {
        "placar": "4-8",
        "duracao": "3h48m21s",
        "times": [
          {
            "nome": "Ferocious Comos",
            "treinador": {
              "nome": "Trujillo Hoover",
              "genero": "masculino",
              "idade": 30
            },
            "participantes": [
              {
                "nome": "Maxwell Evans",
                "genero": "masculino",
                "idade": 21
              },
              {
                "nome": "Hamilton Alston",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Sherrie Robinson",
                "genero": "feminino",
                "idade": 43
              },
              {
                "nome": "Nanette Moreno",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Graciela Rosales",
                "genero": "feminino",
                "idade": 19
              },
              {
                "nome": "Stokes Holden",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Shari Ruiz",
                "genero": "feminino",
                "idade": 21
              },
              {
                "nome": "Hoffman Trevino",
                "genero": "masculino",
                "idade": 18
              },
              {
                "nome": "Yesenia Browning",
                "genero": "feminino",
                "idade": 19
              },
              {
                "nome": "Santana Solomon",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "Torres George",
                "genero": "masculino",
                "idade": 15
              }
            ]
          },
          {
            "nome": "Ferocious Rockbridges",
            "treinador": {
              "nome": "Patty Winters",
              "genero": "feminino",
              "idade": 29
            },
            "participantes": [
              {
                "nome": "Hazel Delgado",
                "genero": "feminino",
                "idade": 34
              },
              {
                "nome": "Knowles Dixon",
                "genero": "masculino",
                "idade": 20
              },
              {
                "nome": "Lara Grimes",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Chan Velasquez",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Randall Nelson",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Sharron Holman",
                "genero": "feminino",
                "idade": 39
              },
              {
                "nome": "Larson Howell",
                "genero": "masculino",
                "idade": 29
              },
              {
                "nome": "Mullen Lynch",
                "genero": "masculino",
                "idade": 26
              },
              {
                "nome": "Daniels Garner",
                "genero": "masculino",
                "idade": 30
              },
              {
                "nome": "Johns Pickett",
                "genero": "masculino",
                "idade": 42
              }
            ]
          }
        ]
      },
      {
        "placar": "6-0",
        "duracao": "2h4m16s",
        "times": [
          {
            "nome": "Red Dotseros",
            "treinador": {
              "nome": "Alston Rivas",
              "genero": "masculino",
              "idade": 34
            },
            "participantes": [
              {
                "nome": "Delaney Hebert",
                "genero": "masculino",
                "idade": 23
              },
              {
                "nome": "Mccarthy Meyer",
                "genero": "masculino",
                "idade": 36
              },
              {
                "nome": "Spence Bailey",
                "genero": "masculino",
                "idade": 40
              },
              {
                "nome": "Klein Walters",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Compton Berry",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Lupe Strickland",
                "genero": "feminino",
                "idade": 44
              },
              {
                "nome": "Juanita Blanchard",
                "genero": "feminino",
                "idade": 42
              },
              {
                "nome": "Annette Wyatt",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "Bond Glenn",
                "genero": "masculino",
                "idade": 26
              },
              {
                "nome": "Middleton Chavez",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Gonzales Patrick",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Shelly Montgomery",
                "genero": "feminino",
                "idade": 22
              }
            ]
          },
          {
            "nome": "Silver Beyervilles",
            "treinador": {
              "nome": "Wyatt Haley",
              "genero": "masculino",
              "idade": 34
            },
            "participantes": [
              {
                "nome": "Shelby Pruitt",
                "genero": "feminino",
                "idade": 24
              },
              {
                "nome": "Stanton Lamb",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "Juarez Dodson",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Duffy Hale",
                "genero": "masculino",
                "idade": 26
              },
              {
                "nome": "Green Bentley",
                "genero": "masculino",
                "idade": 36
              },
              {
                "nome": "Katherine Serrano",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Maureen Ward",
                "genero": "feminino",
                "idade": 47
              },
              {
                "nome": "Morris Terry",
                "genero": "masculino",
                "idade": 46
              },
              {
                "nome": "Jeannie Ramos",
                "genero": "feminino",
                "idade": 29
              },
              {
                "nome": "Pace Shaw",
                "genero": "masculino",
                "idade": 48
              },
              {
                "nome": "Bernard Clark",
                "genero": "masculino",
                "idade": 48
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nome": "Ultra Coup",
    "esporte": "volei",
    "partidas": [
      {
        "placar": "6-2",
        "duracao": "1h9m51s",
        "times": [
          {
            "nome": "Punk Eastmonts",
            "treinador": {
              "nome": "Deann Cannon",
              "genero": "feminino",
              "idade": 37
            },
            "participantes": [
              {
                "nome": "Ross Acevedo",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Latonya Mayo",
                "genero": "feminino",
                "idade": 21
              },
              {
                "nome": "Beverly Sims",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Allen Malone",
                "genero": "masculino",
                "idade": 22
              },
              {
                "nome": "Lisa Morse",
                "genero": "feminino",
                "idade": 45
              },
              {
                "nome": "Medina Sawyer",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Clare Stone",
                "genero": "feminino",
                "idade": 38
              },
              {
                "nome": "Dotson Doyle",
                "genero": "masculino",
                "idade": 29
              },
              {
                "nome": "Karla Faulkner",
                "genero": "feminino",
                "idade": 44
              },
              {
                "nome": "Bates Hewitt",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Alejandra Church",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Allie Cardenas",
                "genero": "feminino",
                "idade": 37
              }
            ]
          },
          {
            "nome": "Awesome Voltas",
            "treinador": {
              "nome": "Geraldine Vaughn",
              "genero": "feminino",
              "idade": 32
            },
            "participantes": [
              {
                "nome": "Hawkins Benson",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Chelsea Jacobs",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Freeman Rich",
                "genero": "masculino",
                "idade": 18
              },
              {
                "nome": "James David",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Gilmore Bell",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Washington Farmer",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Bridgett Steele",
                "genero": "feminino",
                "idade": 15
              },
              {
                "nome": "Golden Hendricks",
                "genero": "masculino",
                "idade": 47
              },
              {
                "nome": "Amie Kirk",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Candy Burns",
                "genero": "feminino",
                "idade": 34
              },
              {
                "nome": "Deborah Tucker",
                "genero": "feminino",
                "idade": 26
              }
            ]
          }
        ]
      },
      {
        "placar": "4-0",
        "duracao": "3h50m39s",
        "times": [
          {
            "nome": "The Woodruffs",
            "treinador": {
              "nome": "Penny Coleman",
              "genero": "feminino",
              "idade": 36
            },
            "participantes": [
              {
                "nome": "Park Walker",
                "genero": "masculino",
                "idade": 22
              },
              {
                "nome": "Jillian Cortez",
                "genero": "feminino",
                "idade": 27
              },
              {
                "nome": "Brigitte Mccarty",
                "genero": "feminino",
                "idade": 41
              },
              {
                "nome": "Sheree Schultz",
                "genero": "feminino",
                "idade": 24
              },
              {
                "nome": "Walter Shannon",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Elliott Valenzuela",
                "genero": "masculino",
                "idade": 19
              },
              {
                "nome": "Louella Pollard",
                "genero": "feminino",
                "idade": 31
              },
              {
                "nome": "Jill Pearson",
                "genero": "feminino",
                "idade": 47
              },
              {
                "nome": "Kelley Oneil",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Ramirez Kim",
                "genero": "masculino",
                "idade": 26
              },
              {
                "nome": "Eve Orr",
                "genero": "feminino",
                "idade": 18
              }
            ]
          },
          {
            "nome": "Silver Marysvilles",
            "treinador": {
              "nome": "Brooks Whitfield",
              "genero": "masculino",
              "idade": 22
            },
            "participantes": [
              {
                "nome": "Annabelle Carver",
                "genero": "feminino",
                "idade": 28
              },
              {
                "nome": "Lott Lowery",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "Monica Diaz",
                "genero": "feminino",
                "idade": 46
              },
              {
                "nome": "Lila Knowles",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Bonita Owen",
                "genero": "feminino",
                "idade": 42
              },
              {
                "nome": "Herman Cain",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Bauer Rosa",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Jewel Holloway",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Mavis Reynolds",
                "genero": "feminino",
                "idade": 15
              }
            ]
          }
        ]
      },
      {
        "placar": "1-1",
        "duracao": "3h49m35s",
        "times": [
          {
            "nome": "Red Greenbackvilles",
            "treinador": {
              "nome": "Dana Briggs",
              "genero": "feminino",
              "idade": 43
            },
            "participantes": [
              {
                "nome": "Patrick Chapman",
                "genero": "masculino",
                "idade": 48
              },
              {
                "nome": "Salas Carpenter",
                "genero": "masculino",
                "idade": 40
              },
              {
                "nome": "Merritt Rosario",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Lindsey Jacobson",
                "genero": "masculino",
                "idade": 34
              },
              {
                "nome": "Grant Mcintyre",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Hale Allison",
                "genero": "masculino",
                "idade": 33
              },
              {
                "nome": "Snider Keith",
                "genero": "masculino",
                "idade": 25
              },
              {
                "nome": "Marian Dejesus",
                "genero": "feminino",
                "idade": 24
              },
              {
                "nome": "Trevino Powers",
                "genero": "masculino",
                "idade": 46
              },
              {
                "nome": "Emma Lyons",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "Young Ferrell",
                "genero": "feminino",
                "idade": 16
              },
              {
                "nome": "Vicky Sanders",
                "genero": "feminino",
                "idade": 40
              }
            ]
          },
          {
            "nome": "Explosive Rehrersburgs",
            "treinador": {
              "nome": "Bass Gonzales",
              "genero": "masculino",
              "idade": 24
            },
            "participantes": [
              {
                "nome": "Carolina Bowen",
                "genero": "feminino",
                "idade": 30
              },
              {
                "nome": "Elizabeth Guy",
                "genero": "feminino",
                "idade": 41
              },
              {
                "nome": "Carlson Langley",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Elisabeth Reyes",
                "genero": "feminino",
                "idade": 39
              },
              {
                "nome": "Peterson Huffman",
                "genero": "masculino",
                "idade": 35
              },
              {
                "nome": "Mercedes Duncan",
                "genero": "feminino",
                "idade": 19
              },
              {
                "nome": "Cassandra Cline",
                "genero": "feminino",
                "idade": 16
              },
              {
                "nome": "Fisher Randolph",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Russell Ford",
                "genero": "masculino",
                "idade": 19
              }
            ]
          }
        ]
      },
      {
        "placar": "4-2",
        "duracao": "1h27m9s",
        "times": [
          {
            "nome": "Red Abramss",
            "treinador": {
              "nome": "Lori Zimmerman",
              "genero": "feminino",
              "idade": 23
            },
            "participantes": [
              {
                "nome": "Ochoa Navarro",
                "genero": "masculino",
                "idade": 24
              },
              {
                "nome": "Constance Frost",
                "genero": "feminino",
                "idade": 40
              },
              {
                "nome": "Frieda Gay",
                "genero": "feminino",
                "idade": 44
              },
              {
                "nome": "Juliana Brewer",
                "genero": "feminino",
                "idade": 44
              },
              {
                "nome": "Benita Hopper",
                "genero": "feminino",
                "idade": 37
              },
              {
                "nome": "Pearlie Cabrera",
                "genero": "feminino",
                "idade": 34
              },
              {
                "nome": "June Whitaker",
                "genero": "feminino",
                "idade": 36
              },
              {
                "nome": "Josefina Waters",
                "genero": "feminino",
                "idade": 27
              },
              {
                "nome": "Carrie Dalton",
                "genero": "feminino",
                "idade": 39
              },
              {
                "nome": "Barton Dillard",
                "genero": "masculino",
                "idade": 20
              },
              {
                "nome": "Jolene Rodriguez",
                "genero": "feminino",
                "idade": 25
              },
              {
                "nome": "Bridgette Perkins",
                "genero": "feminino",
                "idade": 16
              }
            ]
          },
          {
            "nome": "Blue Chamizals",
            "treinador": {
              "nome": "Ruby Mcintosh",
              "genero": "feminino",
              "idade": 28
            },
            "participantes": [
              {
                "nome": "Justice Watkins",
                "genero": "masculino",
                "idade": 20
              },
              {
                "nome": "Foster Vang",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Sparks Cote",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Leola Carney",
                "genero": "feminino",
                "idade": 24
              },
              {
                "nome": "Weaver Gillespie",
                "genero": "masculino",
                "idade": 25
              },
              {
                "nome": "Kasey Livingston",
                "genero": "feminino",
                "idade": 37
              },
              {
                "nome": "Marshall Nunez",
                "genero": "masculino",
                "idade": 30
              },
              {
                "nome": "Roach Jackson",
                "genero": "masculino",
                "idade": 16
              },
              {
                "nome": "Cooper Dean",
                "genero": "masculino",
                "idade": 30
              },
              {
                "nome": "Michael Houston",
                "genero": "masculino",
                "idade": 35
              }
            ]
          }
        ]
      },
      {
        "placar": "4-2",
        "duracao": "3h42m0s",
        "times": [
          {
            "nome": "Silver Hollinss",
            "treinador": {
              "nome": "Dean Rivers",
              "genero": "masculino",
              "idade": 30
            },
            "participantes": [
              {
                "nome": "Samantha Romero",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Cash Leblanc",
                "genero": "masculino",
                "idade": 36
              },
              {
                "nome": "Simon Dudley",
                "genero": "masculino",
                "idade": 33
              },
              {
                "nome": "Scott Ball",
                "genero": "masculino",
                "idade": 21
              },
              {
                "nome": "Rodriguez Norman",
                "genero": "masculino",
                "idade": 18
              },
              {
                "nome": "Gates Douglas",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Macias Gilmore",
                "genero": "masculino",
                "idade": 38
              },
              {
                "nome": "Catherine Ballard",
                "genero": "feminino",
                "idade": 17
              },
              {
                "nome": "Calhoun Heath",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Alison Myers",
                "genero": "feminino",
                "idade": 44
              }
            ]
          },
          {
            "nome": "Punk Goodvilles",
            "treinador": {
              "nome": "Morrison Quinn",
              "genero": "masculino",
              "idade": 20
            },
            "participantes": [
              {
                "nome": "Rosa Fowler",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Denise Graham",
                "genero": "feminino",
                "idade": 30
              },
              {
                "nome": "Strong Dale",
                "genero": "masculino",
                "idade": 38
              },
              {
                "nome": "Tracie Cooley",
                "genero": "feminino",
                "idade": 31
              },
              {
                "nome": "Dianna Dunlap",
                "genero": "feminino",
                "idade": 17
              },
              {
                "nome": "Jefferson Rowland",
                "genero": "masculino",
                "idade": 48
              },
              {
                "nome": "Freida Glover",
                "genero": "feminino",
                "idade": 44
              },
              {
                "nome": "Iris Estrada",
                "genero": "feminino",
                "idade": 33
              },
              {
                "nome": "Gabriela Fischer",
                "genero": "feminino",
                "idade": 38
              },
              {
                "nome": "Stephens Elliott",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Gregory Golden",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Goodwin Burke",
                "genero": "masculino",
                "idade": 35
              }
            ]
          }
        ]
      },
      {
        "placar": "7-6",
        "duracao": "1h34m16s",
        "times": [
          {
            "nome": "Punk Callaghans",
            "treinador": {
              "nome": "Haney Guthrie",
              "genero": "masculino",
              "idade": 34
            },
            "participantes": [
              {
                "nome": "Roberta Castaneda",
                "genero": "feminino",
                "idade": 18
              },
              {
                "nome": "Ellen Downs",
                "genero": "feminino",
                "idade": 42
              },
              {
                "nome": "Oliver Reed",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Bertha Sullivan",
                "genero": "feminino",
                "idade": 31
              },
              {
                "nome": "Emerson Edwards",
                "genero": "masculino",
                "idade": 25
              },
              {
                "nome": "Grace Wilkerson",
                "genero": "feminino",
                "idade": 45
              },
              {
                "nome": "Long Savage",
                "genero": "masculino",
                "idade": 25
              },
              {
                "nome": "Barr Beasley",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Lucinda Odom",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "Barker Harris",
                "genero": "masculino",
                "idade": 40
              },
              {
                "nome": "Michelle Adams",
                "genero": "feminino",
                "idade": 20
              }
            ]
          },
          {
            "nome": "Awesome Shawmuts",
            "treinador": {
              "nome": "Lea Hurst",
              "genero": "feminino",
              "idade": 23
            },
            "participantes": [
              {
                "nome": "Ward Jensen",
                "genero": "masculino",
                "idade": 35
              },
              {
                "nome": "Silva Bates",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Earnestine Taylor",
                "genero": "feminino",
                "idade": 38
              },
              {
                "nome": "Bowers Roth",
                "genero": "masculino",
                "idade": 36
              },
              {
                "nome": "Jacquelyn Reeves",
                "genero": "feminino",
                "idade": 39
              },
              {
                "nome": "Georgina Holland",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Oneil Oneill",
                "genero": "masculino",
                "idade": 26
              },
              {
                "nome": "Janell Klein",
                "genero": "feminino",
                "idade": 25
              },
              {
                "nome": "Mcfarland Conway",
                "genero": "masculino",
                "idade": 46
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nome": "Fire Keksimus",
    "esporte": "futebol americano",
    "partidas": [
      {
        "placar": "3-0",
        "duracao": "1h31m35s",
        "times": [
          {
            "nome": "Red Goochlands",
            "treinador": {
              "nome": "Hannah Lancaster",
              "genero": "feminino",
              "idade": 18
            },
            "participantes": [
              {
                "nome": "Barbra Horn",
                "genero": "feminino",
                "idade": 28
              },
              {
                "nome": "Atkins Gonzalez",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Sweeney Murphy",
                "genero": "masculino",
                "idade": 22
              },
              {
                "nome": "Lamb Holder",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Dyer Mann",
                "genero": "masculino",
                "idade": 35
              },
              {
                "nome": "Ashley Carrillo",
                "genero": "feminino",
                "idade": 18
              },
              {
                "nome": "Myrna Christian",
                "genero": "feminino",
                "idade": 15
              },
              {
                "nome": "Smith Kent",
                "genero": "masculino",
                "idade": 35
              },
              {
                "nome": "Coleman Kinney",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Conner Boyle",
                "genero": "masculino",
                "idade": 17
              }
            ]
          },
          {
            "nome": "The Clearys",
            "treinador": {
              "nome": "Mathis Leon",
              "genero": "masculino",
              "idade": 31
            },
            "participantes": [
              {
                "nome": "Hobbs Spencer",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Ericka Jones",
                "genero": "feminino",
                "idade": 39
              },
              {
                "nome": "French Sherman",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Cochran Bernard",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Sue Wise",
                "genero": "feminino",
                "idade": 25
              },
              {
                "nome": "Brittany Carroll",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Slater Mcdonald",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "Margery Bowman",
                "genero": "feminino",
                "idade": 28
              },
              {
                "nome": "Louise Schmidt",
                "genero": "feminino",
                "idade": 28
              },
              {
                "nome": "Faye Hardy",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Irene Pittman",
                "genero": "feminino",
                "idade": 24
              },
              {
                "nome": "Kathleen Snow",
                "genero": "feminino",
                "idade": 21
              }
            ]
          }
        ]
      },
      {
        "placar": "3-6",
        "duracao": "2h54m32s",
        "times": [
          {
            "nome": "Red Sugartowns",
            "treinador": {
              "nome": "Madelyn Clarke",
              "genero": "feminino",
              "idade": 36
            },
            "participantes": [
              {
                "nome": "Wise Olson",
                "genero": "masculino",
                "idade": 38
              },
              {
                "nome": "Morin Hahn",
                "genero": "masculino",
                "idade": 40
              },
              {
                "nome": "Singleton Simon",
                "genero": "masculino",
                "idade": 21
              },
              {
                "nome": "Madden Flores",
                "genero": "masculino",
                "idade": 36
              },
              {
                "nome": "Rochelle Gentry",
                "genero": "feminino",
                "idade": 29
              },
              {
                "nome": "Nikki Harrison",
                "genero": "feminino",
                "idade": 42
              },
              {
                "nome": "Rivers Wallace",
                "genero": "masculino",
                "idade": 16
              },
              {
                "nome": "Velasquez Stout",
                "genero": "masculino",
                "idade": 21
              },
              {
                "nome": "Schmidt Ewing",
                "genero": "masculino",
                "idade": 34
              },
              {
                "nome": "Reeves Little",
                "genero": "masculino",
                "idade": 16
              }
            ]
          },
          {
            "nome": "Silver Carltons",
            "treinador": {
              "nome": "Harvey Lindsay",
              "genero": "masculino",
              "idade": 43
            },
            "participantes": [
              {
                "nome": "Harriet Williams",
                "genero": "feminino",
                "idade": 32
              },
              {
                "nome": "Harmon Le",
                "genero": "masculino",
                "idade": 34
              },
              {
                "nome": "Felicia Santana",
                "genero": "feminino",
                "idade": 28
              },
              {
                "nome": "Pitts Donovan",
                "genero": "masculino",
                "idade": 48
              },
              {
                "nome": "Mosley Best",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Maura Melton",
                "genero": "feminino",
                "idade": 40
              },
              {
                "nome": "Bridges Crosby",
                "genero": "masculino",
                "idade": 48
              },
              {
                "nome": "Jan Maxwell",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "Banks Farrell",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Mcgee Schroeder",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Wilson Rice",
                "genero": "masculino",
                "idade": 36
              },
              {
                "nome": "Workman Francis",
                "genero": "masculino",
                "idade": 47
              }
            ]
          }
        ]
      },
      {
        "placar": "7-6",
        "duracao": "2h11m19s",
        "times": [
          {
            "nome": "The Irwins",
            "treinador": {
              "nome": "Christina Paul",
              "genero": "feminino",
              "idade": 48
            },
            "participantes": [
              {
                "nome": "Paige Joseph",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Amanda Henson",
                "genero": "feminino",
                "idade": 34
              },
              {
                "nome": "Chambers Kemp",
                "genero": "masculino",
                "idade": 35
              },
              {
                "nome": "Janette Tate",
                "genero": "feminino",
                "idade": 37
              },
              {
                "nome": "Hancock Day",
                "genero": "masculino",
                "idade": 42
              },
              {
                "nome": "Lewis Landry",
                "genero": "masculino",
                "idade": 36
              },
              {
                "nome": "Minnie Webster",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Duncan Acosta",
                "genero": "masculino",
                "idade": 30
              },
              {
                "nome": "Bird Mckinney",
                "genero": "masculino",
                "idade": 34
              },
              {
                "nome": "Pugh Lopez",
                "genero": "masculino",
                "idade": 25
              },
              {
                "nome": "Short Martinez",
                "genero": "masculino",
                "idade": 33
              }
            ]
          },
          {
            "nome": "Red Calns",
            "treinador": {
              "nome": "Ursula Mcneil",
              "genero": "feminino",
              "idade": 21
            },
            "participantes": [
              {
                "nome": "Pamela Mcknight",
                "genero": "feminino",
                "idade": 15
              },
              {
                "nome": "Lynne Berg",
                "genero": "feminino",
                "idade": 36
              },
              {
                "nome": "Whitaker Pierce",
                "genero": "masculino",
                "idade": 25
              },
              {
                "nome": "Garza Harper",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Rhea Logan",
                "genero": "feminino",
                "idade": 37
              },
              {
                "nome": "Porter Benton",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Neal Lewis",
                "genero": "masculino",
                "idade": 33
              },
              {
                "nome": "Anita Butler",
                "genero": "feminino",
                "idade": 28
              },
              {
                "nome": "Beck Mills",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Austin Brennan",
                "genero": "masculino",
                "idade": 38
              },
              {
                "nome": "Rosario Rose",
                "genero": "feminino",
                "idade": 42
              },
              {
                "nome": "Rowland Good",
                "genero": "masculino",
                "idade": 47
              }
            ]
          }
        ]
      },
      {
        "placar": "1-5",
        "duracao": "3h47m53s",
        "times": [
          {
            "nome": "The Slovans",
            "treinador": {
              "nome": "Sophie Aguirre",
              "genero": "feminino",
              "idade": 16
            },
            "participantes": [
              {
                "nome": "Bradley Ayers",
                "genero": "masculino",
                "idade": 20
              },
              {
                "nome": "Maynard Mathis",
                "genero": "masculino",
                "idade": 25
              },
              {
                "nome": "Dillard Cameron",
                "genero": "masculino",
                "idade": 16
              },
              {
                "nome": "Angelia Pope",
                "genero": "feminino",
                "idade": 26
              },
              {
                "nome": "Pittman Dawson",
                "genero": "masculino",
                "idade": 42
              },
              {
                "nome": "Parker Raymond",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Nettie Mclean",
                "genero": "feminino",
                "idade": 27
              },
              {
                "nome": "Leslie James",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Althea Munoz",
                "genero": "feminino",
                "idade": 31
              },
              {
                "nome": "Steele Mayer",
                "genero": "masculino",
                "idade": 40
              }
            ]
          },
          {
            "nome": "Ferocious Fannetts",
            "treinador": {
              "nome": "Vanessa Mays",
              "genero": "feminino",
              "idade": 23
            },
            "participantes": [
              {
                "nome": "Marci Mitchell",
                "genero": "feminino",
                "idade": 46
              },
              {
                "nome": "Dorsey Buckner",
                "genero": "masculino",
                "idade": 16
              },
              {
                "nome": "Herrera Todd",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Leigh Yang",
                "genero": "feminino",
                "idade": 30
              },
              {
                "nome": "Vazquez Trujillo",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Nadine Prince",
                "genero": "feminino",
                "idade": 30
              },
              {
                "nome": "Candice Jennings",
                "genero": "feminino",
                "idade": 16
              },
              {
                "nome": "Buchanan Burt",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Hicks Osborn",
                "genero": "masculino",
                "idade": 16
              },
              {
                "nome": "Millie Workman",
                "genero": "feminino",
                "idade": 35
              }
            ]
          }
        ]
      },
      {
        "placar": "0-2",
        "duracao": "2h43m53s",
        "times": [
          {
            "nome": "Blue Boyds",
            "treinador": {
              "nome": "Newton Fry",
              "genero": "masculino",
              "idade": 27
            },
            "participantes": [
              {
                "nome": "Cortez Boyd",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Mendez Howard",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Horn Mcmahon",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Hull Richards",
                "genero": "masculino",
                "idade": 19
              },
              {
                "nome": "Melton Frank",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Hewitt Rocha",
                "genero": "masculino",
                "idade": 48
              },
              {
                "nome": "Nannie Ryan",
                "genero": "feminino",
                "idade": 18
              },
              {
                "nome": "Gonzalez Sellers",
                "genero": "masculino",
                "idade": 48
              },
              {
                "nome": "Berg Baldwin",
                "genero": "masculino",
                "idade": 23
              }
            ]
          },
          {
            "nome": "Blue Fillmores",
            "treinador": {
              "nome": "Erma Roy",
              "genero": "feminino",
              "idade": 35
            },
            "participantes": [
              {
                "nome": "Mueller King",
                "genero": "masculino",
                "idade": 21
              },
              {
                "nome": "Betsy Mercer",
                "genero": "feminino",
                "idade": 45
              },
              {
                "nome": "Sutton Knight",
                "genero": "masculino",
                "idade": 29
              },
              {
                "nome": "Dee Wiley",
                "genero": "feminino",
                "idade": 15
              },
              {
                "nome": "Alberta Shepherd",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "Carr Santiago",
                "genero": "masculino",
                "idade": 24
              },
              {
                "nome": "Terrell Shelton",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Noelle Fields",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Trina Daniels",
                "genero": "feminino",
                "idade": 36
              },
              {
                "nome": "Virginia Finley",
                "genero": "feminino",
                "idade": 32
              },
              {
                "nome": "Kelly Sargent",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Hernandez Torres",
                "genero": "masculino",
                "idade": 41
              }
            ]
          }
        ]
      },
      {
        "placar": "0-8",
        "duracao": "1h13m59s",
        "times": [
          {
            "nome": "Awesome Katonahs",
            "treinador": {
              "nome": "Good Harvey",
              "genero": "masculino",
              "idade": 44
            },
            "participantes": [
              {
                "nome": "Burnett Abbott",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Wells Norton",
                "genero": "masculino",
                "idade": 35
              },
              {
                "nome": "Keri Cherry",
                "genero": "feminino",
                "idade": 40
              },
              {
                "nome": "Alta Hancock",
                "genero": "feminino",
                "idade": 19
              },
              {
                "nome": "Addie Castillo",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Beatrice Poole",
                "genero": "feminino",
                "idade": 32
              },
              {
                "nome": "Dunn Avila",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "Rosalie Fulton",
                "genero": "feminino",
                "idade": 21
              },
              {
                "nome": "Prince Peterson",
                "genero": "masculino",
                "idade": 26
              }
            ]
          },
          {
            "nome": "Silver Wallands",
            "treinador": {
              "nome": "Horne Jefferson",
              "genero": "masculino",
              "idade": 41
            },
            "participantes": [
              {
                "nome": "Berry Duran",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Bradford Harmon",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Chris Johns",
                "genero": "feminino",
                "idade": 37
              },
              {
                "nome": "Hallie Ingram",
                "genero": "feminino",
                "idade": 37
              },
              {
                "nome": "Holcomb Zamora",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Humphrey Vazquez",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Jennie Coffey",
                "genero": "feminino",
                "idade": 21
              },
              {
                "nome": "Jerry Keller",
                "genero": "feminino",
                "idade": 27
              },
              {
                "nome": "Maria Sheppard",
                "genero": "feminino",
                "idade": 25
              }
            ]
          }
        ]
      },
      {
        "placar": "4-1",
        "duracao": "2h19m50s",
        "times": [
          {
            "nome": "Blue Ahwahnees",
            "treinador": {
              "nome": "Gillespie Kline",
              "genero": "masculino",
              "idade": 15
            },
            "participantes": [
              {
                "nome": "Concetta Sampson",
                "genero": "feminino",
                "idade": 17
              },
              {
                "nome": "Tanisha Stuart",
                "genero": "feminino",
                "idade": 34
              },
              {
                "nome": "Mandy Salas",
                "genero": "feminino",
                "idade": 27
              },
              {
                "nome": "Tracey Hatfield",
                "genero": "feminino",
                "idade": 44
              },
              {
                "nome": "Earline Waller",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "Mclean Welch",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Alfreda Higgins",
                "genero": "feminino",
                "idade": 43
              },
              {
                "nome": "Vance Warren",
                "genero": "masculino",
                "idade": 45
              },
              {
                "nome": "Boyle Gutierrez",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Alvarado Miller",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Henderson Andrews",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Henrietta Buchanan",
                "genero": "feminino",
                "idade": 29
              }
            ]
          },
          {
            "nome": "Blue Freeburns",
            "treinador": {
              "nome": "Robert Gates",
              "genero": "feminino",
              "idade": 32
            },
            "participantes": [
              {
                "nome": "Gibbs Travis",
                "genero": "masculino",
                "idade": 19
              },
              {
                "nome": "Farmer Howe",
                "genero": "masculino",
                "idade": 18
              },
              {
                "nome": "Elinor Pugh",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Fields William",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Farley Adkins",
                "genero": "masculino",
                "idade": 38
              },
              {
                "nome": "Perry Wagner",
                "genero": "masculino",
                "idade": 33
              },
              {
                "nome": "Susanne Blake",
                "genero": "feminino",
                "idade": 29
              },
              {
                "nome": "Pierce Kramer",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "White Herring",
                "genero": "masculino",
                "idade": 21
              },
              {
                "nome": "Brooke Walter",
                "genero": "feminino",
                "idade": 40
              }
            ]
          }
        ]
      },
      {
        "placar": "7-4",
        "duracao": "3h11m57s",
        "times": [
          {
            "nome": "Ferocious Winfreds",
            "treinador": {
              "nome": "Marquita Sloan",
              "genero": "feminino",
              "idade": 46
            },
            "participantes": [
              {
                "nome": "Everett Simmons",
                "genero": "masculino",
                "idade": 33
              },
              {
                "nome": "Sloan Cantrell",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Casey Camacho",
                "genero": "masculino",
                "idade": 26
              },
              {
                "nome": "Paulette Peck",
                "genero": "feminino",
                "idade": 19
              },
              {
                "nome": "Richmond Bolton",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Stafford Salinas",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "Lindsay Morgan",
                "genero": "masculino",
                "idade": 48
              },
              {
                "nome": "Nunez Underwood",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Maddox Matthews",
                "genero": "masculino",
                "idade": 45
              },
              {
                "nome": "Huff Mcclure",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Goodman Fletcher",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Mindy Love",
                "genero": "feminino",
                "idade": 24
              }
            ]
          },
          {
            "nome": "Explosive Gasquets",
            "treinador": {
              "nome": "Jenna Mcgowan",
              "genero": "feminino",
              "idade": 48
            },
            "participantes": [
              {
                "nome": "Alma England",
                "genero": "feminino",
                "idade": 40
              },
              {
                "nome": "Flynn Anthony",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Leann Page",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Rachelle Larsen",
                "genero": "feminino",
                "idade": 32
              },
              {
                "nome": "Hoover Guerra",
                "genero": "masculino",
                "idade": 24
              },
              {
                "nome": "Lydia Rowe",
                "genero": "feminino",
                "idade": 32
              },
              {
                "nome": "Crane Kirkland",
                "genero": "masculino",
                "idade": 24
              },
              {
                "nome": "Boyer Burgess",
                "genero": "masculino",
                "idade": 46
              },
              {
                "nome": "Padilla Collier",
                "genero": "masculino",
                "idade": 32
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nome": "Boomer Shine",
    "esporte": "futebol americano",
    "partidas": [
      {
        "placar": "4-7",
        "duracao": "3h41m44s",
        "times": [
          {
            "nome": "Punk Bergoos",
            "treinador": {
              "nome": "Bell Walls",
              "genero": "masculino",
              "idade": 40
            },
            "participantes": [
              {
                "nome": "Jackie Lara",
                "genero": "feminino",
                "idade": 17
              },
              {
                "nome": "Patterson Norris",
                "genero": "masculino",
                "idade": 22
              },
              {
                "nome": "Caldwell Padilla",
                "genero": "masculino",
                "idade": 34
              },
              {
                "nome": "Kennedy Booth",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Esther Sosa",
                "genero": "feminino",
                "idade": 27
              },
              {
                "nome": "Foreman Craig",
                "genero": "masculino",
                "idade": 48
              },
              {
                "nome": "Rivas Chaney",
                "genero": "masculino",
                "idade": 34
              },
              {
                "nome": "Laura Mcguire",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Jami Snider",
                "genero": "feminino",
                "idade": 16
              },
              {
                "nome": "Hurley Avery",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Pennington Mcmillan",
                "genero": "masculino",
                "idade": 29
              },
              {
                "nome": "Charity Warner",
                "genero": "feminino",
                "idade": 33
              }
            ]
          },
          {
            "nome": "The Lindcoves",
            "treinador": {
              "nome": "Lucy Booker",
              "genero": "feminino",
              "idade": 36
            },
            "participantes": [
              {
                "nome": "Melba Mcfadden",
                "genero": "feminino",
                "idade": 36
              },
              {
                "nome": "Gale Lawrence",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Mccoy Black",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Leah Dillon",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Jocelyn Mcleod",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Rodriquez Hooper",
                "genero": "masculino",
                "idade": 24
              },
              {
                "nome": "Shawna Spence",
                "genero": "feminino",
                "idade": 21
              },
              {
                "nome": "Lloyd Hoffman",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "Alicia Valencia",
                "genero": "feminino",
                "idade": 29
              },
              {
                "nome": "Mara Tyson",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Katelyn Key",
                "genero": "feminino",
                "idade": 15
              },
              {
                "nome": "Marion Perry",
                "genero": "feminino",
                "idade": 35
              }
            ]
          }
        ]
      },
      {
        "placar": "4-8",
        "duracao": "1h56m31s",
        "times": [
          {
            "nome": "Silver Kansass",
            "treinador": {
              "nome": "Eva Craft",
              "genero": "feminino",
              "idade": 21
            },
            "participantes": [
              {
                "nome": "Tommie Weber",
                "genero": "feminino",
                "idade": 30
              },
              {
                "nome": "Carmela Richmond",
                "genero": "feminino",
                "idade": 38
              },
              {
                "nome": "James Stein",
                "genero": "feminino",
                "idade": 44
              },
              {
                "nome": "Herring Roberts",
                "genero": "masculino",
                "idade": 29
              },
              {
                "nome": "Lily Barrera",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Lourdes Jordan",
                "genero": "feminino",
                "idade": 46
              },
              {
                "nome": "Serena Atkins",
                "genero": "feminino",
                "idade": 26
              },
              {
                "nome": "Silvia Barton",
                "genero": "feminino",
                "idade": 18
              },
              {
                "nome": "Duke Albert",
                "genero": "masculino",
                "idade": 38
              },
              {
                "nome": "Rena Hartman",
                "genero": "feminino",
                "idade": 37
              },
              {
                "nome": "Donna Donaldson",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "Fischer Tillman",
                "genero": "masculino",
                "idade": 40
              }
            ]
          },
          {
            "nome": "Red Condons",
            "treinador": {
              "nome": "Alana Buckley",
              "genero": "feminino",
              "idade": 28
            },
            "participantes": [
              {
                "nome": "Sallie Cash",
                "genero": "feminino",
                "idade": 29
              },
              {
                "nome": "Walton Pitts",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Sharlene Erickson",
                "genero": "feminino",
                "idade": 41
              },
              {
                "nome": "Dalton Vance",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Haynes Stephenson",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Jordan Yates",
                "genero": "masculino",
                "idade": 34
              },
              {
                "nome": "Key Bryant",
                "genero": "masculino",
                "idade": 38
              },
              {
                "nome": "Tammi Herman",
                "genero": "feminino",
                "idade": 46
              },
              {
                "nome": "Salinas Potts",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Esmeralda Battle",
                "genero": "feminino",
                "idade": 27
              },
              {
                "nome": "Dollie Molina",
                "genero": "feminino",
                "idade": 27
              }
            ]
          }
        ]
      },
      {
        "placar": "3-4",
        "duracao": "2h57m38s",
        "times": [
          {
            "nome": "The Dixonvilles",
            "treinador": {
              "nome": "Kathie Mckay",
              "genero": "feminino",
              "idade": 17
            },
            "participantes": [
              {
                "nome": "Copeland Middleton",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Freda Mercado",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Marietta Mcpherson",
                "genero": "feminino",
                "idade": 32
              },
              {
                "nome": "Mccall Cervantes",
                "genero": "masculino",
                "idade": 24
              },
              {
                "nome": "Aileen Young",
                "genero": "feminino",
                "idade": 41
              },
              {
                "nome": "Miranda Patton",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Janis Clements",
                "genero": "feminino",
                "idade": 31
              },
              {
                "nome": "Higgins Conrad",
                "genero": "masculino",
                "idade": 46
              },
              {
                "nome": "Jensen Parks",
                "genero": "masculino",
                "idade": 22
              }
            ]
          },
          {
            "nome": "Red Weeksvilles",
            "treinador": {
              "nome": "Maxine Graves",
              "genero": "feminino",
              "idade": 37
            },
            "participantes": [
              {
                "nome": "Greer Lucas",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Crystal Joyner",
                "genero": "feminino",
                "idade": 21
              },
              {
                "nome": "Shaw Dunn",
                "genero": "masculino",
                "idade": 25
              },
              {
                "nome": "Alice Huber",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Jerri Goodwin",
                "genero": "feminino",
                "idade": 36
              },
              {
                "nome": "Jenifer Mccall",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Alba Martin",
                "genero": "feminino",
                "idade": 34
              },
              {
                "nome": "Lucas Ware",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Flossie Lowe",
                "genero": "feminino",
                "idade": 24
              },
              {
                "nome": "Rosemary Wolfe",
                "genero": "feminino",
                "idade": 15
              }
            ]
          }
        ]
      },
      {
        "placar": "8-8",
        "duracao": "3h48m27s",
        "times": [
          {
            "nome": "Explosive Harmons",
            "treinador": {
              "nome": "Diann Sexton",
              "genero": "feminino",
              "idade": 42
            },
            "participantes": [
              {
                "nome": "Aurora Garrett",
                "genero": "feminino",
                "idade": 31
              },
              {
                "nome": "Abigail Pratt",
                "genero": "feminino",
                "idade": 26
              },
              {
                "nome": "Stone Flowers",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Jenkins Willis",
                "genero": "masculino",
                "idade": 21
              },
              {
                "nome": "Marguerite Roach",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "Gwen Petty",
                "genero": "feminino",
                "idade": 16
              },
              {
                "nome": "Anastasia Pate",
                "genero": "feminino",
                "idade": 19
              },
              {
                "nome": "Barron Hanson",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Rosa Moran",
                "genero": "feminino",
                "idade": 15
              },
              {
                "nome": "Barlow Hutchinson",
                "genero": "masculino",
                "idade": 26
              }
            ]
          },
          {
            "nome": "Awesome Logans",
            "treinador": {
              "nome": "Nadia Fuller",
              "genero": "feminino",
              "idade": 20
            },
            "participantes": [
              {
                "nome": "Oconnor Stephens",
                "genero": "masculino",
                "idade": 40
              },
              {
                "nome": "Odonnell Alexander",
                "genero": "masculino",
                "idade": 34
              },
              {
                "nome": "Concepcion Christensen",
                "genero": "feminino",
                "idade": 28
              },
              {
                "nome": "Matilda Morris",
                "genero": "feminino",
                "idade": 28
              },
              {
                "nome": "Penelope Bender",
                "genero": "feminino",
                "idade": 46
              },
              {
                "nome": "Lora Puckett",
                "genero": "feminino",
                "idade": 41
              },
              {
                "nome": "Small Mccullough",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "Preston Giles",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Ramsey Ross",
                "genero": "masculino",
                "idade": 48
              },
              {
                "nome": "Barrett Suarez",
                "genero": "masculino",
                "idade": 23
              },
              {
                "nome": "Mia Mosley",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Ruthie Fitzgerald",
                "genero": "feminino",
                "idade": 45
              }
            ]
          }
        ]
      },
      {
        "placar": "3-1",
        "duracao": "3h55m13s",
        "times": [
          {
            "nome": "The Westwoods",
            "treinador": {
              "nome": "Joy Chase",
              "genero": "feminino",
              "idade": 16
            },
            "participantes": [
              {
                "nome": "Harrison Lambert",
                "genero": "masculino",
                "idade": 16
              },
              {
                "nome": "Ayers Saunders",
                "genero": "masculino",
                "idade": 42
              },
              {
                "nome": "Gomez Arnold",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Keith Sanchez",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Davidson Scott",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Frances Rodgers",
                "genero": "feminino",
                "idade": 39
              },
              {
                "nome": "Eileen Griffin",
                "genero": "feminino",
                "idade": 26
              },
              {
                "nome": "Marta Mcfarland",
                "genero": "feminino",
                "idade": 25
              },
              {
                "nome": "Suzette Melendez",
                "genero": "feminino",
                "idade": 29
              },
              {
                "nome": "Mitchell Beck",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Page Wall",
                "genero": "masculino",
                "idade": 17
              }
            ]
          },
          {
            "nome": "Silver Belfairs",
            "treinador": {
              "nome": "Hart Mcdowell",
              "genero": "masculino",
              "idade": 48
            },
            "participantes": [
              {
                "nome": "Mcdaniel Wooten",
                "genero": "masculino",
                "idade": 19
              },
              {
                "nome": "Montoya Leonard",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Blackburn Levy",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Tillman Campbell",
                "genero": "masculino",
                "idade": 26
              },
              {
                "nome": "Cindy Guerrero",
                "genero": "feminino",
                "idade": 18
              },
              {
                "nome": "Lorraine Bullock",
                "genero": "feminino",
                "idade": 32
              },
              {
                "nome": "Fern Mccarthy",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "Cecilia Carlson",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "Leila Gamble",
                "genero": "feminino",
                "idade": 37
              },
              {
                "nome": "Cornelia Frederick",
                "genero": "feminino",
                "idade": 37
              }
            ]
          }
        ]
      },
      {
        "placar": "6-6",
        "duracao": "3h12m9s",
        "times": [
          {
            "nome": "Red Maurys",
            "treinador": {
              "nome": "Lowery Roman",
              "genero": "masculino",
              "idade": 16
            },
            "participantes": [
              {
                "nome": "Sears Charles",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Anderson Becker",
                "genero": "masculino",
                "idade": 47
              },
              {
                "nome": "Donovan Williamson",
                "genero": "masculino",
                "idade": 33
              },
              {
                "nome": "Sharpe Byrd",
                "genero": "masculino",
                "idade": 20
              },
              {
                "nome": "Holder Reid",
                "genero": "masculino",
                "idade": 23
              },
              {
                "nome": "Mona Kidd",
                "genero": "feminino",
                "idade": 25
              },
              {
                "nome": "Alyssa Mueller",
                "genero": "feminino",
                "idade": 36
              },
              {
                "nome": "Paula Henderson",
                "genero": "feminino",
                "idade": 16
              },
              {
                "nome": "Rich Frazier",
                "genero": "masculino",
                "idade": 22
              },
              {
                "nome": "Guthrie Reese",
                "genero": "masculino",
                "idade": 22
              }
            ]
          },
          {
            "nome": "Red Thatchers",
            "treinador": {
              "nome": "Angelica Johnston",
              "genero": "feminino",
              "idade": 42
            },
            "participantes": [
              {
                "nome": "Kay Crane",
                "genero": "feminino",
                "idade": 25
              },
              {
                "nome": "Heidi Foster",
                "genero": "feminino",
                "idade": 27
              },
              {
                "nome": "Rollins Slater",
                "genero": "masculino",
                "idade": 46
              },
              {
                "nome": "Lottie Mooney",
                "genero": "feminino",
                "idade": 28
              },
              {
                "nome": "Miles Cunningham",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "Downs Jenkins",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Molina Stevenson",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Kaitlin Morales",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Camacho Crawford",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Pruitt Marshall",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Christian Henry",
                "genero": "masculino",
                "idade": 18
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nome": "Galaxy Shine",
    "esporte": "overwatch",
    "partidas": [
      {
        "placar": "3-7",
        "duracao": "2h18m43s",
        "times": [
          {
            "nome": "Explosive Tiogas",
            "treinador": {
              "nome": "Courtney Hammond",
              "genero": "feminino",
              "idade": 43
            },
            "participantes": [
              {
                "nome": "Phelps Hyde",
                "genero": "masculino",
                "idade": 22
              },
              {
                "nome": "Melendez Cotton",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Dorthy Beach",
                "genero": "feminino",
                "idade": 29
              },
              {
                "nome": "Neva Neal",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Winifred Davenport",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Mason Carson",
                "genero": "masculino",
                "idade": 42
              },
              {
                "nome": "Kristin Moody",
                "genero": "feminino",
                "idade": 21
              },
              {
                "nome": "Ballard Floyd",
                "genero": "masculino",
                "idade": 21
              },
              {
                "nome": "Estrada Rush",
                "genero": "masculino",
                "idade": 45
              },
              {
                "nome": "Estela May",
                "genero": "feminino",
                "idade": 43
              }
            ]
          },
          {
            "nome": "Blue Tuttles",
            "treinador": {
              "nome": "Chandra Oliver",
              "genero": "feminino",
              "idade": 34
            },
            "participantes": [
              {
                "nome": "Lula Clemons",
                "genero": "feminino",
                "idade": 42
              },
              {
                "nome": "Riley Kaufman",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Fernandez Porter",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Mcneil Sweeney",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Gould Marquez",
                "genero": "masculino",
                "idade": 18
              },
              {
                "nome": "Fuller Aguilar",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Nora Summers",
                "genero": "feminino",
                "idade": 30
              },
              {
                "nome": "Shelia Garcia",
                "genero": "feminino",
                "idade": 33
              },
              {
                "nome": "Angelique Hess",
                "genero": "feminino",
                "idade": 34
              },
              {
                "nome": "Burgess Wilkinson",
                "genero": "masculino",
                "idade": 21
              },
              {
                "nome": "Luz Goff",
                "genero": "feminino",
                "idade": 44
              },
              {
                "nome": "Cherry Medina",
                "genero": "masculino",
                "idade": 27
              }
            ]
          }
        ]
      },
      {
        "placar": "5-7",
        "duracao": "3h34m28s",
        "times": [
          {
            "nome": "Blue Brewsters",
            "treinador": {
              "nome": "Harrington Ochoa",
              "genero": "masculino",
              "idade": 16
            },
            "participantes": [
              {
                "nome": "Mildred Nguyen",
                "genero": "feminino",
                "idade": 28
              },
              {
                "nome": "Baxter Baxter",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Lakeisha Weaver",
                "genero": "feminino",
                "idade": 38
              },
              {
                "nome": "Donaldson Washington",
                "genero": "masculino",
                "idade": 46
              },
              {
                "nome": "Carmen Dyer",
                "genero": "feminino",
                "idade": 34
              },
              {
                "nome": "Vasquez Hood",
                "genero": "masculino",
                "idade": 46
              },
              {
                "nome": "Melissa Sharp",
                "genero": "feminino",
                "idade": 31
              },
              {
                "nome": "Edith Chandler",
                "genero": "feminino",
                "idade": 31
              },
              {
                "nome": "Antoinette Phillips",
                "genero": "feminino",
                "idade": 41
              }
            ]
          },
          {
            "nome": "Awesome Umapines",
            "treinador": {
              "nome": "Sharp Barnett",
              "genero": "masculino",
              "idade": 48
            },
            "participantes": [
              {
                "nome": "Colette Mullins",
                "genero": "feminino",
                "idade": 24
              },
              {
                "nome": "Cantu Newton",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Gordon Clayton",
                "genero": "masculino",
                "idade": 47
              },
              {
                "nome": "Browning Hull",
                "genero": "masculino",
                "idade": 33
              },
              {
                "nome": "Dominique Cole",
                "genero": "feminino",
                "idade": 40
              },
              {
                "nome": "Clarke Robbins",
                "genero": "masculino",
                "idade": 29
              },
              {
                "nome": "Martinez Woodard",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Jenny Lloyd",
                "genero": "feminino",
                "idade": 32
              },
              {
                "nome": "Wilkins Velazquez",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Meyer Compton",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Georgette Horne",
                "genero": "feminino",
                "idade": 23
              }
            ]
          }
        ]
      },
      {
        "placar": "1-7",
        "duracao": "3h29m24s",
        "times": [
          {
            "nome": "Punk Wildwoods",
            "treinador": {
              "nome": "Clements Irwin",
              "genero": "masculino",
              "idade": 47
            },
            "participantes": [
              {
                "nome": "Ewing Durham",
                "genero": "masculino",
                "idade": 42
              },
              {
                "nome": "Herminia Hansen",
                "genero": "feminino",
                "idade": 19
              },
              {
                "nome": "Jasmine Maldonado",
                "genero": "feminino",
                "idade": 46
              },
              {
                "nome": "Hurst Sparks",
                "genero": "masculino",
                "idade": 30
              },
              {
                "nome": "Leblanc Foreman",
                "genero": "masculino",
                "idade": 29
              },
              {
                "nome": "Tonya Sears",
                "genero": "feminino",
                "idade": 37
              },
              {
                "nome": "Lauren Davis",
                "genero": "feminino",
                "idade": 36
              },
              {
                "nome": "Sonja Herrera",
                "genero": "feminino",
                "idade": 29
              },
              {
                "nome": "Morton Barron",
                "genero": "masculino",
                "idade": 33
              },
              {
                "nome": "Leanne Weiss",
                "genero": "feminino",
                "idade": 16
              },
              {
                "nome": "Franklin Delacruz",
                "genero": "masculino",
                "idade": 29
              }
            ]
          },
          {
            "nome": "Silver Magnolias",
            "treinador": {
              "nome": "Vaughan Bass",
              "genero": "masculino",
              "idade": 24
            },
            "participantes": [
              {
                "nome": "Frye Calhoun",
                "genero": "masculino",
                "idade": 20
              },
              {
                "nome": "Ratliff Miranda",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Twila Townsend",
                "genero": "feminino",
                "idade": 33
              },
              {
                "nome": "Dona Haney",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Cynthia Bowers",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Snyder Bridges",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "Stefanie Anderson",
                "genero": "feminino",
                "idade": 30
              },
              {
                "nome": "Whitney Head",
                "genero": "feminino",
                "idade": 39
              },
              {
                "nome": "Lynch Ellis",
                "genero": "masculino",
                "idade": 38
              },
              {
                "nome": "Britney French",
                "genero": "feminino",
                "idade": 21
              }
            ]
          }
        ]
      },
      {
        "placar": "5-2",
        "duracao": "3h9m26s",
        "times": [
          {
            "nome": "Silver Dyckesvilles",
            "treinador": {
              "nome": "Noble Webb",
              "genero": "masculino",
              "idade": 40
            },
            "participantes": [
              {
                "nome": "Webb Rutledge",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Letitia Russell",
                "genero": "feminino",
                "idade": 44
              },
              {
                "nome": "Janine Cleveland",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Bette Byers",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Maryellen Galloway",
                "genero": "feminino",
                "idade": 21
              },
              {
                "nome": "Brennan Holmes",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Julia Wong",
                "genero": "feminino",
                "idade": 39
              },
              {
                "nome": "Ronda Ramsey",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Ellison Copeland",
                "genero": "masculino",
                "idade": 40
              },
              {
                "nome": "Tania Parrish",
                "genero": "feminino",
                "idade": 21
              }
            ]
          },
          {
            "nome": "Ferocious Kraemers",
            "treinador": {
              "nome": "Reva Osborne",
              "genero": "feminino",
              "idade": 34
            },
            "participantes": [
              {
                "nome": "Jeannette Fisher",
                "genero": "feminino",
                "idade": 38
              },
              {
                "nome": "Carissa Harrell",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Lolita Emerson",
                "genero": "feminino",
                "idade": 31
              },
              {
                "nome": "Rebecca Terrell",
                "genero": "feminino",
                "idade": 33
              },
              {
                "nome": "Gilbert Wilcox",
                "genero": "masculino",
                "idade": 19
              },
              {
                "nome": "Solomon House",
                "genero": "masculino",
                "idade": 22
              },
              {
                "nome": "Fowler Berger",
                "genero": "masculino",
                "idade": 30
              },
              {
                "nome": "Head Massey",
                "genero": "masculino",
                "idade": 37
              },
              {
                "nome": "Jennings Tran",
                "genero": "masculino",
                "idade": 47
              },
              {
                "nome": "Krista Forbes",
                "genero": "feminino",
                "idade": 35
              }
            ]
          }
        ]
      },
      {
        "placar": "8-4",
        "duracao": "1h28m8s",
        "times": [
          {
            "nome": "Silver Lowgaps",
            "treinador": {
              "nome": "Cleveland Payne",
              "genero": "masculino",
              "idade": 45
            },
            "participantes": [
              {
                "nome": "Delacruz Holt",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Jackson Macdonald",
                "genero": "masculino",
                "idade": 19
              },
              {
                "nome": "Willie Collins",
                "genero": "feminino",
                "idade": 43
              },
              {
                "nome": "Lynnette Beard",
                "genero": "feminino",
                "idade": 30
              },
              {
                "nome": "Tammie Koch",
                "genero": "feminino",
                "idade": 34
              },
              {
                "nome": "Josie Castro",
                "genero": "feminino",
                "idade": 47
              },
              {
                "nome": "Katie Mcgee",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Melinda Tyler",
                "genero": "feminino",
                "idade": 27
              },
              {
                "nome": "Elsa Watson",
                "genero": "feminino",
                "idade": 43
              }
            ]
          },
          {
            "nome": "Ferocious Delcos",
            "treinador": {
              "nome": "Rasmussen Glass",
              "genero": "masculino",
              "idade": 42
            },
            "participantes": [
              {
                "nome": "Lakisha Stokes",
                "genero": "feminino",
                "idade": 29
              },
              {
                "nome": "Faulkner Wolf",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Bianca Whitehead",
                "genero": "feminino",
                "idade": 45
              },
              {
                "nome": "Mari Hodges",
                "genero": "feminino",
                "idade": 28
              },
              {
                "nome": "Yang Vega",
                "genero": "masculino",
                "idade": 40
              },
              {
                "nome": "Price Decker",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "Ana English",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "William Joyce",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Patrice Mckenzie",
                "genero": "feminino",
                "idade": 38
              },
              {
                "nome": "Blevins Franklin",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Raquel Hamilton",
                "genero": "feminino",
                "idade": 48
              }
            ]
          }
        ]
      },
      {
        "placar": "7-1",
        "duracao": "3h4m54s",
        "times": [
          {
            "nome": "Ferocious Deputys",
            "treinador": {
              "nome": "Cole Powell",
              "genero": "masculino",
              "idade": 38
            },
            "participantes": [
              {
                "nome": "Jarvis Benjamin",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Reilly Deleon",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Mcleod Mccray",
                "genero": "masculino",
                "idade": 34
              },
              {
                "nome": "Fleming Snyder",
                "genero": "masculino",
                "idade": 48
              },
              {
                "nome": "Victoria Hunt",
                "genero": "feminino",
                "idade": 37
              },
              {
                "nome": "Lola Manning",
                "genero": "feminino",
                "idade": 18
              },
              {
                "nome": "Yvonne Huff",
                "genero": "feminino",
                "idade": 18
              },
              {
                "nome": "Nola Carey",
                "genero": "feminino",
                "idade": 43
              },
              {
                "nome": "Janelle Gaines",
                "genero": "feminino",
                "idade": 31
              },
              {
                "nome": "Whitehead Mcclain",
                "genero": "masculino",
                "idade": 20
              },
              {
                "nome": "Saunders Wade",
                "genero": "masculino",
                "idade": 42
              }
            ]
          },
          {
            "nome": "Ferocious Mansfields",
            "treinador": {
              "nome": "Hillary Everett",
              "genero": "feminino",
              "idade": 28
            },
            "participantes": [
              {
                "nome": "Camille Luna",
                "genero": "feminino",
                "idade": 31
              },
              {
                "nome": "Gallagher Frye",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Rojas Sutton",
                "genero": "masculino",
                "idade": 16
              },
              {
                "nome": "Jaime Peters",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Mariana Price",
                "genero": "feminino",
                "idade": 17
              },
              {
                "nome": "Little Tanner",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Sandy Ayala",
                "genero": "feminino",
                "idade": 47
              },
              {
                "nome": "Albert Merrill",
                "genero": "masculino",
                "idade": 34
              },
              {
                "nome": "Charmaine Maynard",
                "genero": "feminino",
                "idade": 40
              }
            ]
          }
        ]
      },
      {
        "placar": "3-5",
        "duracao": "2h42m22s",
        "times": [
          {
            "nome": "Awesome Boomers",
            "treinador": {
              "nome": "Hays Ortega",
              "genero": "masculino",
              "idade": 38
            },
            "participantes": [
              {
                "nome": "Nichole Turner",
                "genero": "feminino",
                "idade": 37
              },
              {
                "nome": "Janna Drake",
                "genero": "feminino",
                "idade": 28
              },
              {
                "nome": "Corine Petersen",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Aurelia Lester",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Valencia Vaughan",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Shields Gilbert",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Poole Davidson",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Brittney Skinner",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "Dorothy Carr",
                "genero": "feminino",
                "idade": 36
              },
              {
                "nome": "Cathryn Odonnell",
                "genero": "feminino",
                "idade": 40
              },
              {
                "nome": "Mckee Witt",
                "genero": "masculino",
                "idade": 30
              },
              {
                "nome": "Giles Blackwell",
                "genero": "masculino",
                "idade": 33
              }
            ]
          },
          {
            "nome": "The Spokanes",
            "treinador": {
              "nome": "Vilma Stewart",
              "genero": "feminino",
              "idade": 24
            },
            "participantes": [
              {
                "nome": "Nguyen Gregory",
                "genero": "masculino",
                "idade": 34
              },
              {
                "nome": "Amparo Garrison",
                "genero": "feminino",
                "idade": 21
              },
              {
                "nome": "Calderon Mack",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Jeri Lane",
                "genero": "feminino",
                "idade": 36
              },
              {
                "nome": "Hill Dominguez",
                "genero": "masculino",
                "idade": 26
              },
              {
                "nome": "Puckett Chan",
                "genero": "masculino",
                "idade": 24
              },
              {
                "nome": "Gilliam Gallagher",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Robin Strong",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "Beasley Ratliff",
                "genero": "masculino",
                "idade": 26
              }
            ]
          }
        ]
      },
      {
        "placar": "1-6",
        "duracao": "3h37m36s",
        "times": [
          {
            "nome": "The Forestburgs",
            "treinador": {
              "nome": "Lilly Hays",
              "genero": "feminino",
              "idade": 16
            },
            "participantes": [
              {
                "nome": "Polly Hendrix",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Allison Pennington",
                "genero": "feminino",
                "idade": 37
              },
              {
                "nome": "Dale Mcconnell",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Stella Freeman",
                "genero": "feminino",
                "idade": 28
              },
              {
                "nome": "Margret Mason",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Erika Talley",
                "genero": "feminino",
                "idade": 38
              },
              {
                "nome": "Millicent Holcomb",
                "genero": "feminino",
                "idade": 29
              },
              {
                "nome": "Clara Hickman",
                "genero": "feminino",
                "idade": 38
              },
              {
                "nome": "Anthony Nash",
                "genero": "masculino",
                "idade": 29
              }
            ]
          },
          {
            "nome": "Silver Lynns",
            "treinador": {
              "nome": "Arnold Dorsey",
              "genero": "masculino",
              "idade": 44
            },
            "participantes": [
              {
                "nome": "Schwartz Vinson",
                "genero": "masculino",
                "idade": 38
              },
              {
                "nome": "Rutledge Hester",
                "genero": "masculino",
                "idade": 45
              },
              {
                "nome": "Vivian Griffith",
                "genero": "feminino",
                "idade": 35
              },
              {
                "nome": "Fox Fitzpatrick",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Horton Nieves",
                "genero": "masculino",
                "idade": 34
              },
              {
                "nome": "Chavez Richardson",
                "genero": "masculino",
                "idade": 22
              },
              {
                "nome": "Wolf Knapp",
                "genero": "masculino",
                "idade": 17
              },
              {
                "nome": "Cantrell Obrien",
                "genero": "masculino",
                "idade": 28
              },
              {
                "nome": "Bryant Burks",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Agnes Callahan",
                "genero": "feminino",
                "idade": 45
              },
              {
                "nome": "Juliette Santos",
                "genero": "feminino",
                "idade": 29
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "nome": "Galaxy Fiesta",
    "esporte": "hockey",
    "partidas": [
      {
        "placar": "7-1",
        "duracao": "3h14m28s",
        "times": [
          {
            "nome": "Blue Longorias",
            "treinador": {
              "nome": "Chaney Branch",
              "genero": "masculino",
              "idade": 16
            },
            "participantes": [
              {
                "nome": "Willa Bray",
                "genero": "feminino",
                "idade": 41
              },
              {
                "nome": "Cervantes Bradley",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Flora Daniel",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Wilkerson Dotson",
                "genero": "masculino",
                "idade": 23
              },
              {
                "nome": "Chen Barnes",
                "genero": "masculino",
                "idade": 23
              },
              {
                "nome": "Randolph Calderon",
                "genero": "masculino",
                "idade": 19
              },
              {
                "nome": "Lawanda Gomez",
                "genero": "feminino",
                "idade": 15
              },
              {
                "nome": "May Barber",
                "genero": "masculino",
                "idade": 26
              },
              {
                "nome": "Walsh Wood",
                "genero": "masculino",
                "idade": 26
              }
            ]
          },
          {
            "nome": "Ferocious Edinburgs",
            "treinador": {
              "nome": "Rosales Hicks",
              "genero": "masculino",
              "idade": 31
            },
            "participantes": [
              {
                "nome": "Peggy Blackburn",
                "genero": "feminino",
                "idade": 47
              },
              {
                "nome": "Daphne Smith",
                "genero": "feminino",
                "idade": 34
              },
              {
                "nome": "Mcintosh Velez",
                "genero": "masculino",
                "idade": 42
              },
              {
                "nome": "Julie Kane",
                "genero": "feminino",
                "idade": 31
              },
              {
                "nome": "Simone Conner",
                "genero": "feminino",
                "idade": 43
              },
              {
                "nome": "Holly Meadows",
                "genero": "feminino",
                "idade": 21
              },
              {
                "nome": "Guy Kerr",
                "genero": "masculino",
                "idade": 16
              },
              {
                "nome": "Patricia Shaffer",
                "genero": "feminino",
                "idade": 26
              },
              {
                "nome": "Delores Maddox",
                "genero": "feminino",
                "idade": 18
              },
              {
                "nome": "Claudette Blair",
                "genero": "feminino",
                "idade": 28
              }
            ]
          }
        ]
      },
      {
        "placar": "7-2",
        "duracao": "2h4m22s",
        "times": [
          {
            "nome": "Red Trails",
            "treinador": {
              "nome": "Shirley Dennis",
              "genero": "feminino",
              "idade": 29
            },
            "participantes": [
              {
                "nome": "Melva Haynes",
                "genero": "feminino",
                "idade": 36
              },
              {
                "nome": "Fitzpatrick Levine",
                "genero": "masculino",
                "idade": 20
              },
              {
                "nome": "Angeline Baird",
                "genero": "feminino",
                "idade": 38
              },
              {
                "nome": "Celia Curry",
                "genero": "feminino",
                "idade": 43
              },
              {
                "nome": "Glenda Alvarado",
                "genero": "feminino",
                "idade": 29
              },
              {
                "nome": "Rogers Larson",
                "genero": "masculino",
                "idade": 42
              },
              {
                "nome": "Roy Reilly",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Carey Walton",
                "genero": "feminino",
                "idade": 16
              },
              {
                "nome": "Landry Kelley",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Mcknight Cox",
                "genero": "masculino",
                "idade": 20
              },
              {
                "nome": "Castro Hensley",
                "genero": "masculino",
                "idade": 24
              }
            ]
          },
          {
            "nome": "Ferocious Cashtowns",
            "treinador": {
              "nome": "Vicki Thornton",
              "genero": "feminino",
              "idade": 19
            },
            "participantes": [
              {
                "nome": "Blackwell Greer",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Cecelia Barker",
                "genero": "feminino",
                "idade": 28
              },
              {
                "nome": "Rush Fernandez",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Watkins Palmer",
                "genero": "masculino",
                "idade": 24
              },
              {
                "nome": "Galloway Simpson",
                "genero": "masculino",
                "idade": 16
              },
              {
                "nome": "Vaughn Lee",
                "genero": "masculino",
                "idade": 33
              },
              {
                "nome": "Patel Flynn",
                "genero": "masculino",
                "idade": 48
              },
              {
                "nome": "Clay Ashley",
                "genero": "masculino",
                "idade": 20
              },
              {
                "nome": "Sheila Gallegos",
                "genero": "feminino",
                "idade": 33
              },
              {
                "nome": "Levine Barlow",
                "genero": "masculino",
                "idade": 47
              }
            ]
          }
        ]
      },
      {
        "placar": "3-3",
        "duracao": "3h31m36s",
        "times": [
          {
            "nome": "Blue Mahtowas",
            "treinador": {
              "nome": "Watson Duffy",
              "genero": "masculino",
              "idade": 25
            },
            "participantes": [
              {
                "nome": "Houston Riddle",
                "genero": "masculino",
                "idade": 30
              },
              {
                "nome": "Liz Moon",
                "genero": "feminino",
                "idade": 45
              },
              {
                "nome": "Tricia Brock",
                "genero": "feminino",
                "idade": 33
              },
              {
                "nome": "Huffman Rasmussen",
                "genero": "masculino",
                "idade": 33
              },
              {
                "nome": "Latoya Hart",
                "genero": "feminino",
                "idade": 36
              },
              {
                "nome": "Delia Nichols",
                "genero": "feminino",
                "idade": 43
              },
              {
                "nome": "Eleanor Guzman",
                "genero": "feminino",
                "idade": 43
              },
              {
                "nome": "Nolan Farley",
                "genero": "masculino",
                "idade": 42
              },
              {
                "nome": "Corrine Hodge",
                "genero": "feminino",
                "idade": 26
              },
              {
                "nome": "Jessica Boone",
                "genero": "feminino",
                "idade": 33
              },
              {
                "nome": "Nielsen Mullen",
                "genero": "masculino",
                "idade": 22
              },
              {
                "nome": "Lucile Morin",
                "genero": "feminino",
                "idade": 47
              }
            ]
          },
          {
            "nome": "Explosive Orins",
            "treinador": {
              "nome": "Myra Burton",
              "genero": "feminino",
              "idade": 21
            },
            "participantes": [
              {
                "nome": "King Kirby",
                "genero": "masculino",
                "idade": 30
              },
              {
                "nome": "Crawford Ferguson",
                "genero": "masculino",
                "idade": 23
              },
              {
                "nome": "Muriel Walsh",
                "genero": "feminino",
                "idade": 27
              },
              {
                "nome": "Buck Chang",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Rosie Curtis",
                "genero": "feminino",
                "idade": 33
              },
              {
                "nome": "Deidre Mendez",
                "genero": "feminino",
                "idade": 31
              },
              {
                "nome": "Essie Burris",
                "genero": "feminino",
                "idade": 19
              },
              {
                "nome": "Cain Cross",
                "genero": "masculino",
                "idade": 19
              },
              {
                "nome": "Weeks Gray",
                "genero": "masculino",
                "idade": 36
              },
              {
                "nome": "Abbott Hines",
                "genero": "masculino",
                "idade": 42
              }
            ]
          }
        ]
      },
      {
        "placar": "0-6",
        "duracao": "2h4m6s",
        "times": [
          {
            "nome": "Red Baths",
            "treinador": {
              "nome": "Vang Vargas",
              "genero": "masculino",
              "idade": 39
            },
            "participantes": [
              {
                "nome": "Farrell Parker",
                "genero": "masculino",
                "idade": 26
              },
              {
                "nome": "Annmarie White",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Consuelo Case",
                "genero": "feminino",
                "idade": 32
              },
              {
                "nome": "Belinda Sandoval",
                "genero": "feminino",
                "idade": 33
              },
              {
                "nome": "Cara Cobb",
                "genero": "feminino",
                "idade": 43
              },
              {
                "nome": "Lynette Fuentes",
                "genero": "feminino",
                "idade": 39
              },
              {
                "nome": "Thomas Austin",
                "genero": "masculino",
                "idade": 45
              },
              {
                "nome": "Sanchez Sykes",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Leta Hurley",
                "genero": "feminino",
                "idade": 34
              },
              {
                "nome": "Elise Solis",
                "genero": "feminino",
                "idade": 47
              }
            ]
          },
          {
            "nome": "Ferocious Riegelwoods",
            "treinador": {
              "nome": "Tate Michael",
              "genero": "masculino",
              "idade": 41
            },
            "participantes": [
              {
                "nome": "Leonor Eaton",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Lopez Baker",
                "genero": "masculino",
                "idade": 16
              },
              {
                "nome": "Lorie Silva",
                "genero": "feminino",
                "idade": 25
              },
              {
                "nome": "Santos Johnson",
                "genero": "masculino",
                "idade": 38
              },
              {
                "nome": "Harrell Nielsen",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Becky Harrington",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Helena Miles",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Guerra Stark",
                "genero": "masculino",
                "idade": 16
              },
              {
                "nome": "Roslyn Rodriquez",
                "genero": "feminino",
                "idade": 30
              },
              {
                "nome": "Alyson Hunter",
                "genero": "feminino",
                "idade": 30
              },
              {
                "nome": "Kari Knox",
                "genero": "feminino",
                "idade": 45
              }
            ]
          }
        ]
      },
      {
        "placar": "8-7",
        "duracao": "2h53m40s",
        "times": [
          {
            "nome": "Red Cutters",
            "treinador": {
              "nome": "House Schneider",
              "genero": "masculino",
              "idade": 39
            },
            "participantes": [
              {
                "nome": "Magdalena Hayden",
                "genero": "feminino",
                "idade": 48
              },
              {
                "nome": "Potter Valentine",
                "genero": "masculino",
                "idade": 46
              },
              {
                "nome": "Doris Foley",
                "genero": "feminino",
                "idade": 40
              },
              {
                "nome": "Kelsey Salazar",
                "genero": "feminino",
                "idade": 45
              },
              {
                "nome": "England Cantu",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Robyn Armstrong",
                "genero": "feminino",
                "idade": 43
              },
              {
                "nome": "Barnett Russo",
                "genero": "masculino",
                "idade": 48
              },
              {
                "nome": "Baker Dickson",
                "genero": "masculino",
                "idade": 26
              },
              {
                "nome": "Jodie Kennedy",
                "genero": "feminino",
                "idade": 27
              },
              {
                "nome": "Tabitha Wilson",
                "genero": "feminino",
                "idade": 42
              }
            ]
          },
          {
            "nome": "Red Watchtowers",
            "treinador": {
              "nome": "Katy Grant",
              "genero": "feminino",
              "idade": 36
            },
            "participantes": [
              {
                "nome": "Waters Barrett",
                "genero": "masculino",
                "idade": 40
              },
              {
                "nome": "Obrien Park",
                "genero": "masculino",
                "idade": 39
              },
              {
                "nome": "Claire Wynn",
                "genero": "feminino",
                "idade": 28
              },
              {
                "nome": "Joyce Spears",
                "genero": "feminino",
                "idade": 39
              },
              {
                "nome": "Irwin Alvarez",
                "genero": "masculino",
                "idade": 40
              },
              {
                "nome": "Chrystal Justice",
                "genero": "feminino",
                "idade": 45
              },
              {
                "nome": "Marlene Bright",
                "genero": "feminino",
                "idade": 17
              },
              {
                "nome": "Minerva Montoya",
                "genero": "feminino",
                "idade": 27
              },
              {
                "nome": "Rhodes Moss",
                "genero": "masculino",
                "idade": 43
              },
              {
                "nome": "Hammond Fox",
                "genero": "masculino",
                "idade": 44
              },
              {
                "nome": "Maryanne Green",
                "genero": "feminino",
                "idade": 45
              }
            ]
          }
        ]
      },
      {
        "placar": "2-8",
        "duracao": "1h39m34s",
        "times": [
          {
            "nome": "Blue Winstons",
            "treinador": {
              "nome": "Loretta Phelps",
              "genero": "feminino",
              "idade": 17
            },
            "participantes": [
              {
                "nome": "Liza Figueroa",
                "genero": "feminino",
                "idade": 15
              },
              {
                "nome": "Myrtle Small",
                "genero": "feminino",
                "idade": 17
              },
              {
                "nome": "Mcdonald Robertson",
                "genero": "masculino",
                "idade": 23
              },
              {
                "nome": "Sharon Rojas",
                "genero": "feminino",
                "idade": 16
              },
              {
                "nome": "Bush Vasquez",
                "genero": "masculino",
                "idade": 24
              },
              {
                "nome": "Woodward Bauer",
                "genero": "masculino",
                "idade": 35
              },
              {
                "nome": "Nellie Lott",
                "genero": "feminino",
                "idade": 46
              },
              {
                "nome": "Booth Hampton",
                "genero": "masculino",
                "idade": 46
              },
              {
                "nome": "Lucia Newman",
                "genero": "feminino",
                "idade": 19
              },
              {
                "nome": "Henson Bradshaw",
                "genero": "masculino",
                "idade": 35
              }
            ]
          },
          {
            "nome": "Ferocious Esmonts",
            "treinador": {
              "nome": "Best Mclaughlin",
              "genero": "masculino",
              "idade": 25
            },
            "participantes": [
              {
                "nome": "Diana Mckee",
                "genero": "feminino",
                "idade": 20
              },
              {
                "nome": "Marcella Wiggins",
                "genero": "feminino",
                "idade": 19
              },
              {
                "nome": "Love Estes",
                "genero": "masculino",
                "idade": 31
              },
              {
                "nome": "Gabrielle Hernandez",
                "genero": "feminino",
                "idade": 43
              },
              {
                "nome": "Jaclyn Olsen",
                "genero": "feminino",
                "idade": 32
              },
              {
                "nome": "Roseann Barr",
                "genero": "feminino",
                "idade": 23
              },
              {
                "nome": "Kirsten Bush",
                "genero": "feminino",
                "idade": 29
              },
              {
                "nome": "Frazier Rogers",
                "genero": "masculino",
                "idade": 21
              },
              {
                "nome": "Ophelia Merritt",
                "genero": "feminino",
                "idade": 46
              },
              {
                "nome": "Drake Harding",
                "genero": "masculino",
                "idade": 27
              },
              {
                "nome": "Erica Contreras",
                "genero": "feminino",
                "idade": 46
              },
              {
                "nome": "Casey Pacheco",
                "genero": "feminino",
                "idade": 33
              }
            ]
          }
        ]
      },
      {
        "placar": "1-5",
        "duracao": "1h10m39s",
        "times": [
          {
            "nome": "Awesome Hardyvilles",
            "treinador": {
              "nome": "Mary Woodward",
              "genero": "feminino",
              "idade": 35
            },
            "participantes": [
              {
                "nome": "Selena Pena",
                "genero": "feminino",
                "idade": 33
              },
              {
                "nome": "Madeline York",
                "genero": "feminino",
                "idade": 22
              },
              {
                "nome": "Kent Kelly",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Alisha Rivera",
                "genero": "feminino",
                "idade": 47
              },
              {
                "nome": "Sosa Hardin",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Buckner Jimenez",
                "genero": "masculino",
                "idade": 32
              },
              {
                "nome": "Mclaughlin Colon",
                "genero": "masculino",
                "idade": 45
              },
              {
                "nome": "Kaye Clay",
                "genero": "feminino",
                "idade": 16
              },
              {
                "nome": "Acosta Patel",
                "genero": "masculino",
                "idade": 15
              },
              {
                "nome": "Alexis Gordon",
                "genero": "feminino",
                "idade": 23
              }
            ]
          },
          {
            "nome": "The Hoehnes",
            "treinador": {
              "nome": "Hood Hudson",
              "genero": "masculino",
              "idade": 28
            },
            "participantes": [
              {
                "nome": "Zimmerman Patterson",
                "genero": "masculino",
                "idade": 24
              },
              {
                "nome": "Bartlett Mcdaniel",
                "genero": "masculino",
                "idade": 34
              },
              {
                "nome": "Laverne Cook",
                "genero": "feminino",
                "idade": 31
              },
              {
                "nome": "Andrews Lawson",
                "genero": "masculino",
                "idade": 25
              },
              {
                "nome": "Martina Wells",
                "genero": "feminino",
                "idade": 25
              },
              {
                "nome": "Bray Pace",
                "genero": "masculino",
                "idade": 41
              },
              {
                "nome": "Eugenia Fleming",
                "genero": "feminino",
                "idade": 33
              },
              {
                "nome": "Kitty Alford",
                "genero": "feminino",
                "idade": 33
              },
              {
                "nome": "Olga Swanson",
                "genero": "feminino",
                "idade": 26
              },
              {
                "nome": "Margarita Daugherty",
                "genero": "feminino",
                "idade": 33
              }
            ]
          }
        ]
      }
    ]
  }
]);