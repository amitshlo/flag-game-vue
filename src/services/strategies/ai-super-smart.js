export class AISuperSmartStrategy {
    
        constructor(usersLocation) {
          this.usersLocation = usersLocation
        }
        
        getAskTime () {
          return 1000
        }
        blockUser(curTop,curLeft){
           for (let location of usersLocation){
               if(Math.abs(location.curLeft-curLeft)<=30&&Math.abs(location.curTop-curTop<=30)){
                   if(curLeft<Location.curLeft&&curTop<=location.curTop){
                       return {top:0,left:-1,rh:5}
                   }
                   else if(curLeft<Location.curLeft){
                    return {top:-1,left:0,rh:5}                    
                   }
                   else if(curLeft=>Location.curLeft){
                    return {top:0,left:1,rh:5}                    
                   }
                   else {
                    return {top:1,left:0,rh:5}                    
                   }
               }
           }
        }
      }
        