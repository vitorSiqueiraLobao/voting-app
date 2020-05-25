class View{
   constructor(){
      self = this
      this._inputs = $("a").toArray()
      this._voto = new Voto()
      this.init()

   }
   init(){
      this._inputs.forEach(function(input,index){
         input.addEventListener("click",function(event){
            event.preventDefault()
            if(self._voto._isVoted == 0){
               self._voto.votar(index)
               input.classList.add("votado")
               self.atualiza()
            }
         })
      })   
   }

   atualiza(){
      self._inputs.forEach((input,index)=>{

         let div = document.createElement("div")
         div.textContent = `${self._voto._helper.getPercentagem(self._voto._totalVotos,self._voto._votos[index])}%`
         div.classList.add("esquerda")
         input.appendChild(div)
        

      })
   }
   
}