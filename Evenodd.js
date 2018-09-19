//Huomenta
// hyvää huomenta
//  Evenodd.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-12-12 File created.   2016-12-12 Last modification.

/*  In this program the remainder operator % is used to test
    whether the given number is even or odd.

    The remainder operator returns the remainder left over when
    its left operand is divided by its right operand.
*/

process.stdout.write( "\n This program can find out whether a number"
                   +  "\n is even or odd. Please, give a number in the range of 10-1000: " ) ;

process.stdin.on( "data", function( input_from_user )
{
   var given_number = Number( input_from_user ) ;
   var max = given_number + 10 ;
   var min = given_number - 10 ;
   if ( isNaN( given_number ) )
   {
      process.stdout.write( "\n  You did not type in a number.\n\n" )
   }
   else
   {
   if ( ( given_number  %  2 )  ==  0 )
   {
      process.stdout.write( "\n  " + given_number + " is even.\n\n" ) ;
   }
   else
   {
      process.stdout.write( "\n  " + given_number + " is odd. \n\n" ) ;
   }
   if ( ( given_number > 10 && given_number < 1001))
   {
      process.stdout.write( "\n  " + given_number + " is in the range.\n\n" ) ;
   }
   else 
   {
    process.stdout.write( "\n  " + given_number + " is not in the range. \n\n" ) ;
 }
 {

    const a_random_integer  =  Math.floor( Math.random() * (max - min) + min ) ;

process.stdout.write( "\n my number is " + a_random_integer + "  . \n\n" ) ;
{
    if ( ( a_random_integer > given_number))
{
   process.stdout.write( "\n  My number is greater. I won the game.\n\n" ) ;
}
else 
{
 process.stdout.write( "\n  Your number is greater. You won the game. Congratulations \n\n" ) ;
 }

}
}
   process.exit() ;
} } ) ;


