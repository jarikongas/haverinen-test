
//  ArrayDemo.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-12-20 File created.   2016-12-20 Last modification.

// Here is a 'quick-and-dirty' padStart() method for the String class.
// This kind of method will most likely be available in future
// releases of JavaScript/Node.js.

// This method works correctly only in this program.

String.prototype.padStart = function( target_length, pad_character )
{
   var number_of_characters_to_pad = target_length - this.length ;

   var string_to_return = this ;

   while ( number_of_characters_to_pad > 0 )
   {
      string_to_return = pad_character + string_to_return ;

      number_of_characters_to_pad = 
          number_of_characters_to_pad - pad_character.length ;
   }

   return string_to_return ;
} ;


//  The following statement creates an array that contains two elements.
//  Subsequent statements append more elements to the array.
//  With method push() we can append one element to the end of an array.

var array_of_numbers = [ 333, 33 ] ;

array_of_numbers.push( 3 ) ;
array_of_numbers.push( array_of_numbers[ 2 ]  +  2 ) ;

for ( let number_index = 3 ;
          number_index < 49 ;
          number_index ++ )
{
   array_of_numbers.push( array_of_numbers[ number_index ]  +  2 ) ;
}

process.stdout.write( "\n The contents of \"array_of_numbers\" is:\n" ) ;

for ( let number_index  in  array_of_numbers )
{
   if ( number_index  %  10  ==  0 )
   {
      process.stdout.write( "\n" ) ;
   }

   process.stdout.write(
       ( "" + array_of_numbers[ number_index ] ).padStart( 5, " " ) ) ;
}

process.stdout.write( "\n\n" ) ;


