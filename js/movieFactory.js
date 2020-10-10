var myMovies = JSON.parse(movies);


$(document).ready(function () {
    for (let i = 0; i < myMovies.length; i++) {
        //--------we add the cards each card is 6 cols in lg and md screens and 12 cols in sm and xs //then in line 8 we give the card that takes 6 cols a whole sub-row 
        $('.justify-content-between').append(`
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 movCard" id="movCard${i}">
            <div class="col-12 movCards">
                <div class="row">
                    <div class="col-5 p-2">
                        <img class="rounded" src='${myMovies[i].image}' alt='${myMovies[i].movieName}'" id="movImg${i}">
                    </div>
                    <div class="col-7">
                        <p class="movieTitel">${myMovies[i].movieName}</p>
                        <p class="description">${myMovies[i].description}</p>
                        <div class="aligner">
                            <div class="btnflex" id="${i}">
                                <button class="btnCntnr btn" id="likeBtn${i}">Like <span class="likeBtn">👍</span></button>
                                <span class="likesCount" id="likesCount${i}">${myMovies[i].likes}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>`);
    };
});
//-------------------------function for the like buttons that increments the likes in the array myMovies whenever we click the like button
$(document).ready(function () {
    $(".btnCntnr").on("click", function () {
        var index = $(this).parent().attr("id");
        myMovies[index].likes += 1;
        $(this).parent().find(".likesCount").html(myMovies[index].likes);
    })
})


$(document).ready(function () {
    $('#sortSlct').click(function () {
        var sortType = $("#sortSlct option:selected").text();
        if (sortType == "H2L") {
            function sorter(a, b) {
                return b.likes - a.likes;
            }
        } else if (sortType == "L2H") {
            function sorter(a, b) {
                return a.likes - b.likes;
            }
        }
        myMovies.sort(sorter);
        $('.justify-content-between').html(' ')//-------------we empty the container whenever we wanna sort 
        for (let i = 0; i < myMovies.length; i++) {  //-------and then we append the sorted content on line 56

            $('.justify-content-between').append(`<div class="col-12 col-sm-12 col-md-6 col-lg-6 movCard" id="movCard${i}">
                <div class="col-12 movCards">
                        <div class="row">
                            <div class="col-5 p-2">
                                <img class="rounded" src='${myMovies[i].image}' alt='${myMovies[i].movieName}'" id="movImg${i}">
                            </div>
                            <div class="col-7">
                                <p class="movieTitel">${myMovies[i].movieName}</p>
                                <p class="description">${myMovies[i].description}</p>
                                <div class="aligner">
                                    <div class="btnflex" id="${i}">
                                        <button class="btnCntnr btn" id="likeBtn${i}">Like <span class="likeBtn">👍</span></button>
                                        <span class="likesCount" id="likesCount${i}">${myMovies[i].likes}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);
        }//-----I needed to add the likes function after we sort the cards other wise it wouldnt work and i f only add it here it wouldnt work before the sorting has already happened
        $(".btnCntnr").on("click", function () {
            var index = $(this).parent().attr("id");
            myMovies[index].likes += 1;
            $(this).parent().find(".likesCount").html(myMovies[index].likes);
        })
    });
});
