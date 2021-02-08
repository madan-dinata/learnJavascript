// Closure merupakan kombinasi antara function dan lingkungan lexical di dalam fuction tersebut

function coba() {
    let nama = "madan"
    function tampilCoba() {
        console.log(nama)
    }
    tampilCoba()
}

coba()