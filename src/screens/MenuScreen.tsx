import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Alert
} from 'react-native';
import { FoodFactory, FoodType } from '../factories/FoodFactory';
import { IFood } from '../models/Food';
import { OrderManager } from '../managers/OrderManager';

export const MenuScreen: React.FC = () => {

    const [cart, setCart] = useState<IFood[]>([]);
    const orderManager = new OrderManager();

    const addToCart = (type: FoodType, variant: string) => {
        try {
            const food = FoodFactory.createFood(type, variant);
            setCart([...cart, food]);
        } catch (error) {
            Alert.alert('Hata', error.message);
        }
    };

    const createOrder = () => {
        if (cart.length === 0) {
            Alert.alert('Hata', 'Sepetiniz boş!');
            return;
        }

        const order = orderManager.createOrder(cart);
        Alert.alert(
            'Başarılı',
            `Siparişiniz alındı! Toplam: ${order.totalPrice}₺`,
            [
                {
                    text: 'Tamam',
                    onPress: () => setCart([])
                }
            ]
        );
    };

    const renderMenuItem = (type: FoodType, variant: string, details: any) => (
        <TouchableOpacity
            key={`${type}-${variant}`}
            style={styles.menuItem}
            onPress={() => addToCart(type, variant)}
        >
            <Text style={styles.itemName}>{details.name}</Text>
            <Text style={styles.itemIngredients}>
                {details.ingredients.join(', ')}
            </Text>
            <View style={styles.itemDetails}>
                <Text style={styles.itemPrice}>{details.price}₺</Text>
                <View style={styles.rightDetails}>
                    <Text style={styles.itemCalories}>{details.calories} kcal</Text>
                    <Text style={styles.prepTime}>🕒 {details.prepTime} dk</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <ScrollView style={styles.menuContainer}>
                <Text style={styles.sectionTitle}>🍕 Pizzalar</Text>
                {Object.entries(FoodFactory.getPizzaMenu()).map(([variant, details]) =>
                    renderMenuItem(FoodType.PIZZA, variant, details)
                )}

                <Text style={styles.sectionTitle}>🍔 Burgerler</Text>
                {Object.entries(FoodFactory.getBurgerMenu()).map(([variant, details]) =>
                    renderMenuItem(FoodType.BURGER, variant, details)
                )}

                <Text style={styles.sectionTitle}>🥗 Salatalar</Text>
                {Object.entries(FoodFactory.getSaladMenu()).map(([variant, details]) =>
                    renderMenuItem(FoodType.SALAD, variant, details)
                )}
            </ScrollView>

            <View style={styles.cartContainer}>
                <View style={styles.cartDetails}>
                    <Text style={styles.cartText}>
                        Sepet: {cart.length} ürün - Toplam: {orderManager.calculateTotalPrice(cart)}₺
                    </Text>
                    <Text style={styles.cartPrepTime}>
                        Tahmini Hazırlama Süresi: 🕒 {orderManager.calculateTotalPrepTime(cart)} dk
                    </Text>
                </View>
                <TouchableOpacity
                    style={[
                        styles.orderButton,
                        cart.length === 0 && styles.disabledButton
                    ]}
                    onPress={createOrder}
                    disabled={cart.length === 0}
                >
                    <Text style={styles.orderButtonText}>Sipariş Ver</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    menuContainer: {
        flex: 1,
        padding: 16,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: '#333',
    },
    menuItem: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    itemIngredients: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    itemDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rightDetails: {
        alignItems: 'flex-end',
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    itemCalories: {
        fontSize: 14,
        color: '#999',
        marginBottom: 4,
    },
    prepTime: {
        fontSize: 14,
        color: '#666',
    },
    cartContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    cartDetails: {
        marginBottom: 12,
    },
    cartText: {
        fontSize: 16,
        marginBottom: 4,
        color: '#333',
    },
    cartPrepTime: {
        fontSize: 14,
        color: '#666',
    },
    orderButton: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: '#ccc',
    },
    orderButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
