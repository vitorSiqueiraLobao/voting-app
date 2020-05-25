class Voto{
   constructor(){
      this._dados = new Dados()
      this._helper = new Helper()
      this._isVoted = 0 //falso
      this._votos = this._dados._dados.votos
      this._totalVotos = this._dados._dados.totalVotos
      console.log(this._totalVotos)
   }
   votar(index){
      this._votos[index]++
      this._totalVotos++
      this._isVoted=1
      console.log(this._helper.getPercentagem(this._totalVotos,this._votos[index]))
   }
}