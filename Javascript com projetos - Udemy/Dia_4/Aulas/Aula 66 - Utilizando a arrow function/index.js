

const movies = [
    {id:1, title:"Matrix", year:1999},
    {id:2, title:"The Lord of the Rings", year:2001},
    {id:3, title:"The Lord of the Rings: The Two Towers", year:2002},
]

console.log(movies.find(movie => movie.title ==="Matrix")) // { id: 1, title: 'Matrix', year: 1999 }