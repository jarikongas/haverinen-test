
//  Game.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-18 File created.   2017-08-10 Last modification.

process.stdout.write( "\n This program converts your height to inches Please, "
                    + "\n type in your height in centimeters : " ) ;

process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in a number.



   var given_number = Number( input_from_user ) ;
   var inches_number1 = given_number / 2.54
   var rounded_inches = Math.floor(inches_number1)
   var feet_number = inches_number1 / 12
   var rounded_feet = Math.floor(feet_number)
   var remaining_inches = rounded_inches - rounded_feet * 12
   var height_meters = given_number / 100
   var squared_height = height_meters * height_meters
   var ideal_weight = 22 * squared_height
   if ( given_number < 0 )
   {
      process.stdout.write( "\n Negative numbers not allowed! \n\n" ) ;
      process.exit() ;
   }
   if ( given_number < 60 )
   {
      process.stdout.write( "\n  Only " + given_number + "! Are you really so short? \n\n" )
   }
   if ( 160 < given_number && given_number < 190  )
   {
      process.stdout.write( "\n  " + given_number + " is quite average height \n\n" )
   }
   if ( given_number > 400 )
   {
      process.stdout.write( "\n  You might be a giraffe. \n\n" )
   }
   process.stdout.write( "\n You typed in " + given_number +
                        "\n In inches this is  " + inches_number1 +
                        "\n This is around " + rounded_feet + " Feet and " + remaining_inches +  " inches " )
  process.stdout.write( "\n Your ideal body weight according to Lemmens formula is " + ideal_weight + " " )
    process.exit() ;

} ) ;
