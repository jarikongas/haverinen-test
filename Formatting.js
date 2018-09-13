
//  Formatting.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-12-12 File created.   2016-12-12 Last modification.

/*  This program shows how to format text by using an
    external function named tools.printf(). This function understands
    so-called format specifiers for numerical values.
    
    For example, the format specifier %-9d specifies that
      - the value of variable is printed to a printing field
        that is 9 character positions wide
      - the value is shown left-justified (the minus sign says this)
      - the value is shown in decimal form (the letter d says this)
      
    Format specifiers begin with character %, the percent sign.
    
    There is also a function named tools.sprintf() that returns
    a string that is formatted according to the used format specifiers.

    To find examples about formatting floating-point values,
    see programs Miles.js and Distance.js.
    
    A function named printf() exists in many programming languages.
    It should be easy to find information with a little Googling.

*/

const tools = require( "./externals/tools.js" ) ; // for sprintf() and printf()

var some_number  =  123456 ;

tools.printf(  "\n 12345678901234567890 \n" ) ;

tools.printf( "\n %9d   right justified",  some_number ) ;
tools.printf( "\n %-9d   left justified",   some_number ) ;
tools.printf( "\n %9X   right hexadecimal", some_number ) ;
tools.printf( "\n %-9X   left hexadecimal", some_number ) ;
tools.printf( "\n %d  no printing field",  some_number ) ;
tools.printf( "\n %X  hexadecimal uppercase", some_number ) ;
tools.printf( "\n %x  hexadecimal lowercase", some_number ) ;
tools.printf( "\n %012d  leading zeroes", some_number ) ;
tools.printf( "\n %012X  hexadecimal",  some_number ) ;
tools.printf( "\n" ) ;

var another_text_to_print  =
       tools.sprintf( "\n %09d   leading zeroes", some_number ) ;
tools.printf( another_text_to_print ) ;

another_text_to_print  =  "SOME TEXT" ;
tools.printf( "\n %s is a string.", another_text_to_print ) ;
tools.printf( "\n %c is a character.", 65 ) ; // 65 is the code of uppercase A

process.stdout.write( "\n\n" ) ;
