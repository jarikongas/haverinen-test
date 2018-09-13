
//  MathDemo.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-12-16 File created.   2016-12-16 Last modification.

const an_angle_in_radians  =  Math.PI / 4 ; // 45 degrees

const sine_of_an_angle  =  Math.sin( an_angle_in_radians ) ;

process.stdout.write( "\n The sine of an angle of 45 degrees is "
                   +  sine_of_an_angle  +  "\n" ) ;

const EARTH_RADIUS_IN_KILOMETERS  =  6379  ;

const diameter_of_the_earth  =
            2  *  Math.PI  *  EARTH_RADIUS_IN_KILOMETERS ;

//  Because our planet Earth is not exactly a ball, the
//  diameters and areas calculated below are approximate.

process.stdout.write( "\n Earth diameter in kilometers:  "
                    + diameter_of_the_earth ) ;

process.stdout.write( "\n Earth diameter in miles:       "
                    + diameter_of_the_earth / 1.6093  + "\n") ;

const surface_area_of_the_earth  =
            4  *  Math.PI  *  Math.pow( EARTH_RADIUS_IN_KILOMETERS, 2 );

process.stdout.write( "\n Earth area in square kilometers:  "
                    + surface_area_of_the_earth ) ;
process.stdout.write( "\n Earth area in square miles:       "
                    + surface_area_of_the_earth / Math.pow( 1.6093, 2 ) );

const a_random_integer  =  Math.floor( Math.random() * 50 ) ;

process.stdout.write( "\n\n And here is a random integer in the range "
                   +  "from 0 to 49:  "  +  a_random_integer  +  "\n" ) ;


//  Method Math.round() is able round numbers as humans do.
//  Math.floor() always rounds downwards, Math.ceil() rounds upwards.

process.stdout.write( "\n Math.floor( 34.56 ) evaluates to "
                    + Math.floor( 34.56 )
                    + "\n Math.round( 34.56 ) evaluates to "
                    + Math.round( 34.56 )
                    + "\n Math.ceil( 34.56 ) evaluates to  "
                    + Math.ceil( 34.56 )  +  "\n" ) ;

process.stdout.write( "\n Math.floor( 34.50 ) evaluates to "
                    + Math.floor( 34.50 )
                    + "\n Math.round( 34.50 ) evaluates to "
                    + Math.round( 34.50 )
                    + "\n Math.ceil( 34.50 ) evaluates to  "
                    + Math.ceil( 34.50 )  +  "\n" ) ;

process.stdout.write( "\n Math.floor( 34.05 ) evaluates to "
                    + Math.floor( 34.05 )
                    + "\n Math.round( 34.05 ) evaluates to "
                    + Math.round( 34.05 )
                    + "\n Math.ceil( 34.05 ) evaluates to  "
                    + Math.ceil( 34.05 )  +  "\n\n" ) ;

