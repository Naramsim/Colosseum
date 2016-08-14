export default function getHappiness(base) {
    if(base < 1) {
        return 'but is very unhappy';               
    } else if (base <36) {
        return 'but is quite annoyed';              
    } else if (base < 71) {     
        return 'and is happy';
    } else if (base < 101) {
        return 'and is very joyful';                
    } else if (base < 150) {
        return 'and is totally cheerful';               
    }
}