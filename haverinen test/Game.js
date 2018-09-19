
//  Game.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-18 File created.   2017-08-10 Last modification.
// git push test21

process.stdout.write( "\n This program is a computer game. Please, "
                    + "\n type in a number : " ) ;

process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in a number.



   var given_number = Number( input_from_user ) ;

   var winning_number1 = given_number * 2 ;
   var winning_number2 = given_number * 2 + 1
   var winning_number3 = given_number * 2 + 2
   var divided_number1  = given_number /   Math.PI
   var square = Math.sqrt(given_number) ;

   if ( given_number < 0 )
   {
      process.stdout.write( "\n Negative numbers not allowed! \n\n" ) ;
      process.exit() ;
   }


   process.stdout.write( "\n You typed in " + given_number + "."
                      +  "\n My number is " + winning_number1 + ", " + winning_number2 + " and " + winning_number3  + "."
                      +  "\n Sorry, you lost. The only winning move is not to play. Embrace the futility of your attempts, "
                      +	 "\n and contemplate on the fruitlessness of human endeavour and life. Entropy will destroy everything, "
					  +  "\n and nothing you do matters.\n\n" ) ;
   process.stdout.write( "\n The value of Pi is " + Math.PI + " "
       + "\n Your number divided by Pi is " + divided_number1 + "."  ) ;
  process.stdout.write( "\n The square root of 2 is " + Math.sqrt( 2 ) + "."
    + "\n The square root of your number is " + square + "  " ) ;
    process.exit() ;

} ) ;

//  Another possibility to output text is to use the console.log() function.
//  console.log() automatically adds a newline after the given text.
//  process.stdout.write() does not do that.
