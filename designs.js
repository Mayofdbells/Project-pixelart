// creates the grid 
$(document).ready(function() {
    $('#sizePicker').submit('click', function makeGrid(grid) {
        var height = $('#inputHeight').val();
        var width = $('#inputWeight').val();

        $('tr').remove() /*prevents grid from expanding beyond the input height when submit button is clicked*/

        //creates  for loop for the size input 
        for (var i = 1; i <= width; i++) {
            $('table').append('<tr></tr>');
            for (var k = 1; k <= height; k++) {
                $('tr:last').append('<td></td>');
                $('td').attr("class", 'cells');
            }
        }
        grid.preventDefault(); //returns the  values of the grid function

        /* The code below creates an event function for the color picker so that color is applied to to the block of the grid when user selects any color and clicks on the block*/

        $('.cells').click(function(event) {
            var paint = $('#colorPicker').val();
            $(event.target).css('background-color', paint);
        });
    });
});