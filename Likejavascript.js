
//  Likejavascript.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-19 File created.   2017-10-15 Last modification.

process.stdout.write( "\n Do you like the JavaScript language?"
                   +  "\n Please, answer Y or N :  " ) ;

process.stdin.on( "data", function( input_from_user )
{
   // The following statements will be executed after the user
   // of this program has typed in a response.

   // given_letter will refer to the first letter
   // of the user response.

   var given_letter = ( String( input_from_user ) )[ 0 ] ;

   if ( given_letter  ==  'Y' ||  given_letter  ==  'y' )
   {
      process.stdout.write( "\n That's nice to hear. \n\n" ) ;
   }
   else if ( given_letter  ==  'N' || given_letter  ==  'n' )
   {
      process.stdout.write( "\n That is not so nice to hear. "
                         +  "\n I hope you change your mind soon.\n\n" ) ;
   }
   else
   {
      process.stdout.write( "\n I do not understand \""
                         +  given_letter   +  "\".\n\n" ) ;
   }

   process.exit() ;  // This terminates the program.
} ) ;

