export class Recette
{
  constructor(
    private id: string,
    private nomRecette :string,
    private descriptionRecette: string,
    private ingredients: string,
    private tempsPreparation: number,
    private imgrecette:string,
  ){}
}
