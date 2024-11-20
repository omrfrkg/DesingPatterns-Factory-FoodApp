// Temel yemek arayüzü
export interface IFood {
    id: string;
    name: string;
    price: number;
    ingredients: string[];
    prepTime: number; // dakika cinsinden
    calories: number;
    getDescription(): string;
    calculatePrice(): number;
}

// Soyut temel sınıf
export abstract class Food implements IFood {
    id: string;
    name: string;
    price: number;
    ingredients: string[];
    prepTime: number;
    calories: number;

    constructor(
        name: string,
        price: number,
        ingredients: string[],
        prepTime: number,
        calories: number
    ) {
        this.id = Math.random().toString(36).substr(2, 9);
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
        this.prepTime = prepTime;
        this.calories = calories;
    }

    abstract getDescription(): string;

    calculatePrice(): number {
        // Temel fiyat hesaplama, özel yemekler için override edilebilir
        return this.price;
    }
}

// Pizza sınıfı
export class Pizza extends Food {
    constructor(
        name: string,
        price: number,
        ingredients: string[],
        prepTime: number = 20,
        calories: number
    ) {
        super(name, price, ingredients, prepTime, calories);
    }

    getDescription(): string {
        return `${this.name} Pizza - İçindekiler: ${this.ingredients.join(', ')}`;
    }
}

// Burger sınıfı
export class Burger extends Food {
    constructor(
        name: string,
        price: number,
        ingredients: string[],
        prepTime: number = 15,
        calories: number
    ) {
        super(name, price, ingredients, prepTime, calories);
    }

    getDescription(): string {
        return `${this.name} Burger - İçindekiler: ${this.ingredients.join(', ')}`;
    }
}

// Salata sınıfı
export class Salad extends Food {
    constructor(
        name: string,
        price: number,
        ingredients: string[],
        prepTime: number = 10,
        calories: number
    ) {
        super(name, price, ingredients, prepTime, calories);
    }

    getDescription(): string {
        return `${this.name} Salata - İçindekiler: ${this.ingredients.join(', ')}`;
    }
}
