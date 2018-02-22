module.exports = function check(str, bracketsConfig) {

    var count = 0;
    var open = new Array();

    var strA, strB, openA, openB;
    
    for(var i=0; i<str.length;i++){
        if (open.length==0){
            count=0;
            for(var j=0;j<bracketsConfig.length;j++){
                if(str[i]==bracketsConfig[j][0]){
                    open.push(str[i]);
                    break;
                }
                else count+=1;

                if (count==bracketsConfig[j].length)
                return false;
            }
            
        }
        
        else if(open.length>0){
            var value=0, value1=0;
           for(var a=0;a<bracketsConfig.length;a++){
            for(var b=0;b<bracketsConfig[a].length;b++){
               if(str[i]==bracketsConfig[a][b] && value==0){
                  strA = a;
                  strB = b;
                  value=1;
               }

                if(open[open.length-1]==bracketsConfig[a][b] && value1==0){
                    openA=a;
                    openB=b;
                    value1=1;
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
