// Exercise 1 - Closures
// Update the createAdder function below so that
// the below code works as intended



function createAdder(x){
    function add(y){
        return x+y
    }
    return add
}

let addEight = createAdder(8);
console.log(addEight(10));
console.log(addEight(17)); 
console.log(addEight(50)); 
console.log(addEight(100)); 
console.log(addEight(92)); 

let addThree = createAdder(3);
console.log(addThree(10)); 
console.log(addThree(17));
console.log(addThree(50)); 
console.log(addThree(100)); 



// Exercise 2 - Promises 
// Using the below getMovieInfo function, which is a Promised-base function, write an asynchronous function (.then().catch() or async/await)
// called printMovieInfo that will take in a movie title and then either displays the movie information or logs an error with a console.warn().


function getMovieInfo(movieName){
    return new Promise((resolve, reject) => {
        if (movieName.length > 5){
            let movie = {
                id: 123,
                title: movieName,
                director: 'Christopher Spielberg',
                runtime: 157,
                description: 'Good vs Evil'
            }
            resolve(movie)
        } else {
            reject(`${movieName} cannot be accessed because it is too short.`)
        }
    })
}



function printMovieInfo(movieName){
    getMovieInfo(movieName)
        .then(console.log(`${movieName} directed by Christopher Spielberg.  A story of Good vs Evil that runs for 157 minutes`))
        .catch(err => console.warn(err))
}

printMovieInfo('Stickybuns')
printMovieInfo('S')



/* Why doesn't the getMovieInfo.movie.director work?  What is the right way to call the result here, I couldn't find it on google

function printMovieInfo(movieName){
    getMovieInfo(movieName)
        .then(console.log(`${movieName} directed by ${getMovieInfo.movie.director} that runs for ${getMovieInfo.movie.runtime} minutes`))
        .catch(err => console.warn(err))
}

*/
