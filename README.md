# Pokedex Challenge 👾
Este challenge consiste en crear una app que consuma una API y pueda mostrar la información obtenida en una lista.

Para que este resuelto correctamente es *necesario* que:
- Se cree un componente Button y que al apretarlo se dispare la llamada al endpoint de la API
- Crear y conectar un Loading que se va a mostrar durante todo el tiempo que la API este "cargando"
- Crear un componente de ListPokemons que reciba la información obtenida por el endpoint y dibuje una lista con todos los pokemons adentro + un scrollbar

![Esqueleto](https://i.imgur.com/xKOXY2n.png)

La API a consumir es la siguiente: [Pokeapi](https://pokeapi.co/)
La URL seria => `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`

# Información adicional
Un pokedex es un objecto ficticio que lista información de todos los Pokemons. Un Pokemon es un "animal/mounstro" chiquitito que pelea en batallas contra otros Pokemons. [Pokemon game serires](https://en.wikipedia.org/wiki/Pok%C3%A9mon_(video_game_series)).

## Puntos Extra

- Responsive
- Error handling
- Usar Redux para el consumo de la API
- Paginación

# Información del proyecto base

Este proyecto fue creado usando:
- Next 13
- Scss
- Redux
- Bootstrap 5

## Consideraciones

Se va a analizar la arquitectura de la aplicación, el consumo de información dinámica y la prolijidad al desarrollar.
Es muy importante que la aplicación cumpla con el listado de items y funcionalidades necesarias provisto arriba.

## Scripts

Para instalar todas las dependencias necesarias:
### `npm install`

Para prender el proyecto en modo dev
### `npm run dev`

Es importante que el comando de build termine sin errores!
### `npm run build`

## Entrega
El proyecto tiene que ser clonado usando el comando `git clone`.
Cada desarrollador debera crear un repositorio en su cuenta de github y subir el proyecto ahí dentro.
Dejandolo público para que luego alguien del equipo lo pueda analizar como corresponda.

(PD: Se puede cambiar el Remote del repositorio si sabe usar `git` correctamente)


## Next Documentation

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
