# 🍽️ Factory Pattern - Yemek Sipariş Uygulaması

Bu proje, Factory Design Pattern'in React Native ve TypeScript kullanılarak gerçek dünya uygulamasını göstermektedir. Proje, bir yemek sipariş uygulaması üzerinden Factory Pattern'in nasıl uygulanabileceğini gösterir.

## 📱 Uygulama Özellikleri

- Pizza, Burger ve Salata siparişi
- Sepet yönetimi
- Toplam fiyat hesaplama
- Modern ve kullanıcı dostu arayüz
- TypeScript ile tip güvenliği

## 🏗️ Factory Pattern Uygulaması

Bu projede Factory Pattern şu şekilde uygulanmıştır:

### 1. Soyut Temel Sınıf ve Arayüz
```typescript
interface IFood {
    name: string;
    price: number;
    ingredients: string[];
    preparationTime: number;
    calories: number;
    calculatePrice(): number;
}
```

### 2. Concrete (Somut) Sınıflar
- Pizza
- Burger
- Salad

### 3. Factory Sınıfı
```typescript
class FoodFactory {
    public static createFood(type: FoodType, variant: string): IFood {
        // Yemek türüne göre nesne oluşturma
    }
}
```

## 🛠️ Teknolojiler

- React Native
- Expo
- TypeScript
- Factory Design Pattern

## 📂 Proje Yapısı

```
src/
├── factories/
│   └── FoodFactory.ts
├── models/
│   └── Food.ts
├── managers/
│   └── OrderManager.ts
└── screens/
    └── MenuScreen.tsx
```

## 💡 Factory Pattern'in Avantajları

1. **Nesne Oluşturma Soyutlaması**: Yemek nesnelerinin oluşturulması FoodFactory üzerinden soyutlanmıştır.

2. **Kolay Genişletilebilirlik**: Yeni yemek türleri eklemek için sadece:
   - Yeni bir yemek sınıfı oluşturun
   - Factory'ye yeni türü ekleyin

3. **Bakım Kolaylığı**: Tüm nesne oluşturma mantığı tek bir yerde toplandığından bakımı kolaydır.

4. **Tip Güvenliği**: TypeScript ile tam tip güvenliği sağlanmıştır.

## 📝 Kullanım Örneği

```typescript
// Yemek oluşturma
const pizza = FoodFactory.createFood(FoodType.PIZZA, 'margherita');
const burger = FoodFactory.createFood(FoodType.BURGER, 'classic');
const salad = FoodFactory.createFood(FoodType.SALAD, 'caesar');
```


