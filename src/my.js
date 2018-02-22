const config3 = [['(', ')'], ['|', '|']];
var str = '|()|';
var count = 0;
var open = new Array();

var strA, strB, openA, openB;

function message(){
    
    for(var i=0; i<str.length;i++){
        if (open.length==0){
            count=0;
            for(var j=0;j<config3.length;j++){
                if(str[i]==config3[j][0]){
                    open.push(str[i]);
                    break;
                }
                else count+=1;

                if (count==config3[j].length)
                return false;
            }
            
        }
        
        else if(open.length>0){
           for(var a=0;a<config3.length;a++){
            for(var b=0;b<config3[a].length;b++){
               if(str[i]==config3[a][b]){
                  strA = a;
                  strB = b;
               }

                if(open[open.length-1]==config3[a][b]){
                    openA=a;
                    openB=b;
                }
            }
           }

           if (strA==openA && strB!=openB){
               open.pop();
           }
           else if(strA!=openA && strB==openB){
               open.push(str[i]);
            }
            else if(strA==openA && strB==openB){
                open.pop();
            }
           else return false;
        }

    }

    if(open.length==0){
        return true;
    }
    else return false;
    
}
console.log(str[0]);
console.log(open);
console.log(message());
