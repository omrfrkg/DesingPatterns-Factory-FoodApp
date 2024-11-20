import { IFood, Pizza, Burger, Salad } from '../models/Food';

// Yemek türleri enum'ı
export enum FoodType {
    PIZZA = 'pizza',
    BURGER = 'burger',
    SALAD = 'salad'
}

// Yemek factory sınıfı
export class FoodFactory {
    // Pizza menüsü
    private static pizzaMenu = {
        margherita: {
            name: 'Margherita',
            price: 100,
            ingredients: ['Domates Sosu', 'Mozarella', 'Fesleğen'],
            calories: 850,
            prepTime: 20
        },
        pepperoni: {
            name: 'Pepperoni',
            price: 120,
            ingredients: ['Domates Sosu', 'Mozarella', 'Pepperoni'],
            calories: 950,
            prepTime: 20
        },
        veggie: {
            name: 'Veggie',
            price: 110,
            ingredients: ['Domates Sosu', 'Mozarella', 'Mantar', 'Biber', 'Zeytin'],
            calories: 800,
            prepTime: 25
        }
    };

    // Burger menüsü
    private static burgerMenu = {
        classic: {
            name: 'Classic',
            price: 90,
            ingredients: ['Dana Eti', 'Marul', 'Domates', 'Soğan', 'Turşu'],
            calories: 750,
            prepTime: 15
        },
        cheese: {
            name: 'Cheese',
            price: 95,
            ingredients: ['Dana Eti', 'Cheddar', 'Marul', 'Domates', 'Soğan'],
            calories: 850,
            prepTime: 15
        },
        vegan: {
            name: 'Vegan',
            price: 85,
            ingredients: ['Nohut Köftesi', 'Avokado', 'Roka', 'Domates'],
            calories: 550,
            prepTime: 18
        }
    };

    // Salata menüsü
    private static saladMenu = {
        caesar: {
            name: 'Sezar',
            price: 70,
            ingredients: ['Marul', 'Tavuk', 'Kruton', 'Parmesan', 'Sezar Sos'],
            calories: 450,
            prepTime: 10
        },
        greek: {
            name: 'Yunan',
            price: 65,
            ingredients: ['Domates', 'Salatalık', 'Zeytin', 'Peynir', 'Zeytinyağı'],
            calories: 350,
            prepTime: 8
        },
        quinoa: {
            name: 'Kinoa',
            price: 75,
            ingredients: ['Kinoa', 'Nohut', 'Avokado', 'Roka', 'Nar'],
            calories: 400,
            prepTime: 12
        }
    };

    // Yemek oluşturma metodu
    public static createFood(type: FoodType, variant: string): IFood {
        switch (type) {
            case FoodType.PIZZA:
                const pizzaDetails = this.pizzaMenu[variant as keyof typeof FoodFactory.pizzaMenu];
                if (!pizzaDetails) throw new Error('Geçersiz pizza türü');
                return new Pizza(
                    pizzaDetails.name,
                    pizzaDetails.price,
                    pizzaDetails.ingredients,
                    pizzaDetails.prepTime,
                    pizzaDetails.calories
                );

            case FoodType.BURGER:
                const burgerDetails = this.burgerMenu[variant as keyof typeof FoodFactory.burgerMenu];
                if (!burgerDetails) throw new Error('Geçersiz burger türü');
                return new Burger(
                    burgerDetails.name,
                    burgerDetails.price,
                    burgerDetails.ingredients,
                    burgerDetails.prepTime,
                    burgerDetails.calories
                );

            case FoodType.SALAD:
                const saladDetails = this.saladMenu[variant as keyof typeof FoodFactory.saladMenu];
                if (!saladDetails) throw new Error('Geçersiz salata türü');
                return new Salad(
                    saladDetails.name,
                    saladDetails.price,
                    saladDetails.ingredients,
                    saladDetails.prepTime,
                    saladDetails.calories
                );

            default:
                throw new Error('Geçersiz yemek türü');
        }
    }

    // Menü getirme metodları
    public static getPizzaMenu() {
        return this.pizzaMenu;
    }

    public static getBurgerMenu() {
        return this.burgerMenu;
    }

    public static getSaladMenu() {
        return this.saladMenu;
    }
}
