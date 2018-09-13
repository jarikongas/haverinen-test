
//  Additions.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-12-12 File created.   2016-12-12 Last modification.

/*  This program demonstrates the use of operator +.

    This operator works as addition operator only when there
    is a numerical value or expression on both sides of the operator.
    
    Otherwise it works as a string concatenation operator,
    which can convert numerical values to strings if necessary.
    
    Those operations that are surrounded by parentheses are
    carried out before other operations. Otherwise the operations
    are processed from left to right.
    
    The operator + is left-to-right associative.
*/


var  some_number  =  1234 ;

process.stdout.write( "\n " ) ;
process.stdout.write( "xxxx" + some_number + "zzzz" ) ;
process.stdout.write( "\n " ) ;
process.stdout.write( "xxxx" + some_number + some_number + "zzzz" ) ;
process.stdout.write( "\n " ) ;
process.stdout.write( "xxxx" + ( some_number + some_number ) + "zzzz" ) ;
process.stdout.write( "\n " ) ;
process.stdout.write( some_number + some_number + "xxxx" + "zzzz" ) ;
process.stdout.write( "\n " ) ;
process.stdout.write( some_number + ( some_number + "xxxx" ) + "zzzz" ) ;
process.stdout.write( "\n " ) ;
process.stdout.write( "xxxx" + "zzzz" + some_number + ( some_number + 1));
process.stdout.write( "\n " ) ;
process.stdout.write( "xxxx" + "zzzz" + some_number + some_number + 1 ) ;

process.stdout.write( "\n\n" ) ;
