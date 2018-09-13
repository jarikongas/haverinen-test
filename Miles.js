
//  Miles.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-21 File created.   2016-11-21 Last modification.

/*  The result of the calculation is printed in four different
    ways in this program.

    It seems that you cannot format much with the standard
    util.format() function.

*/

const util = require( "util" ) ; // to access the util(ities) module

const tools = require( "./externals/tools.js" ) ; // for sprintf() and printf()

process.stdout.write( "\n This program prints conversion tables."
                   +  "\n  Type a letter to select a conversion table  "
                   +  "\n m miles to kilometers  "
                   +  "\n k kilometers to miles  " ) ;

                   
process.stdin.on( "data", function( input_from_user )

{
   // The statements below will be executed automatically after
   // the user has typed in the value.
   var user_selection = String( input_from_user ).charAt( 0 ) ;
   var distance_in_miles = Number( input_from_user.toString() ) ;
   var distance_in_miles2 = Number( input_from_user.toString() ) ;
   var distance_in_kilometers  =  1.6093 * distance_in_miles ;
   var distance_in_kilometers2  =  1.6093 * distance_in_miles ;
   var n = 0
   var x = 0
   process.stdout.write( "\n "  +  distance_in_miles  +  " miles is "
                      +  distance_in_kilometers  +  " kilometers.\n" ) ;

   process.stdout.write( util.format( "\n %d miles is %d kilometers.\n",
                         distance_in_miles,  distance_in_kilometers ) ) ;

   process.stdout.write( tools.sprintf( "\n %.3f miles is %.3f kilometers.\n",
                         distance_in_miles,  distance_in_kilometers ) ) ;
   if ( user_selection == 'm' || user_selection == 'M' ) 
   {while  (   n < 10   )
   {
     n++
     distance_in_kilometers = distance_in_kilometers + 10 * 1.6093
     distance_in_miles  =  distance_in_miles  +  10 ;
     tools.printf( "\n %.3f miles is %.3f kilometers.\n\n",
                 distance_in_miles,  distance_in_kilometers ) ;

    }
  }
  else
  {
  if ( user_selection == 'k' || user_selection == 'K' ) 
  
  {while  (   x < 10   )
  {
    x++
    distance_in_kilometers2 = distance_in_kilometers2 + 10
    distance_in_miles2  =  distance_in_miles2  +  10 / 1.609 ;
    tools.printf( "\n %.3f kilometers is %.3f Miles.\n\n",
                distance_in_kilometers2,  distance_in_miles2 ) ;
  }
  else    
  {
}
   process.exit() ;
  } } ) ;

