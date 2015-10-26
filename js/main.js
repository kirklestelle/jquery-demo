/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */

// changes the content of the specified element
$('#change-content').on('click', function() {
    var selector = $('#selector').val();
    var content = $('#newContent').val();
    $(selector).text(content);
});

// adds the content at the end of the element
$('#add-at-end').on('click', function() {
    var selector = $('#selector').val();
    var content = $('#newContent').val();
    $(selector).append(content);
});

// add the content at the beginning of the element
$('#add-at-start').on('click', function() {
    var selector = $('#selector').val();
    var content = $('#newContent').val();
    $(selector).prepend(content);
});

// adds the content before the element
$('#insert-before').on('click', function() {
    var selector = $('#selector').val();
    var content = $('#newContent').val();
    $(selector).before($(content));
});

// moves the "element" to be after the element selected by the "content" (we're re-using the inputs, even if the labels don't match)
$('#move-after').on('click', function() {
    var selector = $('#selector').val();
    var content = $('#newContent').val();
    $(selector).insertAfter(content);
});
