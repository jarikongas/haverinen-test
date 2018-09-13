
//  LargestNumber.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-21 File created.   2016-12-20 Last modification.

process.stdout.write( "\n This program can find the largest of three"
                   +  "\n numbers you enter from the keyboard. "
                   +  "\n Please, enter three numbers separated "
                   +  "\n with single space characters :  " ) ;

process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in the numbers.
   
   var numeric_strings = input_from_user.toString().split( " " ) ;
   
   var first_number  = Number( numeric_strings[ 0 ] ) ;
   var second_number = Number( numeric_strings[ 1 ] ) ;
   var third_number  = Number( numeric_strings[ 2 ] ) ;

   var found_largest_number ;

   if ( first_number  >  second_number )
   {
      found_largest_number  =  first_number ;
   }
   else
   {
      found_largest_number  =  second_number ;
   }

   if ( third_number  >  found_largest_number )
   {
      found_largest_number  =  third_number ;
   }

   process.stdout.write( "\n The largest number is "
                      +  found_largest_number  +  ".\n\n" ) ;

   process.exit() ;

} ) ;





