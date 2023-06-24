import { ReactNode } from "react";

export interface IExtendedIngredients {
  "id": number,
  "aisle": string,
  "image": string,
  "consistency": string,
  "name": string,
  "nameClean": string,
  "original": string,
  "originalName": string,
  "amount": number,
  "unit": string,
  "meta": Array<any>,
  "measures": {
    "us": {
      "amount": number,
      "unitShort": string,
      "unitLong": string
    },
    "metric": {
      "amount": number,
      "unitShort": string,
      "unitLong": string
    }
  }
}

export interface ISteps {
  "number": number,
  "step": string,
  "ingredients": [
    {
      "id": number,
      "name": string,
      "localizedName": string,
      "image": string
    }
  ],
  "equipment": [
    {
      "id": number,
      "name": string,
      "localizedName": string,
      "image": string
    },
    {
      "id": number,
      "name": string,
      "localizedName": string,
      "image": string
    }
  ],
  "length": {
    "number": number,
    "unit": string
  }
}

export interface IAnalyzedInstructions {
  "name": string,
  "steps": Array<ISteps>
}

export interface IVegetarianPicsTypes {
  "vegetarian": boolean,
  "vegan": boolean,
  "glutenFree": boolean,
  "dairyFree": boolean,
  "veryHealthy": boolean,
  "cheap": boolean,
  "veryPopular": boolean,
  "sustainable": boolean,
  "lowFodmap": boolean,
  "weightWatcherSmartPoints": number,
  "gaps": "no",
  "preparationMinutes": number,
  "cookingMinutes": number,
  "aggregateLikes": number,
  "healthScore": number,
  "creditsText": string,
  "license": string,
  "sourceName": string,
  "pricePerServing": number,
  "extendedIngredients": Array<any>,
  "id": number,
  "title": string,
  "readyInMinutes": number,
  "servings": number,
  "sourceUrl": string,
  "image": string,
  "imageType": string,
  "summary": string,
  "cuisines": Array<any>,
  "dishTypes": Array<string>,
  "diets": Array<string>,
  "occasions": Array<any>,
  "instructions": string,
  "analyzedInstructions": Array<any>,
  "originalId": null,
  spoonacularSourceUrl?: string,
}
export interface IRecipes {
  recipes: IVegetarianPicsTypes[]
}

export type CardType = "vegetarian" | "trending";

export interface PickCardItemProps {
  className?: string;
  cardType?: CardType;
  pick?: IVegetarianPicsTypes;
}

export interface PickCardProps {
  className?: string;
  cardType?: CardType;
  headline?: string;
  slidesPerView?: number;
  spaceBetween?: number
  picks?: IVegetarianPicsTypes[];
}

export interface SliderProps extends PickCardProps {
  children?: ReactNode;
}
